import React from "react";
import ReactDOM from "react-dom";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

import "./gallery.css";
import Img1 from "./Images/2018_A.jpg"
import Img2 from "./Images/2018_B.jpg"
import Img3 from "./Images/2018_C.jpg"
import Img4 from "./Images/2018_D.jpg"
import Img5 from "./Images/2019_A.jpg"
import Img6 from "./Images/2019_B.jpg"
import Img7 from "./Images/2019_C.jpg"
import Img8 from "./Images/2019_D.jpg"





// class MyComponent extends React.Component {
//   render() {
    const images = [
      {
        original: Img1,
        thumbnail: Img1
      },
      {
        original: Img2,
        thumbnail: Img2
      },
      {
        original: Img3,
        thumbnail: Img3
      },
      {
        original: Img4,
        thumbnail: Img4
      },
      // {
      //   original: Img5,
      //   thumbnail: Img5
      // },
      // {
      //   original: Img6,
      //   thumbnail: Img6
      // },
      // {
      //   original: Img7,
      //   thumbnail: Img7
      // },
      {
        original:Img8,
        thumbnail:Img8
      }
    ];
function Gallery(){
    return (
        <section id="gallery" >
        <div className="gallery-page">
        <h1 className="gallery-title my-2">GALLERY</h1>
        <div className="gallery-slides my-5">
      <ImageGallery
        items={images}
        showBullets={true}
        showIndex={false}
        showThumbnails={false}
        lazyLoad={false}
        showPlayButton={true}
        showNav={true}
        showFullscreenButton={true}
        thumbnailPosition={"bottom"}
        // useTranslate3D={false}
        autoPlay={true}
      />
      </div>
      </div>
      </section>
    );
}
//   }
// }
export default Gallery;
