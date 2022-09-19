import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { FaShoppingCart, FaUserAlt, FaHome } from "react-icons/fa";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useGlobalContext } from "../Context";

export default function Navbar() {
  const {
    getLoggedUser,
    setLoggedUser,
    loggedUser,
    setCartQuentity,
    cartQuentity,
  } = useGlobalContext();
  const navigate = useNavigate();

  const logout = () => {
    if (loggedUser) {
      axios
        .get("http://localhost:8000/api/users/logout", {
          withCredentials: true,
        })
        .then((res) => {
          setLoggedUser(null);
          setCartQuentity(null);
          navigate("/login");
        })
        .catch((err) => {
          console.log("Error of loging out", err);
        });
    }
  };

  useEffect(() => {
    getLoggedUser();
  }, []);

  return (
    <div className="nav-main">
      <ul>
        <li>
          <div>
            <Link className="link" to="/">
              <FaHome />
            </Link>
          </div>
        </li>
        <li>
          <div>
            <Link className="link" to="/cart">
              <FaShoppingCart />
            </Link>
            <h4 className="cart-count">{cartQuentity}</h4>
          </div>
        </li>
        <li>
          <div onClick={() => logout()}>
            <FaUserAlt />
          </div>
        </li>
      </ul>
    </div>
  );
}
