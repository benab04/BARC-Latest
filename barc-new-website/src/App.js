// import logo from './logo.svg';
import React from "react";

import Hero from "./components/Hero/hero";
import Navbar from "./components/Navbar/Navbar";
import AboutUs from "./components/About/AboutUs";
import WhatWeDo from "./components/WhatWeDo/Wwd";
import Contact from "./components/Contact/ContactUs";
import Testimonials from "./components/Testimonials/testimonials";
import Preloader from "./components/Preloader/Preloader";
import Gallery from "./components/Gallery/gallery";
import Footer from "./components/Footer/Footer";
import Team from "./components/Team/Teams";
import View from "./components/View/View";
import { HashRouter } from 'react-router-dom';
// import ReactDOM from "react-dom/client";
import {BrowserRouter, Route, Routes} from "react-router-dom";

function App(){
  return (
    <>
    <HashRouter>
      <Routes>
        <Route path='/' element={<View/>} />
        <Route path="/team" element={<Team/>}/>
      </Routes>
    </HashRouter>

    </>

  );
}

export default App;