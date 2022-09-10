import React, { useState, useEffect } from "react";
import "./../../components/general.css";
import "./ratingMain.css";
import { FaRegStar, FaStar } from "react-icons/fa";
import { useGlobalContext } from "../../Context";
import { useParams } from "react-router-dom";
import SingleRating from "./SingleRating";

function RatingMain(reviews) {
  const { loggedUser, addToReviews, item, getLoggedUser } = useGlobalContext();

  const [showRateForm, setShowRateForm] = useState(false);
  const [rating, setRating] = useState(1);
  const [heading, setHeading] = useState(1);
  const [reason, setReason] = useState(1);
  const [errors, setError] = useState("");

  const item_id = item._id;

  useEffect(() => {
    getLoggedUser();
    console.log(loggedUser.errors);
  }, []);

  const handleAddRating = () => {
    if (!loggedUser) {
      setError("no logged in user");
      return alert("please log in to add reviews");
    }
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
    console.log("newRating", newRating);
    addToReviews(newRating);
  };

  return (
    <div className="rate-main">
      Customer Ratings
      <div className="main-star-container">
        {reviews.oRating === 1 ? (
          <div className="star-container">
            <FaStar className="star" />
            <FaRegStar className="star" />
            <FaRegStar className="star" />
            <FaRegStar className="star" />
            <FaRegStar className="star" />
          </div>
        ) : reviews.oRating === 2 ? (
          <div className="star-container">
            <FaStar className="star" />
            <FaStar className="star" />
            <FaRegStar className="star" />
            <FaRegStar className="star" />
            <FaRegStar className="star" />
          </div>
        ) : reviews.oRating === 3 ? (
          <div className="star-container">
            <FaStar className="star" />
            <FaStar className="star" />
            <FaStar className="star" />
            <FaRegStar className="star" />
            <FaRegStar className="star" />
          </div>
        ) : reviews.oRating === 4 ? (
          <div className="star-container">
            <FaStar className="star" />
            <FaStar className="star" />
            <FaStar className="star" />
            <FaStar className="star" />
            <FaRegStar className="star" />
          </div>
        ) : reviews.oRating === 5 ? (
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
      <h2>{reviews.oRating}/5</h2>
      {errors ? <h2>{errors}</h2> : null}
      {loggedUser.firstName ? (
        <button
          className="button"
          onClick={() => setShowRateForm(!showRateForm)}>
          <h4>Review this product</h4>
        </button>
      ) : null}
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
          <input className="submit button" type="submit" value="Add" />
        </form>
      </div>
      <div className="ratingList">
        {reviews ? <SingleRating {...reviews} /> : null}
      </div>
    </div>
  );
}

export default RatingMain;
