import React from "react";
import "./itemThumb.css";
import { useGlobalContext } from "../../Context";
import { Link } from "react-router-dom";
export default function ItemThumb({ img2, name, price, _id }) {
  return (
    <div className="thumbContainer">
      <Link to={`/products/${_id}`}>
        <img src={img2} alt="item" />
        <h4>{name}</h4>
        <h4 className="price"> ${price}</h4>
      </Link>
    </div>
  );
}
