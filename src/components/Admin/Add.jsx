import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./admin.css";
import axios from "axios";

export default function Add() {
  let [name, setName] = useState("");
  let [type, setType] = useState("");
  let [desc, setDesc] = useState("");
  let [img1, setImg1] = useState("");
  let [img2, setImg2] = useState("");
  let [size, setSize] = useState("");
  let [price, setPrice] = useState();
  let [oldPrice, setOldPrice] = useState();
  let [isFeatured, setIsFeatured] = useState();
  let [discount, setDiscount] = useState();
  let [formErrors, setFormErrors] = useState();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    let formInfo = {
      name,
      type,
      desc,
      img1,
      img2,
      price,
      oldPrice,
      size,
      isFeatured,
      discount,
    };

    axios
      .post("http://localhost:8000/api/items/new", formInfo)
      .then((res) => {
        console.log("res after add", res);
        if (res.data.errors) {
          setFormErrors(res.data.errors);
        } else {
          navigate("/add");
        }
      })
      .catch((err) => {
        console.log("there was an error", err);
      });
  };
  return (
    <div className="add-main">
      <div className="add-form">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Name</label>
            <input
              type="text"
              name="firstnameName"
              className="form-control"
              onChange={(e) => setName(e.target.value)}
            />
            {/* <p className="text-danger"> {formErrors.name?.message}</p> */}
          </div>
          <div className="form-group">
            <label>type</label>
            <input
              type="text"
              name="Type"
              className="form-control"
              onChange={(e) => setType(e.target.value)}
            />
            {/* <p className="text-danger"> {formErrors.type?.message}</p> */}
          </div>
          <div className="form-group">
            <label>desc</label>
            <textarea
              type="text"
              name="desc"
              className="form-control"
              onChange={(e) => setDesc(e.target.value)}
            />
            {/* <p className="text-danger">{formErrors.desc?.message}</p> */}
          </div>
          <div className="form-group">
            <label>img1</label>
            <input
              type="text"
              name="img1"
              className="form-control"
              onChange={(e) => setImg1(e.target.value)}
            />
            {/* <p className="text-danger"> {formErrors.img1?.message}</p> */}
          </div>
          <div className="form-group">
            <label>img2</label>
            <input
              type="text"
              name="img2"
              className="form-control"
              onChange={(e) => setImg2(e.target.value)}
            />
            {/* <p className="text-danger"> {formErrors.img2?.message}</p> */}
          </div>
          <div className="form-group">
            <label>size</label>
            <select
              class="form-control"
              onChange={(e) => setSize(e.target.value)}
              type="text"
              name="size"
              id="exampleFormControlSelect1">
              <option value="small">small</option>
              <option value="medium">medium</option>
              <option value="large">large</option>
              <option value="xlarge">xlarge</option>
            </select>
            {/* <p className="text-danger"> {formErrors.size?.message}</p> */}
          </div>
          <div className="form-group">
            <label>is Featured</label>
            <select
              class="form-control"
              onChange={(e) => setIsFeatured(e.target.value)}
              id="exampleFormControlSelect1">
              <option value="true">true</option>
              <option value="false">false</option>
            </select>
            {/* <p className="text-danger"> {formErrors.isFeatured?.message}</p> */}
          </div>
          <div className="form-group">
            <label>Old Price</label>
            <input
              type="number"
              name="oldPrice"
              className="form-control"
              onChange={(e) => setOldPrice(e.target.value)}
            />
            {/* <p className="text-danger"> {formErrors.oldPrice?.message}</p> */}
          </div>
          <div className="form-group">
            <label>Price</label>
            <input
              type="number"
              name="price"
              className="form-control"
              onChange={(e) => setPrice(e.target.value)}
            />
            {/* <p className="text-danger"> {formErrors.price?.message}</p> */}
          </div>
          <div className="form-group">
            <label>Discount</label>
            <select
              class="form-control"
              onChange={(e) => setDiscount(e.target.value)}
              id="exampleFormControlSelect1">
              <option value="0">0</option>
              <option value="10">10</option>
              <option value="20">20</option>
              <option value="30">30</option>
            </select>
            {/* <p className="text-danger"> {formErrors.discount?.message}</p> */}
          </div>
          <input type="submit" className="button m-3" value="Add" />
        </form>
      </div>
    </div>
  );
}
