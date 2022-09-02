import React from "react";
import "./cartItem.css";
import { FaMinus, FaPlus } from "react-icons/fa";
import { useGlobalContext } from "../Context";

export default function CartItem(item) {
  const { loggedUser, removeOneCartItem } = useGlobalContext();
  const handleRemove = () => {
    let itemToRemove = { user: loggedUser._id, itemId: item.item };
    let currentQuantity = item.quantity;
    removeOneCartItem(itemToRemove, item, currentQuantity);
  };
  const handleAddOne = () => {};
  const handleMinOne = () => {};

  return (
    <div>
      <div
        className="main-container d-flex justify-content-center m-5"
        style={{ height: 300, width: 900 }}>
        <div className="img-container d-flex justify-content-center">
          <img
            src={item.cartObj.img1}
            style={{ height: 300 }}
            alt="product-first"></img>
          <di className="desc align-self-center p-2">
            <h3 className="mb-5">{item.cartObj.name}</h3>
            <h3>Price: ${item.cartObj.price}</h3>
            <button
              onClick={() => handleRemove()}
              className="btn btn-warning btn-lg mt-4">
              <h4>Remove item</h4>
            </button>
          </di>
        </div>
        <div className="middle-conainer align-self-center p-2">
          <div className="purchase-count-container ">
            <FaMinus onClick={() => handleMinOne()} />
            <h3>{item.quantity}</h3>
            <FaPlus onClick={() => handleAddOne()} />
          </div>
        </div>
        <div className="price-conainer align-self-center p-2">
          <div>
            <h3>Subtotal: $ {item.price}</h3>
          </div>
        </div>
      </div>
    </div>
  );
}
