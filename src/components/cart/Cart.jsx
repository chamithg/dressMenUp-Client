import React, { useEffect } from "react";
import "./../../components/general.css";
import { Link } from "react-router-dom";
import "./cart.css";
import { useGlobalContext } from "../../Context";

import CartItem from "./CartItem";

export default function Cart() {
  const { getLoggedUser, loggedUser, getUserCart, currentUserCart } =
    useGlobalContext();

  const getcartTotal = () => {
    let total = 0;
    for (let i in currentUserCart) {
      total += currentUserCart[i].price;
    }
    return total;
  };

  useEffect(() => {
    getUserCart(loggedUser._id);
  }, [loggedUser]);

  if (loggedUser?.firstName) {
    return (
      <div className="card-main">
        <div className="cart-header">
          <h2>{loggedUser.firstName}, Here is your cart items!</h2>
        </div>
        <div className="cart-body d-flex justify-content-center">
          <div className="cart-main">
            <div className="cart-item-container">
              {currentUserCart.map((item) => {
                return <CartItem {...item} />;
              })}
            </div>
            <div className="checkout-pannel">
              <div className="checkout-card">
                <h4>
                  Order total :{" "}
                  <span className="ctSpan"> ${getcartTotal().toFixed(2)}</span>
                </h4>
                <h4>
                  Est. tax(10%) :{" "}
                  <span className="ctSpan">
                    $ {(getcartTotal() / 10).toFixed(2)}
                  </span>
                </h4>
                <div className="line"></div>
                <h4>
                  Grand total :{" "}
                  <span className="ctSpan">
                    $ {(getcartTotal() + getcartTotal() / 10).toFixed(2)}
                  </span>
                </h4>

                <div className="button checkout">
                  <h4>Checkout</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="user-none d-flex justify-content-center p-5">
        <div className="m-5">
          <img
            className="m-5"
            src="https://cdn.pixabay.com/photo/2018/01/04/15/51/404-error-3060993__340.png"
            alt="oops"
          />
          <h2>Please login or register to add or view items in the cart!</h2>
          <Link to="/login">
            <button className="button">
              {" "}
              <h4>Login / Register</h4>
            </button>
          </Link>
        </div>
        ;
      </div>
    );
  }
}
