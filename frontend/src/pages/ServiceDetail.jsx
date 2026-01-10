import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, TrendingUp, Users, Zap } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';

const ServiceDetail = () => {
  const { slug } = useParams();

  // Define comprehensive service details
  const serviceDetails = {
    'static-websites': {
      name: 'Static Websites',
      category: 'Website Development',
      image: 'https://images.unsplash.com/photo-1547658719-da2b51169166',
      shortDescription: 'Fast, secure, and SEO-friendly static websites perfect for businesses',
      overview: 'Static websites are the foundation of a strong online presence. Built with modern technologies, they offer exceptional performance, security, and SEO benefits. Perfect for corporate websites, portfolios, and landing pages.',
      problems: [
        'Need for fast-loading website that ranks well on search engines',
        'Limited budget for complex web applications',
        'Requirement for highly secure website with minimal attack surface',
        'Need for easy hosting and deployment'
      ],
      benefits: [
        'Lightning-fast page load times (under 1 second)',
        'Superior SEO performance and search engine rankings',
        'Enhanced security with no database vulnerabilities',
        'Cost-effective hosting with minimal server requirements',
        'Easy to maintain and update content',
        'Perfect Google PageSpeed scores'
      ],
      process: [
        'Requirements gathering and analysis',
        'Design mockups and wireframing',
        'Frontend development with modern frameworks',
        'Content integration and optimization',
        'Testing across devices and browsers',
        'Deployment and DNS configuration',
        'Training and handover'
      ],
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'React', 'Next.js', 'Tailwind CSS'],
      deliverables: [
        'Fully responsive static website',
        'SEO-optimized pages',
        'Cross-browser compatible code',
        'Source code and documentation',
        'Hosting setup assistance',
        '30 days post-launch support'
      ],
      whyUs: 'Our static websites are built with modern JAMstack architecture, ensuring blazing-fast performance and exceptional user experience. We focus on clean code, accessibility, and SEO best practices to give your business a competitive edge.'
    },
    'dynamic-websites': {
      name: 'Dynamic Websites',
      category: 'Website Development',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085',
      shortDescription: 'Interactive, database-driven websites with real-time content management',
      overview: 'Dynamic websites provide interactive experiences with real-time data updates, user authentication, and content management capabilities. Ideal for businesses requiring frequent content updates and user interactions.',
      problems: [
        'Need for real-time content updates without developer intervention',
        'Requirement for user authentication and personalized experiences',
        'Complex data management and relationships',
        'Need for interactive features and functionality'
      ],
      benefits: [
        'Real-time content updates and management',
        'User authentication and role-based access',
        'Database-driven dynamic content',
        'Scalable architecture for growth',
        'Advanced functionality and interactivity',
        'API integrations and third-party services'
      ],
      process: [
        'Requirements analysis and database design',
        'System architecture and technology selection',
        'Backend development and API creation',
        'Frontend development and integration',
        'Admin panel development',
        'Testing and quality assurance',
        'Deployment and monitoring setup'
      ],
      technologies: ['React', 'Node.js', 'MongoDB', 'PostgreSQL', 'Express.js', 'REST APIs'],
      deliverables: [
        'Fully functional dynamic website',
        'Admin panel for content management',
        'Database design and implementation',
        'API documentation',
        'User authentication system',
        'Source code and deployment guide',
        '60 days post-launch support'
      ],
      whyUs: 'We build scalable dynamic websites using modern tech stacks that ensure performance, security, and maintainability. Our solutions are tailored to your specific business needs with clean architecture and best practices.'
    },
    'cms-websites': {
      name: 'CMS Websites',
      category: 'Website Development',
      image: 'https://images.unsplash.com/photo-1593720213428-28a5b9e94613',
      shortDescription: 'Content management systems for easy website updates without technical knowledge',
      overview: 'CMS-powered websites empower your team to manage content independently. Built on popular platforms like WordPress, Drupal, or headless CMS solutions, these sites combine ease of use with powerful functionality.',
      problems: [
        'Need for non-technical team members to update content',
        'Frequent content updates and blog publishing',
        'Multiple contributors managing different sections',
        'Requirement for workflow and approval processes'
      ],
      benefits: [
        'Easy content management without coding',
        'Multiple user roles and permissions',
        'Built-in SEO tools and optimization',
        'Extensive plugin ecosystem',
        'Content scheduling and workflow',
        'Media library and asset management'
      ],
      process: [
        'Platform selection based on requirements',
        'Custom theme development',
        'Plugin selection and custom development',
        'Content structure and taxonomy design',
        'Migration of existing content',
        'User training and documentation',
        'Ongoing maintenance and updates'
      ],
      technologies: ['WordPress', 'Drupal', 'Strapi', 'Contentful', 'PHP', 'React'],
      deliverables: [
        'Fully configured CMS website',
        'Custom theme or template',
        'Necessary plugins and extensions',
        'User training materials',
        'Content migration (if applicable)',
        'Admin documentation',
        '90 days support and maintenance'
      ],
      whyUs: 'Our CMS solutions are tailored to your workflow with custom themes, optimized performance, and comprehensive training. We ensure your team can manage content confidently while maintaining security and performance.'
    },
    'ecommerce-websites': {
      name: 'E-commerce Websites',
      category: 'Website Development',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f',
      shortDescription: 'Full-featured online stores with payment integration and inventory management',
      overview: 'Professional e-commerce solutions that drive sales and provide seamless shopping experiences. From product catalogs to secure payments, we build everything you need to sell online successfully.',
      problems: [
        'Need to sell products/services online 24/7',
        'Managing inventory and orders efficiently',
        'Secure payment processing and customer data',
        'Complex shipping and tax calculations',
        'Abandoned cart recovery and conversions'
      ],
      benefits: [
        'Complete product catalog management',
        'Secure payment gateway integration',
        'Inventory and order management',
        'Shipping and tax automation',
        'Customer accounts and order tracking',
        'Analytics and sales reporting',
        'Marketing tools and integrations'
      ],
      process: [
        'Business requirements and platform selection',
        'Store design and UX optimization',
        'Product catalog setup',
        'Payment gateway integration',
        'Shipping and tax configuration',
        'Security implementation',
        'Testing and quality assurance',
        'Launch and ongoing optimization'
      ],
      technologies: ['React', 'Node.js', 'Shopify', 'WooCommerce', 'Stripe', 'PayPal'],
      deliverables: [
        'Fully functional e-commerce website',
        'Product management system',
        'Payment gateway integration',
        'Order management system',
        'Customer accounts and profiles',
        'Admin dashboard',
        'SSL certificate and security setup',
        '120 days support'
      ],
      whyUs: 'We build conversion-optimized e-commerce stores with focus on user experience, security, and performance. Our solutions are scalable and integrated with best-in-class payment and shipping providers.'
    },
    'android-app-development': {
      name: 'Android App Development',
      category: 'Mobile App Development',
      image: 'https://images.unsplash.com/photo-1607799279861-4dd421887fb3',
      shortDescription: 'Native Android applications with superior performance and user experience',
      overview: 'Build powerful Android applications that leverage the full potential of the Android platform. Our native apps provide superior performance, seamless integration with device features, and exceptional user experiences.',
      problems: [
        'Need for high-performance mobile application',
        'Requirement to leverage Android-specific features',
        'Complex offline functionality requirements',
        'Need for optimal battery and resource usage'
      ],
      benefits: [
        'Superior performance and responsiveness',
        'Full access to Android platform features',
        'Better user experience with native UI',
        'Optimized battery and resource usage',
        'Offline functionality support',
        'Easy Google Play Store distribution'
      ],
      process: [
        'Requirements analysis and wireframing',
        'UI/UX design with Material Design',
        'Native Android development (Kotlin/Java)',
        'API integration and backend connectivity',
        'Testing across Android versions and devices',
        'Play Store submission and approval',
        'Post-launch monitoring and updates'
      ],
      technologies: ['Kotlin', 'Java', 'Android SDK', 'Jetpack Compose', 'Firebase', 'Room Database'],
      deliverables: [
        'Native Android application',
        'Source code and documentation',
        'Play Store listing and submission',
        'Admin panel (if applicable)',
        'User documentation',
        'Analytics integration',
        '90 days post-launch support'
      ],
      whyUs: 'Our Android developers are experts in Kotlin and modern Android development practices. We build apps that users love, following Google\'s Material Design guidelines and performance best practices.'
    },
    'ios-app-development': {
      name: 'iOS App Development',
      category: 'Mobile App Development',
      image: 'https://images.unsplash.com/photo-1607799279861-4dd421887fb3',
      shortDescription: 'Native iOS applications for iPhone and iPad with premium quality',
      overview: 'Develop exceptional iOS applications that provide seamless experiences across iPhone and iPad. Our apps leverage the latest iOS features and follow Apple\'s Human Interface Guidelines for superior quality.',
      problems: [
        'Need to reach premium iOS user base',
        'Requirement for Apple-specific features',
        'Need for consistent experience across Apple devices',
        'High-quality standards for App Store approval'
      ],
      benefits: [
        'Access to premium iOS user demographic',
        'Superior app performance and quality',
        'Seamless integration with Apple ecosystem',
        'SwiftUI for modern, native interfaces',
        'Enhanced security and privacy features',
        'Consistent experience across devices'
      ],
      process: [
        'Requirements gathering and planning',
        'UI/UX design following HIG',
        'Native iOS development (Swift)',
        'Integration with Apple services',
        'Rigorous testing on iOS devices',
        'App Store submission process',
        'Monitoring and continuous improvement'
      ],
      technologies: ['Swift', 'SwiftUI', 'UIKit', 'Core Data', 'CloudKit', 'Xcode'],
      deliverables: [
        'Native iOS application',
        'iPhone and iPad support',
        'Source code and documentation',
        'App Store listing materials',
        'Backend integration',
        'Push notification setup',
        '90 days post-launch support'
      ],
      whyUs: 'We specialize in building premium iOS apps that meet Apple\'s stringent quality standards. Our team stays current with the latest iOS features and SwiftUI to deliver modern, performant applications.'
    },
    'cross-platform-app-development': {
      name: 'Cross-platform App Development',
      category: 'Mobile App Development',
      image: 'https://images.unsplash.com/photo-1457305237443-44c3d5a30b89',
      shortDescription: 'Build once, deploy on both iOS and Android with single codebase',
      overview: 'Maximize your ROI with cross-platform mobile apps that work seamlessly on both iOS and Android. Using React Native or Flutter, we deliver native-quality apps with faster development cycles and lower costs.',
      problems: [
        'Limited budget for separate iOS and Android apps',
        'Need to launch on both platforms simultaneously',
        'Requirement for consistent experience across platforms',
        'Faster time-to-market requirements'
      ],
      benefits: [
        'Single codebase for iOS and Android',
        'Faster development and time-to-market',
        'Cost-effective solution (40-50% savings)',
        'Consistent UI/UX across platforms',
        'Easier maintenance and updates',
        'Large developer community and libraries'
      ],
      process: [
        'Requirements analysis and platform selection',
        'Cross-platform design system',
        'Development with React Native/Flutter',
        'Platform-specific optimizations',
        'Testing on both iOS and Android',
        'Dual app store submissions',
        'Ongoing maintenance and updates'
      ],
      technologies: ['React Native', 'Flutter', 'Expo', 'Firebase', 'TypeScript', 'Dart'],
      deliverables: [
        'Cross-platform mobile application',
        'iOS and Android builds',
        'Single codebase and documentation',
        'App store submissions',
        'Backend integration',
        'CI/CD pipeline setup',
        '120 days support'
      ],
      whyUs: 'We leverage React Native and Flutter expertise to build high-quality cross-platform apps that feel native on both platforms. Our approach ensures optimal performance while maximizing code reuse and development efficiency.'
    },
    'custom-software-development': {
      name: 'Custom Software Development',
      category: 'Software Development',
      image: 'https://images.unsplash.com/photo-1607799279861-4dd421887fb3',
      shortDescription: 'Tailored software solutions designed for your unique business needs',
      overview: 'Transform your business processes with custom software built specifically for your requirements. From automation tools to complex enterprise applications, we create solutions that give you a competitive advantage.',
      problems: [
        'Unique business processes not served by off-the-shelf software',
        'Need for competitive advantage through technology',
        'Integration requirements with existing systems',
        'Scalability and performance requirements'
      ],
      benefits: [
        'Perfect fit for your business processes',
        'Competitive advantage through unique features',
        'Full control and ownership of the solution',
        'Scalable architecture for growth',
        'Integration with existing systems',
        'Ongoing support and evolution'
      ],
      process: [
        'Discovery and requirements analysis',
        'System design and architecture',
        'Agile development with regular demos',
        'Quality assurance and testing',
        'User acceptance testing',
        'Deployment and training',
        'Ongoing support and enhancements'
      ],
      technologies: ['Python', 'Java', 'Node.js', '.NET', 'React', 'Docker', 'Kubernetes'],
      deliverables: [
        'Custom software application',
        'Source code and IP ownership',
        'Technical documentation',
        'User training materials',
        'Deployment scripts',
        'Support and maintenance agreement'
      ],
      whyUs: 'With 10+ years of experience in custom software development, we understand how to translate complex business requirements into elegant technical solutions. Our agile approach ensures alignment with your needs throughout the development process.'
    },
    'saas-product-development': {
      name: 'SaaS Product Development',
      category: 'Software Development',
      image: 'https://images.unsplash.com/photo-1593720213428-28a5b9e94613',
      shortDescription: 'Build scalable cloud-based software as a service products',
      overview: 'Launch your SaaS product with confidence. We build multi-tenant, scalable SaaS applications with modern architecture, subscription management, and everything needed for a successful SaaS business.',
      problems: [
        'Need to build a scalable multi-tenant application',
        'Complex subscription and billing requirements',
        'User onboarding and activation challenges',
        'Need for analytics and product insights'
      ],
      benefits: [
        'Multi-tenant architecture',
        'Subscription and billing integration',
        'User management and team features',
        'Analytics and usage tracking',
        'Scalable cloud infrastructure',
        'Security and compliance built-in'
      ],
      process: [
        'Product discovery and market validation',
        'MVP feature prioritization',
        'Architecture design for scalability',
        'Agile development sprints',
        'Beta testing with early users',
        'Launch and growth optimization',
        'Continuous improvement based on metrics'
      ],
      technologies: ['React', 'Node.js', 'PostgreSQL', 'AWS', 'Stripe', 'Redis', 'Docker'],
      deliverables: [
        'Multi-tenant SaaS application',
        'Subscription management system',
        'Admin dashboard',
        'User onboarding flow',
        'Analytics integration',
        'CI/CD pipeline',
        'Documentation and support'
      ],
      whyUs: 'We have successfully launched multiple SaaS products from MVP to scale. Our experience covers all aspects of SaaS development including multi-tenancy, billing, analytics, and growth optimization.'
    },
    'enterprise-software-solutions': {
      name: 'Enterprise Software Solutions',
      category: 'Software Development',
      image: 'https://images.unsplash.com/photo-1547658719-da2b51169166',
      shortDescription: 'Large-scale enterprise applications for complex business requirements',
      overview: 'Build enterprise-grade software that scales with your organization. From ERP systems to complex workflow automation, we deliver robust solutions that handle mission-critical operations with reliability and security.',
      problems: [
        'Complex enterprise requirements and integrations',
        'Need for high availability and reliability',
        'Security and compliance requirements',
        'Legacy system modernization'
      ],
      benefits: [
        'Scalable enterprise architecture',
        'High availability and reliability',
        'Advanced security and compliance',
        'Integration with existing systems',
        'Comprehensive audit and logging',
        'Role-based access control'
      ],
      process: [
        'Enterprise requirements gathering',
        'Architecture design and review',
        'Phased implementation approach',
        'Security and compliance review',
        'Integration with existing systems',
        'Change management and training',
        'Ongoing support and maintenance'
      ],
      technologies: ['Java', '.NET', 'Python', 'Oracle', 'SAP', 'Kubernetes', 'Microservices'],
      deliverables: [
        'Enterprise software solution',
        'Architecture documentation',
        'Integration specifications',
        'Security documentation',
        'Training materials',
        'Support documentation',
        'SLA-based support'
      ],
      whyUs: 'Our enterprise development team has delivered solutions for Fortune 500 companies. We understand enterprise requirements around security, scalability, compliance, and integration with existing systems.'
    },
    'ui-ux-design': {
      name: 'UI/UX Design',
      category: 'Other IT Services',
      image: 'https://images.unsplash.com/photo-1709715357520-5e1047a2b691',
      shortDescription: 'User-centered design that creates exceptional digital experiences',
      overview: 'Transform your digital products with design that users love. Our UI/UX design services combine research, strategy, and creativity to create intuitive interfaces that drive engagement and conversions.',
      problems: [
        'Poor user engagement and high bounce rates',
        'Complex interfaces confusing users',
        'Low conversion rates and abandoned flows',
        'Lack of brand consistency across digital products'
      ],
      benefits: [
        'Increased user engagement and satisfaction',
        'Higher conversion rates',
        'Reduced development costs through proper planning',
        'Consistent brand experience',
        'Accessible and inclusive design',
        'Data-driven design decisions'
      ],
      process: [
        'User research and persona development',
        'Information architecture and user flows',
        'Wireframing and prototyping',
        'Visual design and branding',
        'Usability testing and iteration',
        'Design system creation',
        'Developer handoff and support'
      ],
      technologies: ['Figma', 'Adobe XD', 'Sketch', 'InVision', 'Principle', 'Maze'],
      deliverables: [
        'User research insights',
        'Wireframes and prototypes',
        'High-fidelity designs',
        'Design system and components',
        'Responsive designs for all devices',
        'Developer specifications',
        'Usability testing reports'
      ],
      whyUs: 'Our award-winning designers combine aesthetics with functionality to create designs that not only look beautiful but drive business results. We follow a user-centered approach backed by research and testing.'
    },
    'cloud-devops': {
      name: 'Cloud & DevOps',
      category: 'Other IT Services',
      image: 'https://images.unsplash.com/photo-1547658719-da2b51169166',
      shortDescription: 'Cloud infrastructure and CI/CD automation for faster, reliable deployments',
      overview: 'Accelerate your development and deployment with modern DevOps practices and cloud infrastructure. We help teams ship faster, more reliably, and with greater confidence through automation and best practices.',
      problems: [
        'Slow and error-prone manual deployments',
        'Lack of environment consistency',
        'Infrastructure scalability challenges',
        'High operational costs and complexity'
      ],
      benefits: [
        'Faster deployment cycles',
        'Automated testing and quality gates',
        'Infrastructure as Code (IaC)',
        'Auto-scaling and cost optimization',
        'Improved reliability and uptime',
        'Better collaboration between teams'
      ],
      process: [
        'Current infrastructure assessment',
        'Cloud strategy and migration planning',
        'CI/CD pipeline implementation',
        'Infrastructure automation',
        'Monitoring and alerting setup',
        'Team training and documentation',
        'Ongoing optimization'
      ],
      technologies: ['AWS', 'Azure', 'GCP', 'Docker', 'Kubernetes', 'Terraform', 'Jenkins', 'GitLab CI'],
      deliverables: [
        'Cloud infrastructure setup',
        'CI/CD pipelines',
        'Infrastructure as Code templates',
        'Monitoring and alerting system',
        'Documentation and runbooks',
        'Team training',
        'Ongoing support'
      ],
      whyUs: 'We are certified cloud architects and DevOps engineers with extensive experience in AWS, Azure, and GCP. Our solutions are tailored to your needs, focusing on automation, security, and cost optimization.'
    },
    'maintenance-support': {
      name: 'Maintenance & Support',
      category: 'Other IT Services',
      image: 'https://images.unsplash.com/photo-1603201667141-5a2d4c673378',
      shortDescription: 'Ongoing support and maintenance for your applications and websites',
      overview: 'Keep your digital assets running smoothly with our comprehensive maintenance and support services. From regular updates to performance optimization, we ensure your applications stay secure, fast, and reliable.',
      problems: [
        'Lack of technical resources for ongoing maintenance',
        'Security vulnerabilities and outdated dependencies',
        'Performance degradation over time',
        'Need for regular updates and bug fixes'
      ],
      benefits: [
        'Regular security updates and patches',
        'Performance monitoring and optimization',
        'Bug fixes and issue resolution',
        'Technology stack updates',
        'Backup and disaster recovery',
        'SLA-based support response times'
      ],
      process: [
        'Application audit and assessment',
        'Support plan customization',
        'Monitoring setup and alerts',
        'Regular maintenance schedules',
        'Incident response and resolution',
        'Monthly reports and recommendations',
        'Continuous improvement'
      ],
      technologies: ['All major platforms', 'Monitoring tools', 'Security scanners', 'Performance tools'],
      deliverables: [
        'Comprehensive maintenance plan',
        'Regular security updates',
        'Performance optimization',
        'Bug fixes and enhancements',
        'Monthly status reports',
        'Emergency support availability',
        'Backup and recovery procedures'
      ],
      whyUs: 'Our support team has maintained 500+ applications across various technologies. We provide proactive maintenance, quick issue resolution, and transparent communication to keep your applications running optimally.'
    },
    'seo': {
      name: 'Search Engine Optimization (SEO)',
      category: 'Digital Marketing',
      image: 'https://images.unsplash.com/photo-1557838923-2985c318be48',
      shortDescription: 'Rank higher on Google and drive organic traffic that converts',
      overview: 'Dominate search engine rankings with our data-driven SEO strategies. We combine technical expertise, content optimization, and link building to increase your visibility and drive qualified organic traffic.',
      problems: [
        'Low visibility in search results',
        'Competitors ranking higher for key terms',
        'Limited organic traffic and leads',
        'Poor website technical SEO foundation'
      ],
      benefits: [
        'Higher search engine rankings',
        'Increased organic traffic (200-500% typical growth)',
        'Better quality leads and conversions',
        'Long-term sustainable traffic growth',
        'Improved brand visibility and authority',
        'Competitive advantage in your market'
      ],
      process: [
        'SEO audit and competitor analysis',
        'Keyword research and strategy',
        'Technical SEO optimization',
        'On-page optimization',
        'Content creation and optimization',
        'Link building and outreach',
        'Monitoring and continuous optimization'
      ],
      technologies: ['Google Search Console', 'SEMrush', 'Ahrefs', 'Screaming Frog', 'Google Analytics'],
      deliverables: [
        'Comprehensive SEO audit',
        'Keyword strategy document',
        'Technical SEO fixes',
        'Optimized content',
        'Link building campaign',
        'Monthly performance reports',
        'Ongoing optimization recommendations'
      ],
      whyUs: 'Our SEO experts have driven 500%+ organic traffic growth for clients across industries. We focus on white-hat techniques that deliver sustainable results and comply with Google\'s guidelines.'
    },
    'ppc-google-ads': {
      name: 'PPC / Google Ads',
      category: 'Digital Marketing',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f',
      shortDescription: 'Targeted paid advertising campaigns that deliver immediate results',
      overview: 'Generate qualified leads and sales with expertly managed PPC campaigns. Our certified Google Ads specialists create, optimize, and manage campaigns that maximize your ROI and minimize wasted ad spend.',
      problems: [
        'Need for immediate traffic and leads',
        'High cost per acquisition (CPA)',
        'Low conversion rates from paid traffic',
        'Wasted ad spend on unqualified clicks'
      ],
      benefits: [
        'Immediate visibility and traffic',
        'Precise targeting and audience reach',
        'Measurable ROI and performance',
        'Control over budget and spending',
        'Quick testing and optimization',
        'Higher conversion rates with proper setup'
      ],
      process: [
        'Campaign strategy and goal setting',
        'Keyword research and competitor analysis',
        'Campaign structure and ad creation',
        'Landing page optimization',
        'Conversion tracking setup',
        'Ongoing monitoring and optimization',
        'A/B testing and performance improvement'
      ],
      technologies: ['Google Ads', 'Bing Ads', 'Google Analytics', 'Tag Manager', 'Optimize'],
      deliverables: [
        'Complete campaign setup',
        'Keyword research report',
        'Ad copy and creative',
        'Landing page recommendations',
        'Conversion tracking setup',
        'Weekly performance optimization',
        'Monthly detailed reports'
      ],
      whyUs: 'As Google Ads certified partners, we manage millions in ad spend annually. Our data-driven approach focuses on continuous optimization to improve your ROI month after month.'
    },
    'social-media-marketing': {
      name: 'Social Media Marketing',
      category: 'Digital Marketing',
      image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c',
      shortDescription: 'Build brand presence and engage your audience across social platforms',
      overview: 'Grow your brand and engage your audience with strategic social media marketing. We create compelling content, manage communities, and run targeted ads across all major social platforms.',
      problems: [
        'Low brand awareness and visibility',
        'Limited audience engagement',
        'Inconsistent social media presence',
        'Difficulty measuring social media ROI'
      ],
      benefits: [
        'Increased brand awareness',
        'Higher audience engagement',
        'Community building and loyalty',
        'Direct communication with customers',
        'Cost-effective advertising',
        'Improved customer insights'
      ],
      process: [
        'Social media audit and strategy',
        'Platform selection and optimization',
        'Content calendar creation',
        'Content creation and curation',
        'Community management',
        'Paid social advertising',
        'Analytics and reporting'
      ],
      technologies: ['Facebook', 'Instagram', 'LinkedIn', 'Twitter', 'Hootsuite', 'Buffer', 'Canva'],
      deliverables: [
        'Social media strategy',
        'Content calendar',
        'Custom graphics and posts',
        'Ad campaign management',
        'Community management',
        'Influencer partnerships',
        'Monthly performance reports'
      ],
      whyUs: 'Our social media team has grown brand followings by 1000%+ and generated millions in engagement. We understand each platform\'s unique dynamics and create content that resonates with your audience.'
    },
    'content-marketing': {
      name: 'Content Marketing',
      category: 'Digital Marketing',
      image: 'https://images.unsplash.com/photo-1457305237443-44c3d5a30b89',
      shortDescription: 'Engaging content that attracts, educates, and converts your audience',
      overview: 'Drive business results with strategic content marketing. We create valuable, relevant content that attracts your target audience, builds authority, and guides prospects through the buyer journey.',
      problems: [
        'Difficulty attracting qualified leads',
        'Lack of brand authority and trust',
        'Long sales cycles',
        'Need for educational resources'
      ],
      benefits: [
        'Increased organic traffic',
        'Established thought leadership',
        'Higher quality leads',
        'Shorter sales cycles',
        'Better customer education',
        'Long-term content assets'
      ],
      process: [
        'Content audit and gap analysis',
        'Content strategy development',
        'Buyer persona and journey mapping',
        'Content creation and production',
        'Distribution and promotion',
        'Performance measurement',
        'Continuous optimization'
      ],
      technologies: ['HubSpot', 'WordPress', 'Grammarly', 'Canva', 'BuzzSumo', 'Google Analytics'],
      deliverables: [
        'Content strategy document',
        'Blog posts and articles',
        'Whitepapers and ebooks',
        'Case studies',
        'Infographics and visuals',
        'Email newsletters',
        'Performance reports'
      ],
      whyUs: 'Our content marketing team combines SEO expertise with compelling storytelling. We create content that not only ranks well but genuinely helps your audience and drives business results.'
    },
    'email-marketing': {
      name: 'Email Marketing',
      category: 'Digital Marketing',
      image: 'https://images.unsplash.com/photo-1608222351212-18fe0ec7b13b',
      shortDescription: 'Automated email campaigns that nurture leads and drive conversions',
      overview: 'Maximize customer lifetime value with strategic email marketing. We design automated campaigns, newsletters, and nurture sequences that engage subscribers and drive revenue.',
      problems: [
        'Low email engagement and open rates',
        'Ineffective lead nurturing',
        'Manual, time-consuming email processes',
        'Difficulty measuring email ROI'
      ],
      benefits: [
        'Direct communication channel',
        'Automated lead nurturing',
        'Personalized customer journeys',
        'High ROI (average $42 for every $1 spent)',
        'Customer retention and loyalty',
        'Measurable results and insights'
      ],
      process: [
        'Email strategy development',
        'List segmentation and targeting',
        'Email template design',
        'Automation workflow creation',
        'Content creation and copywriting',
        'A/B testing and optimization',
        'Performance analysis'
      ],
      technologies: ['Mailchimp', 'HubSpot', 'SendGrid', 'ActiveCampaign', 'Klaviyo'],
      deliverables: [
        'Email marketing strategy',
        'Custom email templates',
        'Automation workflows',
        'Segmentation strategy',
        'Email campaigns',
        'A/B test results',
        'Monthly performance reports'
      ],
      whyUs: 'We design email campaigns that get opened, read, and acted upon. Our data-driven approach focuses on segmentation, personalization, and continuous testing to maximize your email ROI.'
    },
    'branding': {
      name: 'Branding',
      category: 'Digital Marketing',
      image: 'https://images.unsplash.com/photo-1600880292089-90a7e086ee0c',
      shortDescription: 'Build a memorable brand identity that resonates with your audience',
      overview: 'Create a distinctive brand that stands out in the market. From logo design to complete brand identity systems, we develop cohesive branding that communicates your values and connects with your audience.',
      problems: [
        'Lack of brand recognition',
        'Inconsistent brand presentation',
        'Weak brand differentiation',
        'Need for professional brand identity'
      ],
      benefits: [
        'Strong brand recognition',
        'Consistent brand experience',
        'Competitive differentiation',
        'Customer loyalty and trust',
        'Premium positioning',
        'Unified marketing efforts'
      ],
      process: [
        'Brand discovery and research',
        'Competitive analysis',
        'Brand strategy development',
        'Logo and identity design',
        'Brand guidelines creation',
        'Marketing collateral design',
        'Brand launch support'
      ],
      technologies: ['Adobe Creative Suite', 'Figma', 'Illustrator', 'InDesign'],
      deliverables: [
        'Brand strategy document',
        'Logo design and variations',
        'Color palette',
        'Typography system',
        'Brand guidelines',
        'Marketing templates',
        'Social media assets'
      ],
      whyUs: 'Our branding experts have created identities for 100+ businesses. We combine strategic thinking with creative excellence to build brands that not only look great but drive business results.'
    },
    'performance-marketing': {
      name: 'Performance Marketing',
      category: 'Digital Marketing',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71',
      shortDescription: 'Data-driven marketing focused on measurable results and ROI',
      overview: 'Drive measurable business results with performance marketing. We combine multiple channels, data analysis, and continuous optimization to maximize your marketing ROI and achieve your growth goals.',
      problems: [
        'Unclear marketing ROI',
        'Inefficient marketing spend',
        'Inability to scale what works',
        'Lack of data-driven decision making'
      ],
      benefits: [
        'Clear ROI tracking',
        'Optimized marketing spend',
        'Scalable growth channels',
        'Data-driven decisions',
        'Multi-channel attribution',
        'Continuous performance improvement'
      ],
      process: [
        'Goals and KPI definition',
        'Channel strategy development',
        'Campaign setup and tracking',
        'Multi-channel execution',
        'Data analysis and insights',
        'Optimization and scaling',
        'Regular reporting and review'
      ],
      technologies: ['Google Analytics', 'Facebook Ads', 'Google Ads', 'HubSpot', 'Mixpanel', 'Amplitude'],
      deliverables: [
        'Performance marketing strategy',
        'Multi-channel campaigns',
        'Analytics setup',
        'Attribution modeling',
        'A/B test reports',
        'Optimization recommendations',
        'Detailed performance dashboards'
      ],
      whyUs: 'We focus relentlessly on metrics that matter. Our performance marketing approach has helped clients achieve 300%+ ROI by identifying winning channels and continuously optimizing for better results.'
    }
  };

  const service = serviceDetails[slug] || serviceDetails['static-websites'];

  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="text-sm font-medium text-blue-600 mb-4">{service.category}</div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">{service.name}</h1>
              <p className="text-xl text-muted-foreground mb-8">{service.shortDescription}</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700" asChild>
                  <Link to="/contact">Get Started <ArrowRight className="ml-2 h-5 w-5" /></Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <a href={`https://wa.me/+919876543210?text=Hi, I'm interested in ${service.name}`} target="_blank" rel="noopener noreferrer">
                    Chat on WhatsApp
                  </a>
                </Button>
              </div>
            </div>
            <div>
              <img src={service.image} alt={service.name} className="rounded-2xl shadow-2xl w-full h-auto" />
            </div>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Overview</h2>
            <p className="text-lg text-muted-foreground">{service.overview}</p>
          </div>
        </div>
      </section>

      {/* Business Problems */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">Business Problems We Solve</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {service.problems.map((problem, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <CheckCircle className="h-4 w-4 text-blue-600" />
                      </div>
                      <p>{problem}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">Key Benefits</h2>
            <div className="space-y-4">
              {service.benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-blue-600 flex-shrink-0 mt-1" />
                  <p className="text-lg">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">Our Process</h2>
            <div className="space-y-6">
              {service.process.map((step, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                        {index + 1}
                      </div>
                      <div className="flex-1">
                        <p className="text-lg">{step}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">Technologies & Tools</h2>
            <div className="flex flex-wrap gap-3">
              {service.technologies.map((tech, index) => (
                <div key={index} className="px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-600 rounded-full font-medium">
                  {tech}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Deliverables */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">What You'll Get</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {service.deliverables.map((deliverable, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-blue-600 flex-shrink-0 mt-1" />
                  <p>{deliverable}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Why Choose Deaxautt for {service.name}?</h2>
            <p className="text-lg text-muted-foreground">{service.whyUs}</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Get Started with {service.name}?</h2>
          <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
            Let's discuss your project and how we can help you achieve your goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link to="/contact">Book Free Consultation</Link>
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-blue-600" asChild>
              <Link to="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServiceDetail;
