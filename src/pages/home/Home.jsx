import React, { useEffect } from 'react';
import Layout from '../../components/layout/Layout';
import Carousel from '../../components/carousel/Carousel';
import ProductCart from '../../components/productCart/ProductCart';
import Testimonial from '../../components/testimonial/Testimonial';
import Track from '../../components/track/Track';
import Footer from '../../components/footer/Footer';
import MiniCarousel from '../../components/minicarousel/MiniCarousel';
import ShopByCategory from '../../components/shopbycate/ShopByCategory';
import ShowImages from '../../components/showimages/ShowImages';
import Certificate from '../../components/certificate/Certificate';

const Home = () => {
  useEffect(() => {
    
 

    const category = localStorage.getItem('productCategory');
    const adjustedScrollPosition = localStorage.getItem('adjustedScrollPosition');


    
    localStorage.removeItem('adjustedScrollPosition'); 

    
    if (adjustedScrollPosition) {
      window.scrollTo(0, parseInt(adjustedScrollPosition)); 
    } else if (category) {
      const section = document.getElementById(category);
      if (section) {
        window.scrollTo(0, section.offsetTop); 
      }
    }
    window.scrollTo(0, 0);
  }, []); 

  return (
    <Layout>
      <MiniCarousel />
      <Carousel />

      <div id="Whey"><ProductCart id="Whey" category="Whey" heading="Category Whey" /></div>
      <div id="Multi-Vitamins"><ProductCart id="Multi-Vitamins" category="Multi-Vitamins" heading="Category Multi-Vitamins" /></div>
      <div id="Whey-Isolate"><ProductCart id="Whey-Isolate" category="Whey-Isolate" heading="Category Whey-Isolate" /></div>
      <div id="Omega3">
        <ProductCart category="Omega3" heading="Category Omega3" />
      </div>
      <div id="Creatine">
        <ProductCart category="Creatine" heading="Category Creatine" />
      </div>
      <Certificate />

      <div id="Nitrix-Oxide">
        <ProductCart category="Nitrix-Oxide" heading="Category Nitrix-Oxide" />
      </div>
      <div id="Weight-Loss">
        <ProductCart category="Weight-Loss" heading="Category Weight-Loss" />
      </div>
      <ShopByCategory />

      <div id="Pre-workout">
        <ProductCart category="Pre-Workout" heading="Category Pre-Workout" />
      </div>
      <div id="BCAA-Aminos">
        <ProductCart category="BCAA-Aminos" heading="Category BCAA-Aminos" />
      </div>
      <ShowImages />
      <div id="Gainers">
        <ProductCart category="Gainers" heading="Category Gainers" />
      </div>
      <div id="Glutamine">
        <ProductCart category="Glutamine" heading="Category Glutamine" />
      </div>

      <Testimonial />
      <Track />
      <Footer />
    </Layout>
  );
};

export default Home;
