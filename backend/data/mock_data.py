from datetime import datetime

def get_mock_data():
    """Return mock data for seeding database"""
    
    blog_posts = [
        {
            "title": "The Future of AI in Enterprise Software Development",
            "slug": "future-ai-enterprise-software",
            "excerpt": "Exploring how artificial intelligence is revolutionizing custom software development for enterprises and what it means for your business.",
            "content": "Full article content here...",
            "author": "Rajesh Kumar",
            "date": datetime(2025, 3, 15),
            "category": "Technology",
            "image": "https://images.unsplash.com/photo-1593720213428-28a5b9e94613",
            "readTime": "8 min read",
            "published": True,
            "created_at": datetime.utcnow(),
            "updated_at": datetime.utcnow()
        },
        {
            "title": "SEO Strategies That Actually Work in 2025",
            "slug": "seo-strategies-2025",
            "excerpt": "Discover the latest SEO techniques and strategies that are driving real results for businesses in the current digital landscape.",
            "content": "Full article content here...",
            "author": "Priya Sharma",
            "date": datetime(2025, 3, 10),
            "category": "Digital Marketing",
            "image": "https://images.unsplash.com/photo-1557838923-2985c318be48",
            "readTime": "6 min read",
            "published": True,
            "created_at": datetime.utcnow(),
            "updated_at": datetime.utcnow()
        },
        {
            "title": "Mobile-First Design: Why It Matters for Your Business",
            "slug": "mobile-first-design",
            "excerpt": "Understanding the importance of mobile-first approach in app development and how it impacts user experience and business outcomes.",
            "content": "Full article content here...",
            "author": "Amit Patel",
            "date": datetime(2025, 3, 5),
            "category": "Design",
            "image": "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
            "readTime": "7 min read",
            "published": True,
            "created_at": datetime.utcnow(),
            "updated_at": datetime.utcnow()
        },
        {
            "title": "Cloud Migration: A Complete Guide for Enterprises",
            "slug": "cloud-migration-guide",
            "excerpt": "Everything you need to know about migrating your enterprise infrastructure to the cloud, from planning to execution.",
            "content": "Full article content here...",
            "author": "Vikram Singh",
            "date": datetime(2025, 2, 28),
            "category": "Cloud",
            "image": "https://images.unsplash.com/photo-1547658719-da2b51169166",
            "readTime": "10 min read",
            "published": True,
            "created_at": datetime.utcnow(),
            "updated_at": datetime.utcnow()
        },
        {
            "title": "Social Media Marketing Trends to Watch This Year",
            "slug": "social-media-trends-2025",
            "excerpt": "Stay ahead of the curve with these emerging social media marketing trends that are reshaping the digital marketing landscape.",
            "content": "Full article content here...",
            "author": "Sneha Gupta",
            "date": datetime(2025, 2, 20),
            "category": "Social Media",
            "image": "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
            "readTime": "5 min read",
            "published": True,
            "created_at": datetime.utcnow(),
            "updated_at": datetime.utcnow()
        }
    ]
    
    case_studies = [
        {
            "title": "E-commerce Platform Transformation for Global Retailer",
            "slug": "ecommerce-transformation",
            "client": "Fortune 500 Retail Company",
            "industry": "Retail & E-commerce",
            "challenge": "Legacy e-commerce platform struggling with scalability, poor user experience, and limited mobile functionality leading to decreased sales and customer satisfaction.",
            "solution": "Developed a modern, scalable e-commerce platform using React, Node.js, and microservices architecture with advanced features including AI-powered recommendations and seamless mobile experience.",
            "results": [
                "250% increase in mobile conversion rates",
                "40% reduction in page load times",
                "180% increase in overall sales",
                "95% customer satisfaction score"
            ],
            "technologies": ["React", "Node.js", "MongoDB", "AWS", "Redis"],
            "duration": "6 months",
            "image": "https://images.unsplash.com/photo-1600880292203-757bb62b4baf",
            "published": True,
            "created_at": datetime.utcnow(),
            "updated_at": datetime.utcnow()
        },
        {
            "title": "Digital Marketing Campaign Drives 300% ROI for SaaS Startup",
            "slug": "saas-marketing-campaign",
            "client": "B2B SaaS Startup",
            "industry": "Software & Technology",
            "challenge": "New SaaS product struggling to gain market visibility and generate quality leads in a competitive market with limited marketing budget.",
            "solution": "Implemented comprehensive digital marketing strategy including SEO optimization, targeted PPC campaigns, content marketing, and social media engagement.",
            "results": [
                "300% return on ad spend",
                "500% increase in organic traffic",
                "250 qualified leads per month",
                "40% improvement in conversion rate"
            ],
            "technologies": ["Google Ads", "SEMrush", "HubSpot", "Analytics"],
            "duration": "4 months",
            "image": "https://images.unsplash.com/photo-1608222351212-18fe0ec7b13b",
            "published": True,
            "created_at": datetime.utcnow(),
            "updated_at": datetime.utcnow()
        },
        {
            "title": "Custom CRM Solution Streamlines Operations for Enterprise",
            "slug": "custom-crm-solution",
            "client": "Manufacturing Enterprise",
            "industry": "Manufacturing",
            "challenge": "Disconnected systems causing data silos, inefficient customer management, and lack of real-time visibility into sales pipeline.",
            "solution": "Built custom CRM solution integrated with existing ERP systems, featuring automated workflows, real-time analytics, and mobile access for field teams.",
            "results": [
                "60% reduction in administrative time",
                "90% faster report generation",
                "45% increase in sales team productivity",
                "100% data accuracy across systems"
            ],
            "technologies": ["Python", "Django", "PostgreSQL", "React", "Docker"],
            "duration": "8 months",
            "image": "https://images.unsplash.com/photo-1517048676732-d65bc937f952",
            "published": True,
            "created_at": datetime.utcnow(),
            "updated_at": datetime.utcnow()
        }
    ]
    
    testimonials = [
        {
            "name": "John Anderson",
            "position": "CTO",
            "company": "TechCorp International",
            "content": "Deaxautt transformed our digital presence completely. Their team understood our enterprise needs and delivered a solution that exceeded our expectations. The website development and mobile app are world-class.",
            "rating": 5,
            "image": "https://images.unsplash.com/photo-1600880292089-90a7e086ee0c",
            "featured": True,
            "published": True,
            "created_at": datetime.utcnow(),
            "updated_at": datetime.utcnow()
        },
        {
            "name": "Sarah Williams",
            "position": "Marketing Director",
            "company": "Global Retail Solutions",
            "content": "The digital marketing campaign executed by Deaxautt resulted in unprecedented growth for our business. Their strategic approach and attention to detail made all the difference. Highly recommended!",
            "rating": 5,
            "image": "https://images.unsplash.com/photo-1709715357520-5e1047a2b691",
            "featured": True,
            "published": True,
            "created_at": datetime.utcnow(),
            "updated_at": datetime.utcnow()
        },
        {
            "name": "Michael Chen",
            "position": "CEO",
            "company": "InnovateSoft",
            "content": "Outstanding software development services. The custom solution they built has streamlined our operations significantly. Professional, reliable, and truly understands enterprise requirements.",
            "rating": 5,
            "image": "https://images.unsplash.com/photo-1603201667141-5a2d4c673378",
            "featured": True,
            "published": True,
            "created_at": datetime.utcnow(),
            "updated_at": datetime.utcnow()
        },
        {
            "name": "Emily Rodriguez",
            "position": "Founder",
            "company": "StartupHub",
            "content": "As a startup, we needed a partner who could scale with us. Deaxautt delivered exceptional results from day one. Their app development and SEO services have been instrumental in our growth.",
            "rating": 5,
            "image": "https://images.unsplash.com/photo-1497366811353-6870744d04b2",
            "featured": True,
            "published": True,
            "created_at": datetime.utcnow(),
            "updated_at": datetime.utcnow()
        }
    ]
    
    return {
        "blog_posts": blog_posts,
        "case_studies": case_studies,
        "testimonials": testimonials
    }
