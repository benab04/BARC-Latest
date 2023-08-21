import React, { useState } from "react";
import "./PageNavbar.css"
import {motion} from "framer-motion";
import Img from "../../assets/images/Signature.jpg";
import { HashLink } from 'react-router-hash-link';
// import Toggle from "./nav";
// import "../../assets/js/main"
import {BsList} from "react-icons/bs";
import 'animate.css';
function PageNavbar(){

  const overlayVariants={
    hidden: {
      opacity: 0,
      scale:1,
    
    },
    show: {
      opacity:1,
      scale:1,
      
    },

      transition: {
        duration:3,       
        ease:"easeInOut"
      }
    };
    const [header,changeHeader]=useState("header pageHead fixed-top ")
    let nav = document.getElementById("navbar pagenav");
    window.onscroll = function () {
      console.log(document.documentElement.scrollTop)
      if (document.documentElement.scrollTop > 20) {
        
        changeHeader("header fixed-top sticky header-scrolled pageHead-scrolled")
      } 
      else {
        changeHeader("header fixed-top pageHead")
      }
    };

    
    const sections=document.querySelectorAll("section");
    const navLi=document.querySelectorAll(".nav-link")
    
    window.addEventListener("scroll", () => {
      let current="";
      sections.forEach( section => {
        const sectionTop=section.offsetTop;
        const sectionHeight=section.clientHeight;
      
        if(window.scrollY >= sectionTop-sectionHeight/3){
          current=section.getAttribute('id');
        }
      })
      navLi.forEach(a => {
        a.classList.remove("active");
        if(a.classList.contains(current)){
          a.classList.add("active");
        }
      })
    });
   

  
    const [Nav,switchNav]=useState("navbar");
    const [Icon,switchIcon]=useState("fa-solid fa-bars mobile-nav-toggle");
    const [state,changeState]=useState(false);

    function mobNav(){
      changeState(!state);
      if(state)
      {
      switchNav("navbar-mobile pagenav-mob");
      switchIcon("fa-solid fa-xmark mobile-nav-toggle");

    }
    else{
    switchNav("navbar pagenav");
    switchIcon("fa-solid fa-bars mobile-nav-toggle");
      }
    }
    const activePage=window.location;
    // console.log(activePage);
    return (
      <motion.div
      
      // variants={overlayVariants}
      // initial={{scale:0}}
      // animate={{scale:1}}
      // transition={("transition", { delay: 5 })}
      >
      

        <header id="header" className={header}>
    <div className="container-fluid container-xl d-flex align-items-center justify-content-between">
    <HashLink className="logo d-flex align-items-center "  to={"#home-page"}><img className="logo-img" src={Img} alt="" />
        <span>BRANDING AND RELATIONS CELL</span></HashLink>
     
      <nav id="navbar" className={Nav}>
      <div id="scrollspy1">
        <ul>
          
          <li><a className="getstarted" href="#/home-page">Go Home</a></li>
          {/* <li><a className="getstarted " href="../YIP Coming Soon/src/index2.html">Visit YIP</a></li> */}
        </ul>
        </div>
        <button style={{height:"40px",width:"40px",backgroundColor:"transparent",border:"none"}} onClick={mobNav} className={Icon}></button>
        {/* <i className="bi bi-list mobile-nav-toggle "><BsList  /></i> */}
      </nav>

    </div>
  </header>
  </motion.div>
    );
}

export default PageNavbar;