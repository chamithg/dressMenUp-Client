import React from "react";
import { FaRegStar, FaStar } from "react-icons/fa";

function SingleRating(review) {
  return (
    <div>
      <h4>{review.heading}</h4>
      <div>
        {review.rating === 1 ? (
          <div className="star-container">
            <FaStar className="star" />
            <FaRegStar className="star" />
            <FaRegStar className="star" />
            <FaRegStar className="star" />
            <FaRegStar className="star" />
          </div>
        ) : review.rating === 2 ? (
          <div className="star-container">
            <FaStar className="star" />
            <FaStar className="star" />
            <FaRegStar className="star" />
            <FaRegStar className="star" />
            <FaRegStar className="star" />
          </div>
        ) : review.rating === 3 ? (
          <div className="star-container">
            <FaStar className="star" />
            <FaStar className="star" />
            <FaStar className="star" />
            <FaRegStar className="star" />
            <FaRegStar className="star" />
          </div>
        ) : review.rating === 4 ? (
          <div className="star-container">
            <FaStar className="star" />
            <FaStar className="star" />
            <FaStar className="star" />
            <FaStar className="star" />
            <FaRegStar className="star" />
          </div>
        ) : review.rating === 5 ? (
          <div className="star-container">
            <FaStar className="star" />
            <FaStar className="star" />
            <FaStar className="star" />
            <FaStar className="star" />
            <FaStar className="star" />
          </div>
        ) : (
          "none"
        )}
      </div>
      <p>"{review.reason} "</p>
      <p>"{review.userObj.name} "</p>
    </div>
  );
}

export default SingleRating;
