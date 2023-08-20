import React from "react"
import "./Footer.css"
function Footer(){
    const time=new Date().getFullYear();
    return (
        <div className="footer-outer">
         {/* <div className="curve"></div>  */}
            <p>Copyright © {time} All rights reserved | Branding and Relations Cell</p>
        </div>
    );
}

export default Footer;