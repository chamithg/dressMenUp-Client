import React from "react";
import "./Featured.css";
import { useGlobalContext } from "../../Context";

export default function Featured() {
  const { items } = useGlobalContext();

  return (
    <div className="featured-main">
      <h1 className="m-5">Featured Products</h1>
      <div className="featured-card mb-5 w-75">
        <div className="fetured-left">
          <p>
            New items are added to the inventory each and every day, we want you
            to find your best match among those.
          </p>
        </div>
        <div className="featured-right"></div>
      </div>
    </div>
  );
}
