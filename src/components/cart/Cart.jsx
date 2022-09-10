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
    getLoggedUser();
  }, []);

  useEffect(() => {
    getUserCart(loggedUser._id);
  }, [loggedUser]);

  if (loggedUser.firstName) {
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
        <div>
          <h4>Please login or register to add or view items in the cart!</h4>
          <Link to={"/login"}>
            <button className="button m-5">Login / Register</button>
          </Link>
        </div>
      </div>
    );
  }
}
