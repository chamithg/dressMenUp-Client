import React from "react";
import "./../../components/general.css";
import "./cartItem.css";
import { FaMinus, FaPlus } from "react-icons/fa";
import { useGlobalContext } from "../../Context";

export default function CartItem(item) {
  const { loggedUser, getUserCart, removeOneCartItem, changeByOne } =
    useGlobalContext();
  const handleRemove = () => {
    let itemToRemove = { user: loggedUser._id, itemId: item.item };
    removeOneCartItem(itemToRemove);
    getUserCart(loggedUser._id);
  };
  const handleAddOne = () => {
    let itemToInc = item;
    itemToInc = {
      userId: loggedUser._id,
      itemId: item._id,
      quantity: item.quantity + 1,
      price: (item.cartObj.price * (item.quantity + 1)).toFixed(2),
    };

    changeByOne(itemToInc);
  };
  const handleMinOne = () => {
    let itemToDec = item;

    if (item.quantity === 1) {
      handleRemove();
    }
    itemToDec = {
      userId: loggedUser._id,
      itemId: item._id,
      quantity: item.quantity - 1,
      price: (item.cartObj.price * (item.quantity - 1)).toFixed(2),
    };

    changeByOne(itemToDec);
  };

  return (
    <div>
      <div className="cart-section-center">
        <div className="cart-img-container">
          <img
            className="cart-Img"
            src={item.cartObj.img1}
            alt="product-first"></img>
          <di className="desc align-self-center p-2">
            <h3 className="cart-title ">{item.cartObj.name}</h3>
            <h4 className="price">Price: ${item.cartObj.price}</h4>
            <button onClick={() => handleRemove()} className="button">
              <h4>Remove item</h4>
            </button>
          </di>
        </div>
        <div className="price-container">
          <div className="purchase-count-container ">
            <FaMinus className="qbtn" onClick={() => handleMinOne()} />
            <div>
              <h4 className="qinfo">{item.quantity}</h4>
            </div>
            <FaPlus className="qbtn" onClick={() => handleAddOne()} />
          </div>
          <div className="line"></div>
          <h4 className="subtotal">
            Subtotal: <span className="stSpan">$ {item.price}</span>
          </h4>
        </div>
      </div>
    </div>
  );
}
