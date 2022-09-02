import React, { useState, useEffect } from "react";
import {
  FaArrowAltCircleRight,
  FaArrowAltCircleLeft,
  FaMinus,
  FaPlus,
} from "react-icons/fa";
import { useParams, useNavigate } from "react-router-dom";
import { useGlobalContext } from "../Context";
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

  useEffect(() => {
    fetchOne(id);
    getLoggedUser(id, navigate);
    console.log(loggedUser, item);
  }, []);

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
          <h3>
            Stock:{" "}
            <span>
              {item.count > 0 ? `${item.count} available` : "Not in stock"}{" "}
            </span>
          </h3>
          <br />
          <div className="purchase-count-container ">
            <FaMinus
              onClick={() =>
                setPurchaseCount(
                  purchaseCount > 0 ? purchaseCount - 1 : purchaseCount
                )
              }
            />
            <h3>{purchaseCount}</h3>
            <FaPlus
              onClick={() =>
                setPurchaseCount(
                  purchaseCount < item.count ? purchaseCount + 1 : purchaseCount
                )
              }
            />
          </div>

          <button
            className="btn btn-warning  btn-lg"
            disabled={item.count == 0 ? true : false}
            onClick={() => addItemToCart()}>
            <h4>Add to cart</h4>
          </button>
        </div>
      </div>
    </div>
  );
}
