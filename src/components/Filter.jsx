import React from "react";
import { useGlobalContext } from "../Context";
import { Link } from "react-router-dom";
import "./components.css";

export default function Filter(loggedUser) {
  const {
    setPriceFilter,
    setTypeFilter,
    setSizeFilter,
    setFeaturedFilter,
    setSearch,
    typeFilter,
    sizeFilter,
    priceFilter,
    featuredFilter,
    search,
  } = useGlobalContext();

  const removeFilters = () => {
    setSearch("");
    setTypeFilter("");
    setSizeFilter("");
    setPriceFilter("");
  };

  return (
    <div className="filter">
      <form action="">
        <input
          className="form-control searchbox"
          type="text"
          placeholder="Search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </form>
      <div class="filter-section">
        <h4>Filter by type</h4>
        <div className="line"></div>
        <button
          className={
            typeFilter === "jackets"
              ? "filter-button selected"
              : "filter-button"
          }
          onClick={() => setTypeFilter("jackets")}
          on>
          Jackets
        </button>
        <button
          className={
            typeFilter === "shirts" ? "filter-button selected" : "filter-button"
          }
          onClick={() => setTypeFilter("shirts")}>
          Shirts
        </button>
        <button
          className={
            typeFilter === "shorts" ? "filter-button selected" : "filter-button"
          }
          onClick={() => setTypeFilter("shorts")}>
          shorts
        </button>
        <button
          className={
            typeFilter === "jeans" ? "filter-button selected" : "filter-button"
          }
          onClick={() => setTypeFilter("jeans")}>
          jeans
        </button>
      </div>
      <div class="filter-section">
        <h4>Filter by price range</h4>
        <div className="line"></div>
        <button
          className={
            priceFilter === "25>" ? "filter-button selected" : "filter-button"
          }
          onClick={() => setPriceFilter("25>")}>
          below $25
        </button>
        <button
          className={
            priceFilter === "50>25" ? "filter-button selected" : "filter-button"
          }
          onClick={() => setPriceFilter("50>25")}>
          $26 - $50
        </button>
        <button
          className={
            priceFilter === "75>50" ? "filter-button selected" : "filter-button"
          }
          onClick={() => setPriceFilter("75>50")}>
          $51 - $75
        </button>
        <button
          className={
            priceFilter === ">75" ? "filter-button selected" : "filter-button"
          }
          onClick={() => setPriceFilter(">75")}>
          above $75
        </button>
      </div>
      <div class="filter-section">
        <h4>Filter by Size</h4>
        <div className="line"></div>
        <button
          className={
            sizeFilter === "small" ? "filter-button selected" : "filter-button"
          }
          onClick={() => setSizeFilter("small")}>
          Small
        </button>
        <button
          className={
            sizeFilter === "medium" ? "filter-button selected" : "filter-button"
          }
          onClick={() => setSizeFilter("medium")}>
          Medium
        </button>
        <button
          className={
            sizeFilter === "large" ? "filter-button selected" : "filter-button"
          }
          onClick={() => setSizeFilter("large")}>
          Large
        </button>
        <button
          className={
            sizeFilter === "xlarge" ? "filter-button selected" : "filter-button"
          }
          onClick={() => setSizeFilter("xlarge")}>
          X-L
        </button>
      </div>
      <div className="line"></div>
      <div className="remove-section">
        <button
          onClick={() => setFeaturedFilter(!featuredFilter)}
          className={
            featuredFilter ? "filter-button selected" : "filter-button"
          }>
          add/remove featured filter
        </button>
        <button
          className="filter-button remove-button"
          onClick={() => removeFilters()}>
          {" "}
          remove all filters
        </button>
      </div>
      <div className="line"></div>
      {loggedUser._id === "632296e9e47a5881568339ab" ? (
        <Link to="/add">
          <button className="admin-button">
            <h4>Add items (admin)</h4>
          </button>
        </Link>
      ) : null}
    </div>
  );
}
