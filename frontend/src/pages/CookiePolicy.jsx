import React from 'react';

const CookiePolicy = () => {
  return (
    <div className="flex flex-col">
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Cookie Policy</h1>
          <p className="text-muted-foreground">Last updated: August 2025</p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div className="prose dark:prose-invert max-w-none">
            <h2>1. What Are Cookies</h2>
            <p>Cookies are small text files that are placed on your computer or mobile device when you visit a website. They are widely used to make websites work more efficiently and provide information to website owners.</p>

            <h2>2. How We Use Cookies</h2>
            <p>We use cookies for the following purposes:</p>
            <ul>
              <li><strong>Essential Cookies:</strong> Required for the website to function properly</li>
              <li><strong>Performance Cookies:</strong> Help us understand how visitors interact with our website</li>
              <li><strong>Functionality Cookies:</strong> Enable enhanced functionality and personalization</li>
              <li><strong>Targeting Cookies:</strong> Used to deliver relevant advertisements</li>
            </ul>

            <h2>3. Types of Cookies We Use</h2>
            <p><strong>Session Cookies:</strong> Temporary cookies that expire when you close your browser.</p>
            <p><strong>Persistent Cookies:</strong> Remain on your device for a set period or until you delete them.</p>

            <h2>4. Third-Party Cookies</h2>
            <p>We may use third-party services like Google Analytics that use cookies to collect information about your use of our website. These third parties have their own privacy policies.</p>

            <h2>5. Managing Cookies</h2>
            <p>Most web browsers allow you to control cookies through their settings preferences. However, limiting cookies may impact your experience on our website.</p>

            <h2>6. Updates to This Policy</h2>
            <p>We may update this Cookie Policy from time to time. The latest version will always be available on this page.</p>

            <h2>7. Contact Us</h2>
            <p>If you have questions about our use of cookies, please contact us at sales@deaxautt.com or +91 98480 00876.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CookiePolicy;
