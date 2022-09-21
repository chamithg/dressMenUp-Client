import React from "react";
import "./../../components/general.css";
import saleStamp from "../Assets/sale.png";
import { useGlobalContext } from "../../Context";
import { useNavigate, Link } from "react-router-dom";
import { FaShoppingCart, FaEdit, FaTrash } from "react-icons/fa";
import "./itemThumb.css";
export default function ItemThumb(item) {
  const navigate = useNavigate();

  const { loggedUser, addToCart } = useGlobalContext();

  const addItemToCart = () => {
    const cartItem = {
      user: loggedUser._id,
      item: item,
      cartObj: item,
      quantity: 1,
    };

    addToCart(cartItem, navigate);
  };

  return (
    <div className="thumbContainer">
      <Link to={`/products/${item._id}`}>
        <div className="thumb-img-container">
          <img className="thumb-image" src={item.img2} alt="item" />
          {item.isFeatured ? (
            <img className="discount" src={saleStamp} alt="saleStamp" />
          ) : null}
        </div>
        <div className="info-container">
          <h4 className="item-name">{item.name}</h4>
          <div className="d-flex justify-content-between button-container ">
            <span>
              <h4 className="item-price"> ${item.price}</h4>
            </span>
            {loggedUser._id === "632296e9e47a5881568339ab" ? (
              <div>
                <Link to={`/edit/${item._id}`}>
                  <button className="admin-button edit">
                    <h4>
                      <FaEdit />
                    </h4>
                  </button>
                </Link>
                <button
                  className="admin-button delete"
                  onClick={() => addItemToCart()}>
                  <h4>
                    <FaTrash />
                  </h4>
                </button>
              </div>
            ) : (
              <button className="button add-to" onClick={() => addItemToCart()}>
                <h4>
                  <FaShoppingCart />
                </h4>
              </button>
            )}
          </div>
        </div>
      </Link>
    </div>
  );
}
