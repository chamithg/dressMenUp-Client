import React from "react";
import "./../../components/general.css";
import { useGlobalContext } from "../../Context";
import { useNavigate } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import "./itemThumb.css";
import { Link } from "react-router-dom";
export default function ItemThumb({ img2, name, price, _id }) {
  const navigate = useNavigate();

  const { fetchOne, item, loggedUser, getLoggedUser, addToCart } =
    useGlobalContext();

  const addItemToCart = () => {
    getLoggedUser();
    fetchOne(_id);
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
      <Link to={`/products/${_id}`}>
        <div className="thumb-img-container">
          <img className="thumb-image" src={img2} alt="item" />
        </div>
        <div className="info-container">
          <h4>{name}</h4>
          <div className="d-flex justify-content-between">
            <span>
              <h4 className="item-price"> ${price}</h4>
            </span>
            <button className="button add-to" onClick={() => addItemToCart()}>
              <h4>
                <FaShoppingCart />
              </h4>
            </button>
          </div>
        </div>
      </Link>
    </div>
  );
}
