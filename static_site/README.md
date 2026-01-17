# Deaxautt Static Website

A professional enterprise-grade IT services and digital marketing website built with pure HTML, CSS, JavaScript, and jQuery.

## Overview

This is a fully static website with 28+ pages covering:
- **IT Services**: Website Development (Static, Dynamic, CMS, E-commerce), Mobile App Development (Android, iOS, Cross-platform), Software Development (Custom, SaaS, Enterprise), UI/UX Design, Cloud & DevOps, Maintenance & Support
- **Digital Marketing Services**: SEO, PPC/Google Ads, Social Media Marketing, Content Marketing, Email Marketing, Branding, Performance Marketing
- **Other Pages**: Home, About, Contact, Blog, Case Studies, FAQs, Industries

## Technologies Used

- HTML5
- CSS3 (Custom stylesheet)
- JavaScript (ES6+)
- jQuery 3.7.1
- Font Awesome 6.5.1 (icons)

## File Structure

```
static_site/
├── index.html              # Home page
├── css/
│   └── style.css           # Main stylesheet
├── js/
│   └── main.js             # JavaScript with jQuery
├── about/
│   └── index.html
├── contact/
│   └── index.html
├── blog/
│   └── index.html
├── case-studies/
│   └── index.html
├── faqs/
│   └── index.html
├── industries/
│   └── index.html
├── services/
│   ├── index.html          # Services overview
│   ├── static-websites/
│   ├── dynamic-websites/
│   ├── cms-websites/
│   ├── ecommerce-websites/
│   ├── android-app-development/
│   ├── ios-app-development/
│   ├── cross-platform-app-development/
│   ├── custom-software-development/
│   ├── saas-product-development/
│   ├── enterprise-software-solutions/
│   ├── ui-ux-design/
│   ├── cloud-devops/
│   ├── maintenance-support/
│   ├── seo/
│   ├── ppc-google-ads/
│   ├── social-media-marketing/
│   ├── content-marketing/
│   ├── email-marketing/
│   ├── branding/
│   └── performance-marketing/
└── .htaccess               # Apache configuration
```

## Deployment

### Option 1: cPanel / Apache
1. Upload all files to your `public_html` directory
2. The `.htaccess` file is included for URL rewriting and caching

### Option 2: Nginx
Add this to your server block:
```nginx
location / {
    try_files $uri $uri/ $uri.html /index.html;
}
```

### Option 3: Netlify / Vercel / GitHub Pages
Simply deploy the folder - these platforms work with static files out of the box.

## Features

- ✅ Fully responsive design
- ✅ Mobile-first approach
- ✅ Services dropdown navigation
- ✅ Dark mode support
- ✅ FAQ accordion
- ✅ Blog category filter
- ✅ Contact form (opens email client)
- ✅ WhatsApp integration
- ✅ SEO optimized meta tags
- ✅ Fast loading (no build process needed)

## Customization

### Contact Information
Update the following in all HTML files:
- Email: `sales@deaxautt.com`
- Phone: `+91 98480 00876`
- Address: As specified in footer

### Logo
Replace the logo URL in all files or add local images to `/images/` folder.

### Colors
Edit CSS variables in `/css/style.css`:
```css
:root {
  --primary: #2563eb;
  --primary-dark: #1e40af;
  /* ... */
}
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## License

© 2025 Deaxautt. All rights reserved.
