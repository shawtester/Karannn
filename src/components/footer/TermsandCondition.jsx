import React from 'react';
import Navbar from '../navbar/Navbar';
import Footer from './Footer';

const TermsAndConditions = () => {
  return (
    <>
      <Navbar />
      <div className="container mx-auto px-6 py-12 bg-gray-100 rounded-lg shadow-md text-gray-800">
        <h1 className="text-4xl font-extrabold mb-8">Terms and Conditions</h1>
        <p className="text-sm text-gray-600 mb-6">Effective Date: May 6, 2025</p>
        <p className="text-lg mb-6">
          Please read these Terms and Conditions ("Terms", "Terms and Conditions") carefully before using the Supplement Adda website.
        </p>

        {sections.map((section, index) => (
          <div key={index} className="mb-6">
            <h2 className="text-2xl font-bold mb-2">{section.title}</h2>
            <p className="text-base leading-relaxed">{section.content}</p>
          </div>
        ))}

        <p className="text-base text-gray-700 mt-10">
          By using this website, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions.
        </p>

        <div className="mt-10">
          <h2 className="text-2xl font-bold mb-2">Contact Us</h2>
          <p className="text-base">
            If you have any questions about these Terms, you can contact us at:
          </p>
          <ul className="list-disc pl-6 mt-2">
            <li>Email: <a href="mailto:info@supplementadda.in" className="text-blue-600 hover:underline">info@supplementadda.in</a></li>
            <li>Phone: <a href="tel:+919315214742" className="text-blue-600 hover:underline">+91 9315214742</a></li>
            <li>Address: B-Block, Street No.12, House No.106, Khajoori Khas, Delhi-110094</li>
          </ul>
        </div>
      </div>
      <Footer />
    </>
  );
};

const sections = [
  {
    title: "1. Eligibility",
    content: "You must be at least 18 years old or using this website under the supervision of a parent or guardian. By using the site, you agree to these Terms."
  },
  {
    title: "2. Use of Website",
    content: "You agree to use the website only for lawful purposes and not for any illegal or unauthorized activity, including violating intellectual property rights or distributing harmful content."
  },
  {
    title: "3. Product Information",
    content: "The products on our site are not intended to diagnose, treat, cure, or prevent any disease. Please consult your doctor before using any supplement."
  },
  {
    title: "4. Pricing & Availability",
    content: "All prices are in INR and may change without notice. We reserve the right to modify or discontinue products at any time."
  },
  {
    title: "5. Orders & Payments",
    content: "All orders are subject to acceptance and availability. We accept payments through Razorpay and other trusted gateways. Orders may be cancelled due to stock issues or suspected fraud."
  },
  {
    title: "6. Shipping & Delivery",
    content: "We strive to deliver products within 2–7 working days. However, delivery timelines may vary due to external factors. Tracking details will be shared once the product is shipped."
  },
  {
    title: "7. Returns & Refunds",
    content: "Returns are accepted within 7 days of delivery if the item is unused and sealed. Refunds are processed within 5–7 working days after verification. Shipping charges are non-refundable."
  },
  {
    title: "8. User Account",
    content: "Users are responsible for maintaining the confidentiality of their accounts. Supplement Adda is not liable for any loss resulting from unauthorized access."
  },
  {
    title: "9. Promotions & Discounts",
    content: "Promotional offers are valid for limited periods and subject to change without notice. Misuse of coupons may result in cancellation of the order."
  },
  {
    title: "10. Intellectual Property",
    content: "All content including logos, images, and design on this site is owned by Supplement Adda. Reproduction or redistribution without permission is prohibited."
  },
  {
    title: "11. External Links",
    content: "Our website may contain links to third-party sites. We are not responsible for the content or practices of those sites."
  },
  {
    title: "12. Privacy Policy",
    content: "Your data is secure with us. Please refer to our Privacy Policy page to know how your information is collected, used, and protected."
  },
  {
    title: "13. Limitation of Liability",
    content: "Supplement Adda is not liable for any direct, indirect, or consequential damages arising from the use or inability to use our services or products."
  },
  {
    title: "14. Changes to Terms",
    content: "We may update our Terms & Conditions at any time. Continued use of our website after changes implies acceptance."
  },
  {
    title: "15. Governing Law",
    content: "These Terms are governed by the laws of India. Any disputes will be subject to jurisdiction in Delhi, India."
  }
];

export default TermsAndConditions;
