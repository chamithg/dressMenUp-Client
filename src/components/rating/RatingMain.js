import React from "react";
import "./ratingMain.css";
import { FaRegStar, FaStar } from "react-icons/fa";

function RatingMain() {
  return (
    <div className="rate-main">
      Customer Ratings
      <div className="star-container">
        <FaStar className="star" />
        <FaRegStar className="star" />
        <FaRegStar className="star" />
        <FaRegStar className="star" />
        <FaRegStar className="star" />
      </div>
      <h2>N/5</h2>
      <button className="btn btn-info">
        <h4>Review this product</h4>
      </button>
      <div className="review-form">
        <form></form>
      </div>
    </div>
  );
}

export default RatingMain;
