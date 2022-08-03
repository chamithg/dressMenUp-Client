import React from "react";
import Filter from "./Filter";
import ItemList from "./ItemList";
import Preview from "./Preview";
import "./components.css";

export default function Main() {
  return (
    <div>
      <div className="main-container d-flex m-1">
        <Filter className="filter"></Filter>
        <ItemList className="itemlist"></ItemList>
        <Preview className="preview"></Preview>
      </div>
    </div>
  );
}
