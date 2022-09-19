import React from "react";
import "./../../components/general.css";
import { useGlobalContext } from "../../Context";
import { useNavigate, Link } from "react-router-dom";
import { FaShoppingCart, FaEdit, FaTrash } from "react-icons/fa";
import "./itemThumb.css";
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
          <h4 className="item-name">{name}</h4>
          <div className="d-flex justify-content-between button-container ">
            <span>
              <h4 className="item-price"> ${price}</h4>
            </span>
            {loggedUser._id === "632296e9e47a5881568339ab" ? (
              <div>
                <Link to={`/edit/${_id}`}>
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
