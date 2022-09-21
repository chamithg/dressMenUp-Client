import React, { useEffect } from "react";
import Filter from "./Filter";
import ItemList from "./itemList/ItemList";
import { useGlobalContext } from "../Context";

import "./general.css";
import "./components.css";

export default function Main() {
  return (
    <div>
      <div className="main-container d-flex m-1">
        <div className="filter-container">
          <Filter className="filter"></Filter>
        </div>
        <div className="itemList-container">
          <ItemList className="itemlist"></ItemList>
        </div>
      </div>
    </div>
  );
}
