import { useState, useEffect,useRef } from 'react';
import {motion,useInView} from "framer-motion";
import './Wwd.css';
import img2 from './YIP.png';
import img3 from './SPOT.png';
import img1 from './UGAD.png';

function WWD() {
  const [bgimg, setbgimg] = useState(img1)
  const ref3=useRef(null);
  const isInView3 = useInView(ref3, { once: true });
  return (
    <section id="what-we-do">
    <div ref={ref3} className="container-fluid  row col-md-12 text-center wwd-wrap" >
      <motion.h1  
     style={{
          transform: isInView3 ? "none" : "translateY(+50px)",
          opacity: isInView3 ? 1 : 0,
          transition: "all 2s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s"
        }} className='wwd-title'>WHAT WE DO</motion.h1>
      <div class="container col-md-4 col-xs-4 my-3 " id='con1'>
      
        <div class="card"
        
        >
          <div class="front text-center">
          <img src={img1} alt="img1" />
            <div className="text">UG Achievers Directory</div>
          </div>
          <div class="back text-center">
            <p>The Branding and Relations Cell's UG Achievers Directory (UGAD) initiative aims to highlight IIT Kharagpur students who have accomplished notable achievements during a particular academic year. The official IIT Kharagpur website features UGAD.</p>
          </div>
        </div>
       
      </div>
      <div class="container col-md-4 col-xs-4 my-3" id='con2'>
        <div class="card"
        >
          <div class="front text-center">
            <img src={img2} alt="img1" style={{objectFit:"contain"}}/>
            <div className="text">Young Innovator's Program</div>
            </div>
          <div class="back text-center">
            <p>Young Innovator's Program is a platform to foster young minds with scientific enthusiasm and a credo to solve the problems facing the globe. In a two day visit to IIT Kharagpur, the students will get a chance to explore the scientific environment within and an opportunity to present their projects in front of distinguished researches and guests.</p>
          </div>
        </div>
      </div>
      <div class="container col-md-4 col-xs-4 my-3" id='con3'>
        <div class="card"
        >
          <div class="front text-center col">
            <img src={img3} alt="img1"  style={{objectFit:"contain"}}/>
            <div className="text my-5">Spotlight</div>
          </div>
          <div class="back text-center" >
            <p>The Branding and Relations Cell has launched a ‘Spotlight’ initiative for IIT Kharagpur students, allowing students to highlight their accomplishments and awards. In the Spotlight series, the achievements of students in the fields of sports, academics, technology, sociocultural activities, and work in the field of public welfare are highlighted.</p>
          </div>
        </div>
      </div>
    </div>
</section>
  );
}

export default WWD;
