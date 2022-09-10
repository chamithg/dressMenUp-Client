import React, { useEffect } from "react";
import "./Banner.css";
import banner from "../Assets/banner.jpeg";
import { useNavigate } from "react-router-dom";
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
        <button className="btn">
          <h2>Take a look ...</h2>
        </button>
      </div>
      <div className="banner-right">
        <img className="banner-image" src={banner} alt="baner" />
      </div>
    </div>
  );
}
