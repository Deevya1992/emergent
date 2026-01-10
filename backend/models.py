from pydantic import BaseModel, Field, EmailStr
from typing import List, Optional
from datetime import datetime

# Blog Post Models
class BlogPostCreate(BaseModel):
    title: str
    slug: str
    excerpt: str
    content: str
    author: str
    category: str
    image: Optional[str] = None
    readTime: Optional[str] = None
    published: bool = True

class BlogPost(BlogPostCreate):
    id: str = Field(default_factory=lambda: str(ObjectId()))
    date: datetime = Field(default_factory=datetime.utcnow)
    created_at: datetime = Field(default_factory=datetime.utcnow)
    updated_at: datetime = Field(default_factory=datetime.utcnow)

# Case Study Models
class CaseStudyCreate(BaseModel):
    title: str
    slug: str
    client: str
    industry: str
    challenge: str
    solution: str
    results: List[str]
    technologies: List[str]
    duration: str
    image: Optional[str] = None
    published: bool = True

class CaseStudy(CaseStudyCreate):
    id: str = Field(default_factory=lambda: str(ObjectId()))
    created_at: datetime = Field(default_factory=datetime.utcnow)
    updated_at: datetime = Field(default_factory=datetime.utcnow)

# Testimonial Models
class TestimonialCreate(BaseModel):
    name: str
    position: str
    company: str
    content: str
    rating: int = Field(ge=1, le=5)
    image: Optional[str] = None
    featured: bool = False
    published: bool = True

class Testimonial(TestimonialCreate):
    id: str = Field(default_factory=lambda: str(ObjectId()))
    created_at: datetime = Field(default_factory=datetime.utcnow)
    updated_at: datetime = Field(default_factory=datetime.utcnow)

# Contact Form Models
class ContactSubmission(BaseModel):
    name: str
    email: EmailStr
    phone: str
    company: Optional[str] = None
    service: str
    budget: Optional[str] = None
    message: str

class ContactSubmissionDB(ContactSubmission):
    id: str = Field(default_factory=lambda: str(ObjectId()))
    status: str = "pending"  # pending, contacted, closed
    submitted_at: datetime = Field(default_factory=datetime.utcnow)
    notes: Optional[str] = None

from bson import ObjectId
