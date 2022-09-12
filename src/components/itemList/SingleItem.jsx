import React, { useState, useEffect } from "react";
import {
  FaArrowAltCircleRight,
  FaArrowAltCircleLeft,
  FaMinus,
  FaPlus,
} from "react-icons/fa";
import { useParams, useNavigate } from "react-router-dom";
import { useGlobalContext } from "../../Context";
import RatingMain from "../rating/RatingMain";
import "./../../components/general.css";
import "./SingleItem.css";
import axios from "axios";

export default function SingleItem() {
  const { fetchOne, item, loggedUser, getLoggedUser, addToCart } =
    useGlobalContext();
  const [switchImage, setSwitchImage] = useState(false);
  const [purchaseCount, setPurchaseCount] = useState(1);
  const [reviews, setReviews] = useState({});

  const { id } = useParams();
  const navigate = useNavigate();

  const getReviews = (item_id) => {
    axios
      .get(`http://localhost:8000/api/ratings/${item_id}`)
      .then((res) => {
        if (res.data.results) {
          setReviews(res.data.results);
        }
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchOne(id);
  }, [switchImage]);

  useEffect(() => {
    getReviews(id);
  }, []);

  const addItemToCart = () => {
    if (loggedUser.firstName) {
      const cartItem = {
        user: loggedUser._id,
        item: item,
        cartObj: item,
        quantity: purchaseCount,
      };

      addToCart(cartItem, navigate);
    } else {
      alert("Please login / registert before making purchases");
    }
  };

  return (
    <div className="item-main d-flex justify-content-center">
      <div className="item-container">
        <div className="image-container">
          <div>
            <FaArrowAltCircleLeft
              className="arrow-btn"
              onClick={() => setSwitchImage(!switchImage)}
            />
          </div>
          <div className="product_img_container">
            <img
              className="product_img"
              src={switchImage ? item.img1 : item.img2}
              alt=" productPicture"
            />
          </div>
          <div>
            <FaArrowAltCircleRight
              className="arrow-btn"
              onClick={() => setSwitchImage(!switchImage)}
            />
          </div>
        </div>
        <div className="product-detail-container">
          <h2 className="heading">{item.name}</h2>

          <h3>Type: {item.type}</h3>

          <h3>${item.price}</h3>
          <p>{item.desc}</p>

          <h3>
            Size: <span>{item.size}</span>
          </h3>
          <br />
          <div className="purchase-count-container ">
            <button className="btn">
              <FaMinus
                onClick={() =>
                  setPurchaseCount(
                    purchaseCount > 1 ? purchaseCount - 1 : purchaseCount
                  )
                }
              />
            </button>
            <div className="purchase-count">
              <h3>{purchaseCount}</h3>
            </div>
            <button className="btn">
              <FaPlus
                onClick={() =>
                  setPurchaseCount(
                    purchaseCount < 10 ? purchaseCount + 1 : purchaseCount
                  )
                }
              />
            </button>
          </div>

          <button
            className="button add-to-cart"
            onClick={() => addItemToCart()}>
            <h4>Add to cart</h4>
          </button>
        </div>

        <div className="rating-main">
          {reviews ? <RatingMain {...reviews} /> : null}
        </div>
      </div>
    </div>
  );
}
