import React from 'react';
import Button from './Button';
import Section from './Section';
import { BottomLine } from './design/Hero'; // Adjust import based on your project structure
import Header from './Header';
const Policies = () => {
  return (
    
    <Section className="py-10 px-4 lg:px-10" id="policies">
      <Header/>
      <div className="mt-20 container mx-auto text-center mb-10">
        <h1 className="text-4xl font-bold mb-8">Our Policies</h1>

        <div id="privacy-policy" className="mb-12 text-left">
          <h2 className="text-3xl font-semibold mb-4">Privacy Policy</h2>
          <p>Last updated: 25/09/2024</p>
          <p className="mb-4">
            At <strong>Axis Snap</strong> ("we," "our," "us"), we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our contact form.
          </p>
          <h3 className="text-2xl font-semibold mb-2">1. Information We Collect</h3>
          <p className="mb-4">
            We only collect personal information that you voluntarily provide to us, such as:
            <ul className="list-disc ml-6">
              <li>Name</li>
              <li>Email address</li>
            </ul>
            We use this information solely to respond to your inquiries, provide you with requested services (e.g., virtual tour demos), and maintain communication with you.
          </p>
          <h3 className="text-2xl font-semibold mb-2">2. How We Use Your Information</h3>
          <p className="mb-4">
            The information you provide is used for:
            <ul className="list-disc ml-6">
              <li>Communicating with you regarding your inquiries.</li>
              <li>Providing information related to our services, such as 360° virtual tour demos.</li>
            </ul>
            We do not sell, rent, or share your personal information with third parties for marketing purposes.
          </p>
          <h3 className="text-2xl font-semibold mb-2">3. Data Security</h3>
          <p className="mb-4">
            We take reasonable measures to protect your information and ensure it is kept safe from unauthorized access, disclosure, alteration, or destruction. However, please note that no data transmission over the internet is completely secure, and we cannot guarantee the absolute security of your information.
          </p>
          <h3 className="text-2xl font-semibold mb-2">4. Your Rights</h3>
          <p className="mb-4">
            You have the right to request:
            <ul className="list-disc ml-6">
              <li>Access to the personal information we hold about you.</li>
              <li>Correction of any inaccurate or incomplete information.</li>
              <li>Deletion of your personal information, subject to legal retention obligations.</li>
            </ul>
            To exercise these rights, please contact us at <strong>axissnap.co@gmail.com</strong>.
          </p>
          <h3 className="text-2xl font-semibold mb-2">5. Changes to This Policy</h3>
          <p className="mb-4">
            We may update this Privacy Policy from time to time. Any changes will be posted on this page, and we encourage you to review it periodically.
          </p>
        </div>

        {/* Terms of Service */}
        <div id="terms-of-service" className="mb-12 text-left">
          <h2 className="text-3xl font-semibold mb-4">Terms of Service</h2>
          <p>Last updated: 25/09/2024</p>
          <p className="mb-4">
            Welcome to the Axis Snap website (the "Website"). By accessing or using our Website, you agree to comply with and be bound by these Terms of Service ("Terms"). Please read the Terms carefully before using our services.
          </p>
          <h3 className="text-2xl font-semibold mb-2">1. Use of Our Services</h3>
          <p className="mb-4">
            You agree to use our Website solely for lawful purposes. You are prohibited from using the Website:
            <ul className="list-disc ml-6">
              <li>For any unlawful purpose.</li>
              <li>To solicit others to perform or participate in unlawful acts.</li>
              <li>To violate any applicable laws, rules, or regulations.</li>
            </ul>
          </p>
          <h3 className="text-2xl font-semibold mb-2">2. Contact Form and Communication</h3>
          <p className="mb-4">
            Our contact form is provided for you to reach out to us with inquiries or to request our services. You agree to provide accurate and complete information when using the form. We will use the provided information to respond to your inquiry.
          </p>
          <h3 className="text-2xl font-semibold mb-2">3. Intellectual Property</h3>
          <p className="mb-4">
            All content, including but not limited to text, images, graphics, and logos, are owned by Axis Snap and are protected by intellectual property laws. You may not reproduce, modify, or distribute any content without our prior written consent.
          </p>
          <h3 className="text-2xl font-semibold mb-2">4. Limitation of Liability</h3>
          <p className="mb-4">
            Axis Snap is not liable for any damages resulting from your use of the Website. This includes, without limitation, direct, indirect, or incidental damages. Your use of the Website is at your own risk.
          </p>
          <h3 className="text-2xl font-semibold mb-2">5. Changes to Terms</h3>
          <p className="mb-4">
            We reserve the right to modify or update these Terms at any time. Your continued use of the Website after any changes signifies your acceptance of the updated Terms.
          </p>
        </div>

        {/* Disclaimer */}
        <div id="disclaimer" className="mb-12 text-left">
          <h2 className="text-3xl font-semibold mb-4">Disclaimer</h2>
          <p className="mb-4">
            The information provided on the Axis Snap website is for general informational purposes only. While we strive to ensure the accuracy and reliability of the information presented, we make no guarantees or representations about the completeness, accuracy, or reliability of any content.
          </p>
          <h3 className="text-2xl font-semibold mb-2">1. No Legal or Professional Advice</h3>
          <p className="mb-4">
            The content on this website does not constitute legal, financial, or real estate advice. It is provided as a general guide for informational purposes only. You should seek professional advice before making any decisions based on the information presented.
          </p>
          <h3 className="text-2xl font-semibold mb-2">2. No Warranties</h3>
          <p className="mb-4">
            Axis Snap makes no warranties of any kind, either express or implied, regarding the accuracy, reliability, or availability of the website's content or services. We do not guarantee that the website will be available at all times, error-free, or secure.
          </p>
          <h3 className="text-2xl font-semibold mb-2">3. Limitation of Liability</h3>
          <p className="mb-4">
            Axis Snap is not responsible for any errors or omissions in the information provided on this website or for any losses, damages, or legal issues that may arise from your use of the website or reliance on its content.
          </p>
        </div>

        <Button href="/" className="mt-8">Back to home page.</Button>
      </div>

      <BottomLine />
    </Section>
  );
};

export default Policies;
