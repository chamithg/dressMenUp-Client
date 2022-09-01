import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { FaShoppingCart, FaUserAlt } from "react-icons/fa";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  const logout = () => {
    axios
      .get("http://localhost:8000/api/users/logout", { withCredentials: true })
      .then((res) => {
        navigate("/login");
      })
      .catch((err) => {
        console.log("Error of loging out", err);
      });
  };
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
        <Link to="/cart">
          <FaShoppingCart />
        </Link>
        <div onClick={() => logout()}>
          <FaUserAlt />
        </div>
      </div>
    </div>
  );
}
