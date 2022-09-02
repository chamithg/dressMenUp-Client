import React, { useEffect } from "react";
import "./cart.css";
import { useGlobalContext } from "../Context";

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

  return (
    <div>
      <div className="cart-header">
        <h1>{loggedUser.firstName}, Here is your cart items!</h1>
      </div>
      <div className="cart-body d-flex justify-content-center">
        <div className="cart-main">
          <div className="cart-item-container">
            {currentUserCart.map((item) => {
              return <CartItem {...item} />;
            })}
          </div>

          <h1>Your total is : ${getcartTotal()}</h1>
          <div className="btn btn-success btn-lg p-4 text-dark m-4">
            <h3>Checkout</h3>
          </div>
        </div>
      </div>
    </div>
  );
}
