import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="flex flex-col">
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Privacy Policy</h1>
          <p className="text-muted-foreground">Last updated: August 2025</p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div className="prose dark:prose-invert max-w-none">
            <h2>1. Information We Collect</h2>
            <p>We collect information you provide directly to us, including name, email, phone number, and company information when you contact us or request our services.</p>

            <h2>2. How We Use Your Information</h2>
            <p>We use the information we collect to provide, maintain, and improve our services, communicate with you, and send you technical notices and support messages.</p>

            <h2>3. Information Sharing</h2>
            <p>We do not sell, trade, or otherwise transfer your personally identifiable information to outside parties except as described in this privacy policy.</p>

            <h2>4. Data Security</h2>
            <p>We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.</p>

            <h2>5. Your Rights</h2>
            <p>You have the right to access, update, or delete your personal information. Contact us at info@deaxautt.com to exercise these rights.</p>

            <h2>6. Cookies</h2>
            <p>We use cookies and similar tracking technologies to track activity on our website and hold certain information. You can instruct your browser to refuse all cookies.</p>

            <h2>7. Changes to This Policy</h2>
            <p>We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.</p>

            <h2>8. Contact Us</h2>
            <p>If you have any questions about this Privacy Policy, please contact us at info@deaxautt.com or +91 98765 43210.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
