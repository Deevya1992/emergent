# BACKEND TESTING & MONITORING GUIDE
## Deaxautt Enterprise Website

---

## QUICK STATUS CHECK

### 1. Check Backend Status
```bash
sudo supervisorctl status backend
```

**Expected Output:**
```
backend                          RUNNING   pid XXXX, uptime X:XX:XX
```

### 2. View Real-time Logs
```bash
# Error logs (shows issues)
tail -f /var/log/supervisor/backend.err.log

# Output logs (shows requests and responses)
tail -f /var/log/supervisor/backend.out.log

# Last 50 lines of errors
tail -n 50 /var/log/supervisor/backend.err.log

# Last 50 lines of output
tail -n 50 /var/log/supervisor/backend.out.log
```

### 3. Restart Backend
```bash
sudo supervisorctl restart backend
```

---

## API ENDPOINT TESTING

### Root API
```bash
curl http://localhost:8001/api/
```

**Expected Response:**
```json
{
    "message": "Deaxautt API - Enterprise IT Services & Digital Marketing"
}
```

---

### Blog Posts API

**Get All Blog Posts:**
```bash
curl http://localhost:8001/api/blog | python3 -m json.tool
```

**Get Blog Post by Slug:**
```bash
curl http://localhost:8001/api/blog/future-ai-enterprise-software | python3 -m json.tool
```

**Create New Blog Post (Admin):**
```bash
curl -X POST http://localhost:8001/api/blog \
  -H "Content-Type: application/json" \
  -d '{
    "title": "New Blog Post Title",
    "slug": "new-blog-post",
    "excerpt": "Brief description of the post",
    "content": "Full content of the blog post goes here...",
    "author": "Author Name",
    "category": "Technology",
    "image": "https://example.com/image.jpg",
    "readTime": "5 min read"
  }' | python3 -m json.tool
```

---

### Case Studies API

**Get All Case Studies:**
```bash
curl http://localhost:8001/api/case-studies | python3 -m json.tool
```

**Get Case Study by Slug:**
```bash
curl http://localhost:8001/api/case-studies/ecommerce-transformation | python3 -m json.tool
```

**Create New Case Study (Admin):**
```bash
curl -X POST http://localhost:8001/api/case-studies \
  -H "Content-Type: application/json" \
  -d '{
    "title": "New Case Study Title",
    "slug": "new-case-study",
    "client": "Client Company Name",
    "industry": "Technology",
    "challenge": "Description of the challenge...",
    "solution": "Description of the solution...",
    "results": [
      "100% increase in performance",
      "50% cost reduction"
    ],
    "technologies": ["React", "Node.js", "AWS"],
    "duration": "6 months",
    "image": "https://example.com/image.jpg"
  }' | python3 -m json.tool
```

---

### Testimonials API

**Get All Testimonials:**
```bash
curl http://localhost:8001/api/testimonials | python3 -m json.tool
```

**Get Featured Testimonials:**
```bash
curl http://localhost:8001/api/testimonials/featured | python3 -m json.tool
```

**Create New Testimonial (Admin):**
```bash
curl -X POST http://localhost:8001/api/testimonials \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Client Name",
    "position": "CEO",
    "company": "Company Name",
    "content": "Great experience working with Deaxautt...",
    "rating": 5,
    "image": "https://example.com/image.jpg",
    "featured": true
  }' | python3 -m json.tool
```

---

### Contact Form API

**Submit Contact Form:**
```bash
curl -X POST http://localhost:8001/api/contact \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test Customer",
    "email": "test@example.com",
    "phone": "+919848000876",
    "company": "Test Company",
    "service": "Website Development",
    "budget": "10k-25k",
    "message": "I would like to discuss a project."
  }' | python3 -m json.tool
```

**Expected Response:**
```json
{
    "success": true,
    "message": "Thank you for contacting us! We'll get back to you within 24 hours.",
    "id": "unique-submission-id"
}
```

**Get All Contact Submissions (Admin):**
```bash
curl http://localhost:8001/api/contact | python3 -m json.tool
```

---

## DATABASE TESTING

### Check MongoDB Connection
```bash
# The backend logs will show MongoDB connection status
tail -n 100 /var/log/supervisor/backend.out.log | grep -i mongo
```

### Seed Database with Initial Data
```bash
curl -X POST http://localhost:8001/api/seed-data | python3 -m json.tool
```

**Expected Response:**
```json
{
    "success": true,
    "message": "Database seeded successfully",
    "counts": {
        "blog_posts": 5,
        "case_studies": 3,
        "testimonials": 4
    }
}
```

---

## EMAIL NOTIFICATION TESTING

### Development Mode
In development mode (when SMTP credentials are not set), emails are logged to console.

**Check Email Logs:**
```bash
tail -n 50 /var/log/supervisor/backend.out.log | grep -A 15 "EMAIL NOTIFICATION"
```

**Expected Output:**
```
📧 EMAIL NOTIFICATION (Development Mode)
==================================================
To: sales@deaxautt.com
Subject: New Contact Form Submission - Customer Name

Content:
Name: Customer Name
Email: customer@example.com
Phone: +919848000876
Company: Company Name
Service: Website Development
Budget: 10k-25k
Message: Project details...
==================================================
```

### Production Mode (with SMTP)
To enable real email sending, add to `/app/backend/.env`:
```
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASSWORD=your-app-password
CONTACT_EMAIL=sales@deaxautt.com
```

Then restart backend:
```bash
sudo supervisorctl restart backend
```

---

## COMMON BACKEND ISSUES & SOLUTIONS

### Issue 1: Backend Not Running
```bash
# Check status
sudo supervisorctl status backend

# Check error logs
tail -n 50 /var/log/supervisor/backend.err.log

# Restart
sudo supervisorctl restart backend
```

### Issue 2: MongoDB Connection Failed
```bash
# Check if MongoDB is running
sudo supervisorctl status

# Check MongoDB URL in .env
cat /app/backend/.env | grep MONGO_URL

# Restart backend
sudo supervisorctl restart backend
```

### Issue 3: Port Already in Use
```bash
# Check what's using port 8001
lsof -i :8001

# Kill process if needed
kill -9 <PID>

# Restart backend
sudo supervisorctl restart backend
```

### Issue 4: Import Errors
```bash
# Check if all dependencies are installed
pip list | grep fastapi
pip list | grep motor

# Reinstall if needed
cd /app/backend
pip install -r requirements.txt

# Restart backend
sudo supervisorctl restart backend
```

---

## PERFORMANCE MONITORING

### Check Backend Response Time
```bash
time curl -s http://localhost:8001/api/blog > /dev/null
```

### Check Memory Usage
```bash
ps aux | grep uvicorn
```

### Monitor Active Connections
```bash
netstat -an | grep :8001
```

---

## API DOCUMENTATION

### Available Endpoints Summary

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| GET | /api/ | Root API status | No |
| GET | /api/blog | Get all blog posts | No |
| GET | /api/blog/{slug} | Get blog post by slug | No |
| POST | /api/blog | Create blog post | Yes (Admin) |
| GET | /api/case-studies | Get all case studies | No |
| GET | /api/case-studies/{slug} | Get case study by slug | No |
| POST | /api/case-studies | Create case study | Yes (Admin) |
| GET | /api/testimonials | Get all testimonials | No |
| GET | /api/testimonials/featured | Get featured testimonials | No |
| POST | /api/testimonials | Create testimonial | Yes (Admin) |
| POST | /api/contact | Submit contact form | No |
| GET | /api/contact | Get contact submissions | Yes (Admin) |
| POST | /api/seed-data | Seed database | Yes (Admin) |

---

## TESTING CHECKLIST

Before deploying to production:

- [ ] Backend status is RUNNING
- [ ] Root API returns correct message
- [ ] Blog API returns data
- [ ] Case Studies API returns data
- [ ] Testimonials API returns data
- [ ] Contact form submission works
- [ ] Email notifications are sent/logged
- [ ] MongoDB connection is stable
- [ ] No errors in backend logs
- [ ] Response times are acceptable (<500ms)
- [ ] All endpoints return proper JSON

---

## QUICK HEALTH CHECK SCRIPT

Save this as `/app/backend_health_check.sh`:

```bash
#!/bin/bash

echo "================================"
echo "BACKEND HEALTH CHECK"
echo "================================"
echo ""

echo "1. Backend Status:"
sudo supervisorctl status backend
echo ""

echo "2. Root API:"
curl -s http://localhost:8001/api/ | python3 -m json.tool
echo ""

echo "3. Blog Count:"
curl -s http://localhost:8001/api/blog | python3 -c "import sys, json; print(len(json.load(sys.stdin)))"
echo ""

echo "4. Case Studies Count:"
curl -s http://localhost:8001/api/case-studies | python3 -c "import sys, json; print(len(json.load(sys.stdin)))"
echo ""

echo "5. Testimonials Count:"
curl -s http://localhost:8001/api/testimonials | python3 -c "import sys, json; print(len(json.load(sys.stdin)))"
echo ""

echo "6. Recent Errors:"
tail -n 10 /var/log/supervisor/backend.err.log
echo ""

echo "================================"
echo "HEALTH CHECK COMPLETE"
echo "================================"
```

Make it executable:
```bash
chmod +x /app/backend_health_check.sh
```

Run it:
```bash
/app/backend_health_check.sh
```

---

## CONTACT & SUPPORT

**Email:** sales@deaxautt.com
**Phone:** +91 98480 00876
**Backend Port:** 8001 (internal)
**Database:** MongoDB (configured in .env)

---

**Last Updated:** January 10, 2026
**Version:** 1.0
**Status:** Production Ready ✅
