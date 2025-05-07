import React from 'react';
import Navbar from '../navbar/Navbar';
import Footer from './Footer';

const About = () => {
  return (
    <>
      <Navbar />
      <div className="bg-gradient-to-b from-blue-100 to-white text-gray-900 py-20">
        <div className="container mx-auto px-6 md:px-12">

          {/* Title */}
          <h1 className="text-6xl font-extrabold text-blue-900 mb-10 text-center">
            About Us
          </h1>

          {/* Company Introduction */}
          <p className="text-lg mb-8 text-center leading-relaxed max-w-3xl mx-auto">
            Welcome to <strong>Supplement Adda</strong>, your trusted destination for premium sports nutrition and wellness essentials. We are passionate about health and committed to fueling your fitness journey with scientifically formulated, top-tier supplements. Whether you're a professional athlete, fitness enthusiast, or a beginner just starting your wellness journey, we’re here to walk alongside you every step of the way.
            <br /><br />
            At Supplement Adda, we don’t just sell products — we offer purpose. Every supplement we provide is carefully selected and rigorously tested to ensure it meets our high standards of quality, safety, and effectiveness. From high-performance whey proteins and recovery formulas to essential vitamins and wellness boosters, our range is as diverse as the goals of our customers.
            <br /><br />
            We also aim to educate and empower. In an industry filled with misinformation, we bring clarity. Our team of experts is always available to guide you, making sure you choose the right products tailored to your body type, goals, and lifestyle. Supplement Adda is more than a brand — it's a community rooted in results, driven by trust, and committed to your transformation.
          </p>

          {/* Our Mission */}
          <div className="bg-white shadow-lg rounded-lg p-10 mb-12">
            <h2 className="text-4xl font-extrabold text-blue-700 mb-6">Our Mission</h2>
            <p className="text-lg md:text-xl text-gray-700 mb-6 leading-relaxed">
              Our mission is simple: to fuel your fitness journey with science-backed, high-quality supplements that actually work.
              We aim to bridge the gap between scientific innovation and everyday wellness by offering accessible, honest, and results-driven solutions for people from all walks of life.
              <br /><br />
              With every product, we strive to inspire confidence, motivation, and progress — not just in the gym, but in life. We are here to help you perform better, recover faster, and live healthier.
            </p>
          </div>

          {/* Core Values */}
          <div className="bg-gradient-to-r from-blue-50 to-white rounded-lg p-10 mb-12">
            <h2 className="text-4xl font-extrabold text-blue-700 mb-6">Our Core Values</h2>
            <ul className="list-disc list-inside text-lg md:text-xl text-gray-700 space-y-3 pl-6">
              <li><strong>Integrity:</strong> We believe in transparency, honesty, and full label disclosure.</li>
              <li><strong>Innovation:</strong> Continuously evolving our product line based on the latest scientific research.</li>
              <li><strong>Community:</strong> Building a supportive ecosystem where our customers thrive.</li>
              <li><strong>Results-Driven:</strong> Every formulation is tested to ensure tangible outcomes.</li>
              <li><strong>Education:</strong> Empowering our customers with trusted knowledge in fitness and health.</li>
            </ul>
          </div>

          {/* Meet the Team */}
          <div className="bg-white shadow-lg rounded-lg p-10 mb-12">
            <h2 className="text-4xl font-extrabold text-blue-700 mb-6">Meet Our Team</h2>
            <p className="text-lg md:text-xl text-gray-700 mb-6 leading-relaxed">
              Supplement Adda is powered by a passionate team of certified nutritionists, fitness experts, researchers, and dedicated customer support professionals.
              Together, we’re committed to ensuring every customer receives personalized support and premium products.
              <br /><br />
              Our leadership includes professionals from the fields of dietetics, sports science, product innovation, and business development — all united by a shared vision of excellence in health and wellness. 
            </p>
          </div>

          {/* Our Community */}
          <div className="bg-gradient-to-r from-white to-blue-50 rounded-lg p-10 mb-12">
            <h2 className="text-4xl font-extrabold text-blue-700 mb-6">Our Community</h2>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              We actively participate in local fitness events, sponsor athlete programs, and conduct educational workshops on nutrition and wellness.
              Through these efforts, we aim to uplift communities and promote a culture of health and awareness.
              <br /><br />
              We’re not just building a customer base — we’re building a family of like-minded individuals striving for better health and performance.
            </p>
          </div>

          {/* Our Sustainability Promise */}
          <div className="bg-white shadow-lg rounded-lg p-10 mb-12">
            <h2 className="text-4xl font-extrabold text-blue-700 mb-6">Our Sustainability Promise</h2>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              We’re committed to reducing our environmental impact by using recyclable packaging, sourcing responsibly, and minimizing waste in our operations.
              <br /><br />
              We believe wellness should not come at the cost of our planet. That’s why we integrate sustainable practices in every aspect of our business—from packaging and shipping to supplier partnerships and office operations.
            </p>
          </div>

          {/* Why Choose Us */}
          <div className="bg-gradient-to-r from-blue-100 to-white rounded-lg p-10 mb-12">
            <h2 className="text-4xl font-extrabold text-blue-700 mb-6">Why Choose Supplement Adda?</h2>
            <ul className="list-disc list-inside text-lg md:text-xl text-gray-700 space-y-3 pl-6">
              <li><strong>Premium Quality:</strong> Only the best ingredients, backed by science and verified by experts.</li>
              <li><strong>Affordable Pricing:</strong> We believe good health shouldn’t break the bank. Our pricing is honest and competitive.</li>
              <li><strong>Fast Delivery:</strong> Swift nationwide shipping ensures you never miss a workout.</li>
              <li><strong>Customer Support:</strong> Friendly and knowledgeable support team ready to help with product or health queries.</li>
              <li><strong>Secure Shopping:</strong> Shop confidently with secure payment options and data protection.</li>
            </ul>
          </div>

          {/* Our Journey */}
          <div className="bg-white shadow-lg rounded-lg p-10 mb-12">
            <h2 className="text-4xl font-extrabold text-blue-700 mb-6">Our Journey</h2>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              Founded with a vision to simplify access to authentic and effective supplements in India, Supplement Adda started as a small initiative in a home garage. 
              <br /><br />
              Today, we’ve grown into a leading online platform trusted by thousands of fitness lovers across the country. Our growth has been powered by innovation, community love, and an unshakeable belief in quality-first values.
            </p>
          </div>

          {/* Future Vision */}
          <div className="bg-gradient-to-r from-blue-50 to-white rounded-lg p-10 mb-12">
            <h2 className="text-4xl font-extrabold text-blue-700 mb-6">Looking Ahead</h2>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              Our future is focused on expanding our product line with new-age formulations, introducing AI-based supplement recommendations, and setting up offline experience centers in major Indian cities.
              <br /><br />
              We're also investing in technology to personalize user journeys, improve delivery logistics, and offer real-time fitness consultations.
            </p>
          </div>

          {/* Footer */}
          <Footer />
        </div>
      </div>
    </>
  );
};

export default About;
