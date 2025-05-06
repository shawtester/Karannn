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
            Welcome to Supplement Adda, your trusted source for premium sports nutrition and wellness products.
            At Supplement Adda, we believe that achieving your health and fitness goals begins with the right nutrition.
            Our mission is to empower individuals—whether you’re a seasoned athlete, a fitness enthusiast, or just starting your wellness journey—by providing the highest quality supplements that cater to your unique needs.

            We understand the challenges of navigating the world of sports nutrition, which is why we are dedicated to curating a diverse range of products that are not only effective but also safe and reliable. 
            From whey protein and isolates to gainers and essential vitamins, we offer a comprehensive selection designed to support every aspect of your health regimen.

            Supplement Adda is more than a brand — it's a movement towards better living, informed choices, and consistent results.
          </p>

          {/* Our Mission */}
          <div className="bg-white shadow-lg rounded-lg p-10 mb-12">
            <h2 className="text-4xl font-extrabold text-blue-700 mb-6">Our Mission</h2>
            <p className="text-lg md:text-xl text-gray-700 mb-6 leading-relaxed">
              Our mission is simple: to fuel your fitness journey with science-backed, high-quality supplements that actually work.
              We aim to bridge the gap between scientific innovation and everyday wellness by offering accessible, honest, and results-driven solutions for people from all walks of life.
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
            </ul>
          </div>

          {/* Meet the Team */}
          <div className="bg-white shadow-lg rounded-lg p-10 mb-12">
            <h2 className="text-4xl font-extrabold text-blue-700 mb-6">Meet Our Team</h2>
            <p className="text-lg md:text-xl text-gray-700 mb-6 leading-relaxed">
              Supplement Adda is powered by a passionate team of certified nutritionists, fitness experts, researchers, and dedicated customer support professionals. 
              Together, we’re committed to ensuring every customer receives personalized support and premium products.
            </p>
          </div>

          {/* Community Engagement */}
          <div className="bg-gradient-to-r from-white to-blue-50 rounded-lg p-10 mb-12">
            <h2 className="text-4xl font-extrabold text-blue-700 mb-6">Our Community</h2>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              We actively participate in local fitness events, sponsor athlete programs, and conduct educational workshops on nutrition and wellness. 
              Through these efforts, we aim to uplift communities and promote a culture of health and awareness.
            </p>
          </div>

          {/* Sustainability */}
          <div className="bg-white shadow-lg rounded-lg p-10 mb-12">
            <h2 className="text-4xl font-extrabold text-blue-700 mb-6">Our Sustainability Promise</h2>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              We’re committed to reducing our environmental impact by using recyclable packaging, sourcing responsibly, and minimizing waste in our operations. 
              We believe wellness should not come at the cost of our planet.
            </p>
          </div>

          {/* ...existing sections like Products, Story, Testimonials, etc... */}

          <Footer />
        </div>
      </div>
    </>
  );
};

export default About;
