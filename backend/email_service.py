import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
from typing import Dict
import os
from datetime import datetime

def send_contact_email(contact_data: Dict) -> bool:
    """
    Send email notification when contact form is submitted.
    For development, we'll just log the email content.
    In production, configure SMTP settings.
    """
    try:
        # Email configuration (from environment variables)
        smtp_host = os.environ.get('SMTP_HOST', 'smtp.gmail.com')
        smtp_port = int(os.environ.get('SMTP_PORT', '587'))
        smtp_user = os.environ.get('SMTP_USER', '')
        smtp_password = os.environ.get('SMTP_PASSWORD', '')
        recipient_email = os.environ.get('CONTACT_EMAIL', 'info@deaxautt.com')
        
        # Create email content
        subject = f"New Contact Form Submission - {contact_data['name']}"
        
        html_body = f"""
        <html>
            <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
                <div style="max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #ddd; border-radius: 8px;">
                    <h2 style="color: #2563eb; border-bottom: 2px solid #2563eb; padding-bottom: 10px;">
                        New Contact Form Submission
                    </h2>
                    
                    <div style="margin: 20px 0;">
                        <h3 style="color: #1e40af; margin-bottom: 10px;">Contact Information</h3>
                        <p><strong>Name:</strong> {contact_data['name']}</p>
                        <p><strong>Email:</strong> <a href="mailto:{contact_data['email']}">{contact_data['email']}</a></p>
                        <p><strong>Phone:</strong> <a href="tel:{contact_data['phone']}">{contact_data['phone']}</a></p>
                        {f'<p><strong>Company:</strong> {contact_data.get("company", "N/A")}</p>' if contact_data.get('company') else ''}
                    </div>
                    
                    <div style="margin: 20px 0;">
                        <h3 style="color: #1e40af; margin-bottom: 10px;">Project Details</h3>
                        <p><strong>Service Interested In:</strong> {contact_data['service']}</p>
                        {f'<p><strong>Budget:</strong> {contact_data.get("budget", "N/A")}</p>' if contact_data.get('budget') else ''}
                    </div>
                    
                    <div style="margin: 20px 0;">
                        <h3 style="color: #1e40af; margin-bottom: 10px;">Message</h3>
                        <div style="background-color: #f3f4f6; padding: 15px; border-radius: 5px;">
                            {contact_data['message']}
                        </div>
                    </div>
                    
                    <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd; color: #666; font-size: 12px;">
                        <p><strong>Submitted:</strong> {datetime.utcnow().strftime('%Y-%m-%d %H:%M:%S UTC')}</p>
                        <p>This is an automated message from Deaxautt website contact form.</p>
                    </div>
                </div>
            </body>
        </html>
        """
        
        # For development - log instead of sending
        if not smtp_user or not smtp_password:
            print("\n" + "="*50)
            print("📧 EMAIL NOTIFICATION (Development Mode)")
            print("="*50)
            print(f"To: {recipient_email}")
            print(f"Subject: {subject}")
            print("\nContent:")
            print(f"Name: {contact_data['name']}")
            print(f"Email: {contact_data['email']}")
            print(f"Phone: {contact_data['phone']}")
            print(f"Company: {contact_data.get('company', 'N/A')}")
            print(f"Service: {contact_data['service']}")
            print(f"Budget: {contact_data.get('budget', 'N/A')}")
            print(f"Message: {contact_data['message']}")
            print("="*50 + "\n")
            return True
        
        # Production - send actual email
        msg = MIMEMultipart('alternative')
        msg['Subject'] = subject
        msg['From'] = smtp_user
        msg['To'] = recipient_email
        
        html_part = MIMEText(html_body, 'html')
        msg.attach(html_part)
        
        # Send email
        with smtplib.SMTP(smtp_host, smtp_port) as server:
            server.starttls()
            server.login(smtp_user, smtp_password)
            server.send_message(msg)
        
        print(f"✓ Email sent successfully to {recipient_email}")
        return True
        
    except Exception as e:
        print(f"✗ Error sending email: {str(e)}")
        # Don't fail the request if email fails
        return False
