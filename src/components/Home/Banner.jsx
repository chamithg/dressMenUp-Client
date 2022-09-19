import React from "react";
import { FaAngleDoubleRight } from "react-icons/fa";
import "./Banner.css";
import banner from "../Assets/banner.jpeg";
import { Link } from "react-router-dom";

export default function Banner() {
  return (
    <div className="banner-main">
      <div className="banner-left">
        <h2>welcome to</h2>
        <br />
        <div className="logo">
          <h1>Dress Men Up!</h1>
        </div>
        <br />
        <h2>Treat yourself with some fine Clothing..</h2>
        <Link to="/products">
          <button className="btn shop-all">
            <h3>
              Take a look
              <FaAngleDoubleRight />
            </h3>
          </button>
        </Link>
      </div>
      <div className="banner-right">
        <img className="banner-image" src={banner} alt="baner" />
      </div>
    </div>
  );
}
