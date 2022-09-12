import React, { useEffect } from "react";
import { FaAngleDoubleRight } from "react-icons/fa";
import "./Banner.css";
import banner from "../Assets/banner.jpeg";
import { useNavigate, Link } from "react-router-dom";
import { useGlobalContext } from "../../Context";

export default function Banner() {
  const { getLoggedUser, loggedUser } = useGlobalContext();

  const navigate = useNavigate();
  useEffect(() => {
    getLoggedUser(navigate);
  }, []);
  return (
    <div className="banner-main">
      <div className="banner-left">
        <h2>
          Hello ... <span className="user">{loggedUser.firstName},</span>{" "}
          welcome to
        </h2>
        <br />
        <div className="logo">
          <h1>Dress Men Up!</h1>
        </div>
        <br />
        <h2>Treat yourself with some fine Clothing..</h2>
        <Link to="/products">
          <button className="btn shop-all">
            <h3>
              Take a look
              <FaAngleDoubleRight />
            </h3>
          </button>
        </Link>
      </div>
      <div className="banner-right">
        <img className="banner-image" src={banner} alt="baner" />
      </div>
    </div>
  );
}
