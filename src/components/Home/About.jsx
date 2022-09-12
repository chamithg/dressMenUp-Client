import React from "react";

import "./about.css";
import about1 from "../Assets/about1.jpeg";
import about2 from "../Assets/about2.jpeg";
import about3 from "../Assets/about3.jpeg";
import about4 from "../Assets/about4.jpeg";

export default function About() {
  return (
    <div className="about-main">
      <div className="about-left">
        c
        <img className="abt-image3" src={about3} alt="baner" />
        <div>
          <img className="abt-image1" src={about1} alt="baner" />
          <img className="abt-image2" src={about2} alt="baner" />
        </div>
        <img className="abt-image4" src={about4} alt="baner" />
      </div>
      <div className="about-right">
        <div className="logo">
          <h2>First Class Gent's Clothing store</h2>
        </div>
        <p className="abt-text">
          We take our business real serious when it comes to finding and
          bringing the best in class and trending apperal to you. Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Non nisi error voluptates
          iste vitae, rem voluptate minima quod, placeat delectus illo autem
          totam maxime consequuntur dolore adipisci! Consequuntur, consectetur
          sit.
        </p>
      </div>
    </div>
  );
}
