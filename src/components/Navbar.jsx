import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { FaShoppingCart, FaUserAlt } from "react-icons/fa";

export default function Navbar() {
  return (
    <div className="nav-main">
      <div className="logo">
        <h1>Dress Men Up!</h1>
      </div>
      <ul>
        <li>
          <Link to="/">
            <h4>Home</h4>
          </Link>
        </li>
        <li>
          <Link to="/products">
            <h4>Shop All</h4>
          </Link>
        </li>
        <li>
          <h4>About Us</h4>
        </li>
        <li>
          <h4>Featured</h4>
        </li>
        <li>
          <h4>Categories</h4>
        </li>
        <li>
          <h4>On Sale</h4>
        </li>
        <li>
          <h4>Contact Us</h4>
        </li>
      </ul>
      <div className="cart-login">
        <FaShoppingCart />
        <FaUserAlt />
      </div>
    </div>
  );
}
