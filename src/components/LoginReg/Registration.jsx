import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useGlobalContext } from "../../Context";

export default function Registration() {
  let [firstName, setFirstName] = useState("");
  let [lastName, setLastName] = useState("");
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [confirm, setConfirm] = useState("");

  const navigate = useNavigate();
  const { getLoggedUser, setReg, regFormErrors } = useGlobalContext();

  const handleSubmit = (e) => {
    e.preventDefault();
    let formInfo = { firstName, lastName, email, password, confirm };
    setReg(formInfo, navigate);
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
          <p className="text-danger"> {regFormErrors.firstName?.message}</p>
        </div>
        <div className="form-group">
          <label>Last Name</label>
          <input
            type="text"
            name="lastName"
            className="form-control"
            onChange={(e) => setLastName(e.target.value)}
          />
          <p className="text-danger"> {regFormErrors.lastName?.message}</p>
        </div>
        <div className="form-group">
          <label>Email</label>
          <input
            type="text"
            name="email"
            className="form-control"
            onChange={(e) => setEmail(e.target.value)}
          />
          <p className="text-danger">{regFormErrors.email?.message}</p>
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            name="password"
            className="form-control"
            onChange={(e) => setPassword(e.target.value)}
          />
          <p className="text-danger"> {regFormErrors.password?.message}</p>
        </div>
        <div className="form-group">
          <label>confirm Password</label>
          <input
            type="password"
            name="confirm"
            className="form-control"
            onChange={(e) => setConfirm(e.target.value)}
          />
          <p className="text-danger"> {regFormErrors.confirm?.message}</p>
        </div>
        <input type="submit" className="button m-3" value="Register" />
      </form>
    </div>
  );
}
