// pages/category/CategoryPage.jsx
import React, { useEffect } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import ProductCart from '../../components/productCart/ProductCart';
import Layout from '../../components/layout/Layout';

const CategoryPage = () => {
  const { categoryName } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  const handleBackToHome = () => {
    navigate('/'); // Navigate to home
  };

  // Scroll to top when the location (URL) changes
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top on location change
  }, [location]); // Trigger when location (URL) changes

  return (
    <Layout>
      <div className="container mx-auto py-12">
        <button 
          className="mb-6 px-8 py-3 text-white font-bold rounded-lg shadow-lg hover:shadow-2xl transform hover:-translate-y-1 hover:scale-105 transition duration-300 ease-in-out focus:outline-none focus:ring-4 focus:ring-opacity-75"
          style={{
            backgroundColor: '#FF6347', // Default color
          }}
          onMouseEnter={(e) => e.target.style.backgroundColor = '#F87171'} 
          onMouseLeave={(e) => e.target.style.backgroundColor = '#FF6347'} 
          onClick={handleBackToHome} 
        >
          Back to Home
        </button>
        <h2 className="text-3xl font-bold text-center mb-8">Category: {categoryName}</h2>
        <ProductCart category={categoryName} />
      </div>
    </Layout>
  );
};

export default CategoryPage;
