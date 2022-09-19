import React, { useState, useEffect } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import { useGlobalContext } from "../../Context";
import "./admin.css";
import axios from "axios";

export default function Edit() {
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

  const { getLoggedUser, loggedUser, fetchOne, item } = useGlobalContext();

  const { id } = useParams();
  console.log(id);

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
      .put(`http://localhost:8000/api/items/${id}/update`, formInfo)
      .then((res) => {
        console.log("res after edit", res);
        if (res.data.errors) {
          setFormErrors(res.data.errors);
        } else {
          navigate(`/products`);
        }
      })
      .catch((err) => {
        console.log("there was an error", err);
      });
  };

  const runStatusUpdate = () => {
    setName(item?.name);
    setType(item?.type);
    setDesc(item?.desc);
    setImg1(item?.img1);
    setImg2(item?.img2);
    setPrice(item?.price);
    setOldPrice(item?.oldPrice);
    setSize(item?.size);
    setIsFeatured(item?.isFeatured);
    setDiscount(item?.discount);
  };

  useEffect(() => {
    getLoggedUser();
    fetchOne(id);
  }, []);

  useEffect(() => {
    runStatusUpdate();
  }, [item]);

  return (
    <div className="add-main">
      {loggedUser._id === "632296e9e47a5881568339ab" ? (
        <div className="add-form">
          <h2>Edit Item</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Name</label>
              <input
                type="text"
                value={name}
                name="name"
                className="form-control"
                onChange={(e) => setName(e.target.value)}
              />
              <p className="text-danger"> {formErrors?.name?.message}</p>
            </div>
            <div className="form-group">
              <label>type</label>
              <input
                type="text"
                value={type}
                name="Type"
                className="form-control"
                onChange={(e) => setType(e.target.value)}
              />
              <p className="text-danger"> {formErrors?.type?.message}</p>
            </div>
            <div className="form-group">
              <label>desc</label>
              <textarea
                type="text"
                value={desc}
                name="desc"
                className="form-control"
                onChange={(e) => setDesc(e.target.value)}
              />
              <p className="text-danger">{formErrors?.desc?.message}</p>
            </div>
            <div className="form-group">
              <label>img1</label>
              <input
                type="text"
                value={img1}
                name="img1"
                className="form-control"
                onChange={(e) => setImg1(e.target.value)}
              />
              <p className="text-danger"> {formErrors?.img1?.message}</p>
            </div>
            <div className="form-group">
              <label>img2</label>
              <input
                type="text"
                value={img2}
                name="img2"
                className="form-control"
                onChange={(e) => setImg2(e.target.value)}
              />
              <p className="text-danger"> {formErrors?.img2?.message}</p>
            </div>
            <div className="form-group">
              <label>size</label>
              <select
                class="form-control"
                onChange={(e) => setSize(e.target.value)}
                type="text"
                value={size}
                name="size"
                id="exampleFormControlSelect1">
                <option value="small">small</option>
                <option value="medium">medium</option>
                <option value="large">large</option>
                <option value="xlarge">xlarge</option>
              </select>
              <p className="text-danger"> {formErrors?.size?.message}</p>
            </div>
            <div className="form-group">
              <label>is Featured</label>
              <select
                class="form-control"
                value={isFeatured}
                onChange={(e) => setIsFeatured(e.target.value)}
                id="exampleFormControlSelect1">
                <option value="true">true</option>
                <option value="false">false</option>
              </select>
              <p className="text-danger"> {formErrors?.isFeatured?.message}</p>
            </div>
            <div className="form-group">
              <label>Old Price</label>
              <input
                type="number"
                step=".01"
                value={oldPrice}
                name="oldPrice"
                className="form-control"
                onChange={(e) => setOldPrice(e.target.value)}
              />
              <p className="text-danger"> {formErrors?.oldPrice?.message}</p>
            </div>
            <div className="form-group">
              <label>Price</label>
              <input
                type="number"
                step=".01"
                value={price}
                name="price"
                className="form-control"
                onChange={(e) => setPrice(e.target.value)}
              />
              <p className="text-danger"> {formErrors?.price?.message}</p>
            </div>
            <div className="form-group">
              <label>Discount</label>
              <select
                class="form-control"
                value={discount}
                onChange={(e) => setDiscount(e.target.value)}
                id="exampleFormControlSelect1">
                <option value="0">0</option>
                <option value="10">10</option>
                <option value="20">20</option>
                <option value="30">30</option>
              </select>
              <p className="text-danger"> {formErrors?.discount?.message}</p>
            </div>
            <input type="submit" className="button m-3" value="Edit" />
          </form>
        </div>
      ) : (
        <div className="m-5">
          <img
            className="m-5"
            src="https://cdn.pixabay.com/photo/2018/01/04/15/51/404-error-3060993__340.png"
            alt="oops"
          />
          <h2>You do not have permissions to view this page</h2>
          <Link to="/">
            <button className="button">
              {" "}
              <h4>Back to home</h4>
            </button>
          </Link>
        </div>
      )}
    </div>
  );
}
