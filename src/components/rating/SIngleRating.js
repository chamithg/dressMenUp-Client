import React, { useState, useEffect } from "react";
import { FaRegStar, FaStar } from "react-icons/fa";
import "./../../components/general.css";
import "./singleRating.css";

function SingleRating(reviews) {
  const [revList, setRevList] = useState([]);
  useEffect(() => {
    setRevList(reviews.reviews);
  }, [reviews]);

  return (
    <div>
      {revList ? (
        <div>
          {revList.map((rev) => {
            return (
              <div className="review-container">
                <h4>{rev.heading}</h4>
                <div>
                  {rev.rating === 1 ? (
                    <div className="star-container">
                      <FaStar className="star" />
                      <FaRegStar className="star" />
                      <FaRegStar className="star" />
                      <FaRegStar className="star" />
                      <FaRegStar className="star" />
                    </div>
                  ) : rev.rating === 2 ? (
                    <div className="star-container">
                      <FaStar className="star" />
                      <FaStar className="star" />
                      <FaRegStar className="star" />
                      <FaRegStar className="star" />
                      <FaRegStar className="star" />
                    </div>
                  ) : rev.rating === 3 ? (
                    <div className="star-container">
                      <FaStar className="star" />
                      <FaStar className="star" />
                      <FaStar className="star" />
                      <FaRegStar className="star" />
                      <FaRegStar className="star" />
                    </div>
                  ) : rev.rating === 4 ? (
                    <div className="star-container">
                      <FaStar className="star" />
                      <FaStar className="star" />
                      <FaStar className="star" />
                      <FaStar className="star" />
                      <FaRegStar className="star" />
                    </div>
                  ) : rev.rating === 5 ? (
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
                <p>"{rev.reason} "</p>
                <p>-by {rev.userObj?.firstName} </p>
              </div>
            );
          })}
        </div>
      ) : null}
    </div>
  );
}

export default SingleRating;
