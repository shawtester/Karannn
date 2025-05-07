import React from 'react';
import Navbar from '../navbar/Navbar';
import Footer from './Footer';

const PrivacyPolicy = () => {
  return (
    <>
      <Navbar />
      <div className="container mx-auto px-6 py-12 bg-gray-100 rounded-lg shadow-md text-gray-800">
        <h1 className="text-4xl font-extrabold mb-8 text-center">Privacy Policy</h1>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-2">Who We Are</h2>
          <p>
            Welcome to <strong>SupplementAdda.in</strong>. We are committed to protecting your privacy and ensuring
            your personal information is handled in a safe and responsible manner.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-2">
            Information We Collect
          </h2>
          <p className="mb-3">
            We collect various types of information to provide and improve our services, including:
          </p>
          <ul className="list-disc list-inside space-y-1 ml-4">
            <li>Personal identification information (name, email address, phone number, etc.)</li>
            <li>Order details and payment information</li>
            <li>Device and browser information</li>
            <li>IP address and location data</li>
            <li>Usage data and user behavior</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-2">Use of Your Information</h2>
          <p>
            We use the collected data for various purposes, including:
          </p>
          <ul className="list-disc list-inside space-y-1 ml-4">
            <li>To fulfill orders and manage transactions</li>
            <li>To provide customer support</li>
            <li>To improve our website and services</li>
            <li>To send promotional emails or updates (you can opt out anytime)</li>
            <li>To detect and prevent fraud and security threats</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-2">Cookies & Tracking Technologies</h2>
          <p>
            We use cookies and similar tracking technologies to enhance your experience, personalize content, and
            analyze site traffic. You can manage your cookie preferences through your browser settings.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-2">Sharing of Information</h2>
          <p className="mb-3">
            We do not sell or rent your personal information. However, we may share your data with:
          </p>
          <ul className="list-disc list-inside space-y-1 ml-4">
            <li>Trusted third-party service providers (e.g., delivery partners, payment gateways)</li>
            <li>Legal or government entities, when required by law</li>
            <li>Business partners during a merger, acquisition, or asset sale</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-2">Marketing & Communication</h2>
          <p>
            With your consent, we may send you promotional emails and SMS messages about new products or offers. You may
            unsubscribe anytime using the link in our emails or by contacting support.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-2">Data Retention</h2>
          <p>
            We retain your personal data only for as long as necessary to fulfill the purposes outlined in this policy,
            including legal, accounting, or reporting obligations. When data is no longer required, it is securely
            deleted or anonymized.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-2">Your Rights</h2>
          <p className="mb-3">
            As a user, you have the right to:
          </p>
          <ul className="list-disc list-inside space-y-1 ml-4">
            <li>Access the data we hold about you</li>
            <li>Request correction of inaccurate or outdated data</li>
            <li>Request deletion of your personal data</li>
            <li>Withdraw consent for marketing communications</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-2">Security</h2>
          <p>
            We implement appropriate technical and organizational measures to protect your personal data against
            unauthorized access, misuse, or disclosure. However, no method of transmission over the internet is entirely
            secure.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-2">Children’s Privacy</h2>
          <p>
            Our services are not directed to individuals under the age of 18. We do not knowingly collect personal
            information from children. If we discover such data has been collected, we will delete it promptly.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-2">Changes to This Policy</h2>
          <p>
            We may update our Privacy Policy from time to time. All updates will be posted on this page with a revised
            date. We encourage you to review this page periodically to stay informed about how we are protecting your
            data.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-2">Contact Us</h2>
          <p>
            If you have any questions or concerns about this Privacy Policy, please contact us at:{' '}
            <a href="mailto:info@supplementadda.in" className="text-blue-600 font-medium hover:underline">
              info@supplementadda.in
            </a>
          </p>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default PrivacyPolicy;
