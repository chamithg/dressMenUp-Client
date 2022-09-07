import React, { useState, useEffect } from "react";
import "./ratingMain.css";
import { FaRegStar, FaStar } from "react-icons/fa";
import { useGlobalContext } from "../../Context";
import { useParams } from "react-router-dom";
import SingleRating from "./SingleRating";

function RatingMain() {
  const { loggedUser, addToReviews, item, getReviews, allReviews } =
    useGlobalContext();

  const [showRateForm, setShowRateForm] = useState(false);
  const [rating, setRating] = useState(1);
  const [heading, setHeading] = useState(1);
  const [reason, setReason] = useState(1);

  const item_id = item._id;
  console.log(item_id);
  useEffect(() => {
    getReviews(item_id);
  }, [item]);

  const handleAddRating = () => {
    const newRating = {
      item: item_id,
      review: {
        user: loggedUser._id,
        userObj: loggedUser,
        heading: heading,
        rating: rating,
        reason: reason,
      },
    };
    addToReviews(newRating);
  };

  console.log("reviews" + allReviews);

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
      <button
        className="btn btn-info m-2"
        onClick={() => setShowRateForm(!showRateForm)}>
        <h4>Review this product</h4>
      </button>
      <div className={showRateForm ? "review-form" : "form-hidden"}>
        <h3>Add your review</h3>
        <form onSubmit={handleAddRating}>
          <div className="form-group m-1">
            <input
              type="number"
              className="form-control"
              style={{ width: 200 }}
              min="1"
              max="5"
              placeholder="Your ★ Rating (1-5)"
              onChange={(e) => setRating(e.target.value)}
            />
          </div>
          <div className="form-group m-1">
            <input
              type="text"
              className="form-control"
              placeholder="Review is about: "
              onChange={(e) => setHeading(e.target.value)}
            />
          </div>
          <div className="form-group m-1">
            <textarea
              type="text"
              className="form-control"
              rows="6"
              cols="50"
              placeholder="Description: "
              onChange={(e) => setReason(e.target.value)}
            />
          </div>
          <input className="btn btn-primary w-100 mt-2" type="submit" />
        </form>
        <div>
          {/* {allReviews.map((rev) => {
            <SingleRating {...rev} />;
          })} */}
        </div>
      </div>
    </div>
  );
}

export default RatingMain;
