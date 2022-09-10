import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Registration() {
  let [firstName, setFirstName] = useState("");
  let [lastName, setLastName] = useState("");
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [confirm, setConfirm] = useState("");
  let [formErrors, setFormErrors] = useState({});

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    let formInfo = { firstName, lastName, email, password, confirm };

    axios
      .post("http://localhost:8000/api/users/register", formInfo, {
        withCredentials: true,
      })
      .then((res) => {
        console.log("res after reg", res);
        if (res.data.errors) {
          setFormErrors(res.data.errors);
        } else {
          navigate("/");
        }
      })
      .catch((err) => {
        console.log("there was an error", err);
      });
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>First Name</label>
          <input
            type="text"
            name="firstName"
            className="form-control"
            onChange={(e) => setFirstName(e.target.value)}
          />
          <p className="text-danger"> {formErrors.firstName?.message}</p>
        </div>
        <div className="form-group">
          <label>Last Name</label>
          <input
            type="text"
            name="lastName"
            className="form-control"
            onChange={(e) => setLastName(e.target.value)}
          />
          <p className="text-danger"> {formErrors.lastName?.message}</p>
        </div>
        <div className="form-group">
          <label>Email</label>
          <input
            type="text"
            name="email"
            className="form-control"
            onChange={(e) => setEmail(e.target.value)}
          />
          <p className="text-danger">{formErrors.email?.message}</p>
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            name="password"
            className="form-control"
            onChange={(e) => setPassword(e.target.value)}
          />
          <p className="text-danger"> {formErrors.password?.message}</p>
        </div>
        <div className="form-group">
          <label>confirm Password</label>
          <input
            type="password"
            name="confirm"
            className="form-control"
            onChange={(e) => setConfirm(e.target.value)}
          />
          <p className="text-danger"> {formErrors.confirm?.message}</p>
        </div>
        <input type="submit" className="button m-3" value="Register" />
      </form>
    </div>
  );
}
