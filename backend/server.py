from fastapi import FastAPI, APIRouter, HTTPException, Query
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
from pathlib import Path
from pydantic import BaseModel, Field
from typing import List, Optional
from datetime import datetime
from bson import ObjectId

ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# MongoDB connection
mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

# Create the main app without a prefix
app = FastAPI()

# Create a router with the /api prefix
api_router = APIRouter(prefix="/api")

# Import models and services
from models import (
    BlogPostCreate, BlogPost,
    CaseStudyCreate, CaseStudy,
    TestimonialCreate, Testimonial,
    ContactSubmission, ContactSubmissionDB
)
from email_service import send_contact_email

# Helper function to convert ObjectId to string
def serialize_doc(doc):
    if doc and '_id' in doc:
        doc['id'] = str(doc['_id'])
        del doc['_id']
    return doc

# ============================================
# BLOG ENDPOINTS
# ============================================

@api_router.get("/blog", response_model=List[dict])
async def get_blog_posts(
    category: Optional[str] = None,
    skip: int = Query(0, ge=0),
    limit: int = Query(100, ge=1, le=100)
):
    """Get all published blog posts with optional category filter"""
    query = {"published": True}
    if category and category != "All":
        query["category"] = category
    
    cursor = db.blog_posts.find(query).sort("date", -1).skip(skip).limit(limit)
    posts = await cursor.to_list(length=limit)
    return [serialize_doc(post) for post in posts]

@api_router.get("/blog/{slug}")
async def get_blog_post(slug: str):
    """Get single blog post by slug"""
    post = await db.blog_posts.find_one({"slug": slug, "published": True})
    if not post:
        raise HTTPException(status_code=404, detail="Blog post not found")
    return serialize_doc(post)

@api_router.post("/blog", response_model=dict)
async def create_blog_post(post: BlogPostCreate):
    """Create new blog post (admin)"""
    post_dict = post.dict()
    post_dict['date'] = datetime.utcnow()
    post_dict['created_at'] = datetime.utcnow()
    post_dict['updated_at'] = datetime.utcnow()
    
    result = await db.blog_posts.insert_one(post_dict)
    post_dict['id'] = str(result.inserted_id)
    return post_dict

# ============================================
# CASE STUDIES ENDPOINTS
# ============================================

@api_router.get("/case-studies", response_model=List[dict])
async def get_case_studies():
    """Get all published case studies"""
    cursor = db.case_studies.find({"published": True}).sort("created_at", -1)
    studies = await cursor.to_list(length=100)
    return [serialize_doc(study) for study in studies]

@api_router.get("/case-studies/{slug}")
async def get_case_study(slug: str):
    """Get single case study by slug"""
    study = await db.case_studies.find_one({"slug": slug, "published": True})
    if not study:
        raise HTTPException(status_code=404, detail="Case study not found")
    return serialize_doc(study)

@api_router.post("/case-studies", response_model=dict)
async def create_case_study(study: CaseStudyCreate):
    """Create new case study (admin)"""
    study_dict = study.dict()
    study_dict['created_at'] = datetime.utcnow()
    study_dict['updated_at'] = datetime.utcnow()
    
    result = await db.case_studies.insert_one(study_dict)
    study_dict['id'] = str(result.inserted_id)
    return study_dict

# ============================================
# TESTIMONIALS ENDPOINTS
# ============================================

@api_router.get("/testimonials", response_model=List[dict])
async def get_testimonials():
    """Get all published testimonials"""
    cursor = db.testimonials.find({"published": True}).sort("created_at", -1)
    testimonials = await cursor.to_list(length=100)
    return [serialize_doc(t) for t in testimonials]

@api_router.get("/testimonials/featured", response_model=List[dict])
async def get_featured_testimonials():
    """Get featured testimonials"""
    cursor = db.testimonials.find({"published": True, "featured": True}).limit(4)
    testimonials = await cursor.to_list(length=4)
    
    # If no featured testimonials, get latest 4
    if not testimonials:
        cursor = db.testimonials.find({"published": True}).sort("created_at", -1).limit(4)
        testimonials = await cursor.to_list(length=4)
    
    return [serialize_doc(t) for t in testimonials]

@api_router.post("/testimonials", response_model=dict)
async def create_testimonial(testimonial: TestimonialCreate):
    """Create new testimonial (admin)"""
    testimonial_dict = testimonial.dict()
    testimonial_dict['created_at'] = datetime.utcnow()
    testimonial_dict['updated_at'] = datetime.utcnow()
    
    result = await db.testimonials.insert_one(testimonial_dict)
    testimonial_dict['id'] = str(result.inserted_id)
    return testimonial_dict

# ============================================
# CONTACT FORM ENDPOINTS
# ============================================

@api_router.post("/contact", response_model=dict)
async def submit_contact_form(contact: ContactSubmission):
    """Submit contact form and send email notification"""
    try:
        # Save to database
        contact_dict = contact.dict()
        contact_dict['status'] = 'pending'
        contact_dict['submitted_at'] = datetime.utcnow()
        
        result = await db.contact_submissions.insert_one(contact_dict)
        contact_dict['id'] = str(result.inserted_id)
        
        # Send email notification (non-blocking)
        send_contact_email(contact_dict)
        
        return {
            "success": True,
            "message": "Thank you for contacting us! We'll get back to you within 24 hours.",
            "id": contact_dict['id']
        }
    except Exception as e:
        logging.error(f"Error submitting contact form: {str(e)}")
        raise HTTPException(status_code=500, detail="Error submitting form. Please try again.")

@api_router.get("/contact", response_model=List[dict])
async def get_contact_submissions(
    status: Optional[str] = None,
    skip: int = Query(0, ge=0),
    limit: int = Query(50, ge=1, le=100)
):
    """Get all contact submissions (admin)"""
    query = {}
    if status:
        query['status'] = status
    
    cursor = db.contact_submissions.find(query).sort("submitted_at", -1).skip(skip).limit(limit)
    submissions = await cursor.to_list(length=limit)
    return [serialize_doc(s) for s in submissions]

# ============================================
# SEED DATA ENDPOINT (Development Only)
# ============================================

@api_router.post("/seed-data")
async def seed_initial_data():
    """Seed database with initial data from mock.js"""
    try:
        # Check if data already exists
        blog_count = await db.blog_posts.count_documents({})
        if blog_count > 0:
            return {"message": "Data already seeded", "skipped": True}
        
        # Import mock data
        from data.mock_data import get_mock_data
        mock_data = get_mock_data()
        
        # Seed blog posts
        if mock_data['blog_posts']:
            await db.blog_posts.insert_many(mock_data['blog_posts'])
        
        # Seed case studies
        if mock_data['case_studies']:
            await db.case_studies.insert_many(mock_data['case_studies'])
        
        # Seed testimonials
        if mock_data['testimonials']:
            await db.testimonials.insert_many(mock_data['testimonials'])
        
        return {
            "success": True,
            "message": "Database seeded successfully",
            "counts": {
                "blog_posts": len(mock_data['blog_posts']),
                "case_studies": len(mock_data['case_studies']),
                "testimonials": len(mock_data['testimonials'])
            }
        }
    except Exception as e:
        logging.error(f"Error seeding data: {str(e)}")
        raise HTTPException(status_code=500, detail=f"Error seeding data: {str(e)}")

# ============================================
# ORIGINAL HELLO WORLD ENDPOINT
# ============================================

@api_router.get("/")
async def root():
    return {"message": "Deaxautt API - Enterprise IT Services & Digital Marketing"}

# Include the router in the main app
app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)

@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()