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
import "./SingleItem.css";

export default function SingleItem() {
  const { fetchOne, item, loggedUser, getLoggedUser, addToCart } =
    useGlobalContext();
  const [switchImage, setSwitchImage] = useState(false);
  const [purchaseCount, setPurchaseCount] = useState(1);

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    fetchOne(id);
  }, [switchImage]);

  const addItemToCart = () => {
    const cartItem = {
      user: loggedUser._id,
      item: item,
      cartObj: item,
      quantity: purchaseCount,
    };

    addToCart(cartItem, navigate);
  };

  return (
    <div className="item-main">
      <div className="item-container w-75 m-5 d-flex justify-content-center">
        <div className="image-container d-flex justify-content-center">
          <div>
            <FaArrowAltCircleLeft
              className="arrow-btn"
              onClick={() => setSwitchImage(!switchImage)}
            />
          </div>
          <img
            src={switchImage ? item.img1 : item.img2}
            alt=" productPicture"
          />
          <div>
            <FaArrowAltCircleRight
              className="arrow-btn"
              onClick={() => setSwitchImage(!switchImage)}
            />
          </div>
        </div>
        <div className="product-detail-container align-item-left">
          <h2>{item.name}</h2>
          <br />
          <h3>Type: {item.type}</h3>
          <br />
          <h3>${item.price}</h3>
          <p>{item.desc}</p>
          <br />
          <h3>
            Size: <span>{item.size}</span>
          </h3>

          <br />

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
            <h3>{purchaseCount}</h3>
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
            className="btn btn-warning  btn-lg"
            onClick={() => addItemToCart()}>
            <h4>Add to cart</h4>
          </button>
        </div>
        <div className="m-5 p-5 rating-main">
          <RatingMain />
        </div>
      </div>
    </div>
  );
}
