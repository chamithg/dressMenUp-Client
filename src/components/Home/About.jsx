import React from "react";

import "./about.css";
import about2 from "../Assets/about2.jpg";

export default function About() {
  return (
    <div className="about-main">
      <img
        className="abt-card abt-image1"
        src="https://images02.nicepage.com/c461c07a441a5d220e8feb1a/b744041a21595f0fb465b42b/handsome-male-entrepreneur-smiling-cheerful_176420-17877.jpg"
        alt="baner"
      />

      <div className="abt-card about-info">
        <div className="abt-logo">
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
      <img className="abt-card abt-image2" src={about2} alt="baner" />
    </div>
  );
}
