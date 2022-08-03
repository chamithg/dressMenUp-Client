import React from "react";
import "./Banner.css";
import banner from "../Assets/banner.jpeg";

export default function Banner() {
  return (
    <div className="banner-main">
      <div className="banner-left">
        <h1>Treat yourself with some fine Clothings..</h1>
        <br />
        <button className="btn">
          <h1>Take a look ...</h1>
        </button>
      </div>
      <div className="banner-right">
        <img className="banner-image" src={banner} alt="baner" />
      </div>
    </div>
  );
}
