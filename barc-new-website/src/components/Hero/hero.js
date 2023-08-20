import videoBg from "../../assets/videos/BGV3.mp4";
import {motion} from "framer-motion";
import Img from "../../assets/images/Signature.jpg";
import './hero.css';
// import IndexNavbar from "./components/Navbar/IndexNavbar";
// import Navbar from "./components/Navbar/Navbar"
function App() {
  const titleVariants={
    hidden: {
      opacity: 0,
      scale:1
    },
    show: {
      opacity:1,
      scale:1,
      transition: {
        duration:2,
        delay:1,
        ease:"easeInOut"
      }
    }
    
  }
  const overlayVariants={
    hidden: {
      opacity: 0.2,
      scale:1
    },
    show: {
      opacity:1,
      scale:1,
      transition: {
        duration:2,
        delay:1,
        ease:"easeInOut"
      }
    }
    
  }
  return (
    <section id="home-page">
    <div id="home" className="home">
      
    <video src={videoBg} autoPlay={true}  muted/>
     <motion.div className='overlay'
   
     variants={overlayVariants}
     initial="hidden"
     animate="show"
     transition="transition"></motion.div>
     <motion.div 
     className='title'
     variants={titleVariants}
     initial="hidden"
     animate="show"
     transition="transition"><div className='wrap-title'><div><img className='title-image' src={Img}/></div><div><h1>BRANDING AND RELATIONS CELL, IIT KHARAGPUR</h1></div></div>
     </motion.div>
     <motion.a initial={{opacity:0}} animate={{opacity:1}} transition={{delay:6}} href="#about-page">
     <svg class="arrows">
							<path class="a1" d="M0 0 L30 32 L60 0"></path>
							<path class="a2" d="M0 20 L30 52 L60 20"></path>
							<path class="a3" d="M0 40 L30 72 L60 40"></path>
						</svg>
            </motion.a>
    </div>
    </section>
  );
}

export default App;
