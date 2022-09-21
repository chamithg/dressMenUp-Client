import React, { useEffect } from "react";
import "./itemList.css";
import { useGlobalContext } from "../../Context";
import ItemThumb from "./ItemThumb";

export default function ItemList() {
  const { items, getUserCart, loggedUser } = useGlobalContext();

  useEffect(() => {
    getUserCart(loggedUser._id);
  }, []);

  return (
    <div className="products-container">
      {items.map((item) => {
        return <ItemThumb {...item} />;
      })}
    </div>
  );
}
