import React from 'react';

const TermsConditions = () => {
  return (
    <div className="flex flex-col">
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Terms & Conditions</h1>
          <p className="text-muted-foreground">Last updated: August 2025</p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div className="prose dark:prose-invert max-w-none">
            <h2>1. Agreement to Terms</h2>
            <p>By accessing and using Deaxautt's services, you agree to be bound by these Terms and Conditions. If you disagree with any part of these terms, you may not access our services.</p>

            <h2>2. Services</h2>
            <p>Deaxautt provides IT services and digital marketing solutions including but not limited to website development, mobile app development, software development, and comprehensive digital marketing services.</p>

            <h2>3. User Responsibilities</h2>
            <p>You agree to provide accurate information and maintain the security of your account. You are responsible for all activities that occur under your account.</p>

            <h2>4. Intellectual Property</h2>
            <p>Unless otherwise stated, we and/or our licensors own the intellectual property rights for all material on Deaxautt. All intellectual property rights are reserved.</p>

            <h2>5. Service Delivery</h2>
            <p>We will deliver services as agreed in individual project contracts. Timelines and deliverables will be specified in the respective statements of work.</p>

            <h2>6. Payment Terms</h2>
            <p>Payment terms will be specified in individual contracts. Generally, we require deposits and milestone-based payments as agreed upon project commencement.</p>

            <h2>7. Limitation of Liability</h2>
            <p>Deaxautt shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of our services.</p>

            <h2>8. Modifications</h2>
            <p>We reserve the right to modify or replace these Terms at any time. Continued use of our services after changes constitutes acceptance of the new Terms.</p>

            <h2>9. Governing Law</h2>
            <p>These Terms shall be governed by and construed in accordance with the laws of India, without regard to its conflict of law provisions.</p>

            <h2>10. Contact</h2>
            <p>For questions about these Terms, please contact us at info@deaxautt.com or +91 98765 43210.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TermsConditions;
