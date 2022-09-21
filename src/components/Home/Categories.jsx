import React from "react";
import { useNavigate } from "react-router-dom";
import { useGlobalContext } from "../../Context";
import "./Categories.css";

export default function Categories() {
  const { setTypeFilter } = useGlobalContext();
  const navigate = useNavigate();
  const setCat = (category) => {
    setTypeFilter(category);
    navigate("/products");
  };
  return (
    <div className="cat-main">
      <div className="cat-left">
        <h1>Shop</h1>
        <h1>Categories</h1>
      </div>
      <div className="cat-right">
        <div onClick={() => setCat("jackets")} className="cat cat1">
          <div className="cat-head">
            <h1>Jackets</h1>
          </div>
        </div>
        <div onClick={() => setCat("shirts")} className="cat cat2">
          <div className="cat-head">
            <h1>Shirts</h1>
          </div>
        </div>
        <div onClick={() => setCat("jeans")} className="cat cat3">
          <div className="cat-head">
            <h1>Jeans</h1>
          </div>
        </div>
        <div onClick={() => setCat("shorts")} className="cat cat4">
          <div className="cat-head">
            <h1>Shorts</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
