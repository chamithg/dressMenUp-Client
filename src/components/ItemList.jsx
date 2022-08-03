import React from "react";
import "./itemList.css";
import { useGlobalContext } from "../Context";
import ItemThumb from "./ItemThumb";

export default function ItemList() {
  const { items } = useGlobalContext();
  return (
    <div className="products-container">
      {items.map((item) => {
        return <ItemThumb {...item} />;
      })}
    </div>
  );
}