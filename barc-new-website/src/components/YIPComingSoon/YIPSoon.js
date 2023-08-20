import React from "react";
import ReactDOM from "react-dom";
import Preloader from "./components/Preloader/Preloader";
import Optin from "./components/Optin/Optin";

import "./styles.css";

function YIPSoon() {
  return (
    <div id="yipsoon" className="yipsoon">
      <div className="container-yipsoon">
        <h1>
          Website
          <br />
          Coming Soon
        </h1>
        {/* <Timer /> */}
        <Optin />
        <Preloader />
      </div>
    </div>
  );
}

export default YIPSoon;