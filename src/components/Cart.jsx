import React, { useEffect, useState } from "react";
import "./cart.css";
import { useNavigate } from "react-router-dom";
import { useGlobalContext } from "../Context";
import axios from "axios";

export default function Cart() {
  const [cartTotal, setCartTotal] = useState(null);

  const { getLoggedUser, loggedUser, getUserCart, currentUserCart } =
    useGlobalContext();

  const getcartTotal = () => {
    let total = 0;
    for (let i in currentUserCart) {
      total += currentUserCart[i].price;
    }
    setCartTotal(total);
  };

  useEffect(() => {
    getLoggedUser();
  }, []);

  useEffect(() => {
    getUserCart(loggedUser._id);
    getcartTotal();
  }, [loggedUser]);

  return (
    <div>
      <div className="cart-header">
        <h1>{loggedUser.firstName}, Here is your cart items!</h1>
      </div>
      <div className="cart-body">
        <table class="table">
          <thead>
            <tr>
              <th scope="col">Item</th>
              <th scope="col">action1</th>
              <th scope="col">Quantity</th>
              <th scope="col">action2</th>
              <th scope="col">Price</th>
              <th scope="col">action3</th>
            </tr>
          </thead>
          <tbody>
            {currentUserCart.map((item) => {
              return (
                <tr key={item.id}>
                  <td>
                    <img src={item.cartObj.img1} alt="cartImage" />
                  </td>
                  <td>-</td>
                  <td>{item.quantity}</td>
                  <td>-</td>
                  <td>{item.price}</td>
                  <td>
                    <button>Delete</button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <h1>Your total is : {cartTotal}</h1>
      </div>
    </div>
  );
}
