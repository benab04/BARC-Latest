import React from "react";
import Hero from "../Hero/hero";
import Navbar from "../Navbar/Navbar";
import AboutUs from "../About/AboutUs";
import WhatWeDo from "../WhatWeDo/Wwd";
import Contact from "../Contact/ContactUs";
import Testimonials from "../Testimonials/testimonials";
import Preloader from "../Preloader/Preloader";
import Gallery from "../Gallery/gallery";
import Footer from "../Footer/Footer";



function View(){
    return (
        <div id="view">
    <Preloader />
    <Navbar />
    <Hero />
    <AboutUs />
    <WhatWeDo />
    <Testimonials />
    
    <Gallery /> 
    
     <Contact />
    
     <Footer />
    </div>
    );
  }
  
  export default View;