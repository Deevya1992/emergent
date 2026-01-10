# Backend Integration Contracts - Deaxautt Website

## Overview
This document outlines the backend API structure, data models, and integration points for the Deaxautt enterprise website.

## Data Models

### 1. Blog Post
```python
{
  "id": ObjectId,
  "title": String (required),
  "slug": String (unique, required),
  "excerpt": String (required),
  "content": String (required),
  "author": String (required),
  "date": DateTime (required),
  "category": String (required),
  "image": String (URL),
  "readTime": String,
  "published": Boolean (default: True),
  "created_at": DateTime,
  "updated_at": DateTime
}
```

### 2. Case Study
```python
{
  "id": ObjectId,
  "title": String (required),
  "slug": String (unique, required),
  "client": String (required),
  "industry": String (required),
  "challenge": String (required),
  "solution": String (required),
  "results": Array[String] (required),
  "technologies": Array[String],
  "duration": String,
  "image": String (URL),
  "published": Boolean (default: True),
  "created_at": DateTime,
  "updated_at": DateTime
}
```

### 3. Testimonial
```python
{
  "id": ObjectId,
  "name": String (required),
  "position": String (required),
  "company": String (required),
  "content": String (required),
  "rating": Integer (1-5, required),
  "image": String (URL),
  "featured": Boolean (default: False),
  "published": Boolean (default: True),
  "created_at": DateTime,
  "updated_at": DateTime
}
```

### 4. Contact Submission
```python
{
  "id": ObjectId,
  "name": String (required),
  "email": String (required),
  "phone": String (required),
  "company": String,
  "service": String (required),
  "budget": String,
  "message": String (required),
  "status": String (enum: pending, contacted, closed),
  "submitted_at": DateTime,
  "notes": String
}
```

## API Endpoints

### Blog APIs
- `GET /api/blog` - Get all published blog posts (with pagination & filtering)
- `GET /api/blog/:slug` - Get single blog post by slug
- `POST /api/blog` - Create new blog post (admin)
- `PUT /api/blog/:id` - Update blog post (admin)
- `DELETE /api/blog/:id` - Delete blog post (admin)

### Case Studies APIs
- `GET /api/case-studies` - Get all published case studies
- `GET /api/case-studies/:slug` - Get single case study by slug
- `POST /api/case-studies` - Create new case study (admin)
- `PUT /api/case-studies/:id` - Update case study (admin)
- `DELETE /api/case-studies/:id` - Delete case study (admin)

### Testimonials APIs
- `GET /api/testimonials` - Get all published testimonials
- `GET /api/testimonials/featured` - Get featured testimonials
- `POST /api/testimonials` - Create new testimonial (admin)
- `PUT /api/testimonials/:id` - Update testimonial (admin)
- `DELETE /api/testimonials/:id` - Delete testimonial (admin)

### Contact Form APIs
- `POST /api/contact` - Submit contact form (sends email notification)
- `GET /api/contact` - Get all contact submissions (admin)
- `PUT /api/contact/:id` - Update contact submission status (admin)

## Email Notifications

### Contact Form Email
**Trigger**: When user submits contact form
**To**: info@deaxautt.com
**Subject**: New Contact Form Submission - Deaxautt
**Content**:
- Name, Email, Phone
- Company, Service, Budget
- Message
- Submission timestamp

## Frontend Integration Points

### Mocked Data (to be replaced):
- `/app/frontend/src/data/mock.js` - Contains all mock data
  - `blogPosts` → Replace with API call to `/api/blog`
  - `caseStudies` → Replace with API call to `/api/case-studies`
  - `testimonials` → Replace with API call to `/api/testimonials`
  - Static data (clients, industries, faqs, technologies) → Keep as is

### Components to Update:
1. `/app/frontend/src/pages/Blog.jsx`
   - Replace `import { blogPosts } from '../data/mock'`
   - Add API call: `axios.get('/api/blog')`

2. `/app/frontend/src/pages/CaseStudies.jsx`
   - Replace `import { caseStudies } from '../data/mock'`
   - Add API call: `axios.get('/api/case-studies')`

3. `/app/frontend/src/pages/Home.jsx`
   - Replace testimonials import
   - Add API call: `axios.get('/api/testimonials/featured')`

4. `/app/frontend/src/pages/Contact.jsx`
   - Update form submission
   - Add API call: `axios.post('/api/contact', formData)`

## Environment Variables

### Backend (.env)
- `MONGO_URL` - Already configured
- `DB_NAME` - Already configured
- `SMTP_HOST` - Email server host
- `SMTP_PORT` - Email server port
- `SMTP_USER` - Email username
- `SMTP_PASSWORD` - Email password
- `CONTACT_EMAIL` - Recipient email (info@deaxautt.com)

## Implementation Priority
1. Contact form API with email notifications ✅ Priority 1
2. Blog posts API ✅ Priority 2
3. Case studies API ✅ Priority 2
4. Testimonials API ✅ Priority 3
5. Frontend integration and mock data removal ✅ Priority 4

## Testing Checklist
- [ ] Contact form submission works
- [ ] Email notifications are sent
- [ ] Blog posts are fetched from API
- [ ] Case studies are fetched from API
- [ ] Testimonials are fetched from API
- [ ] Error handling for API failures
- [ ] Loading states while fetching data
