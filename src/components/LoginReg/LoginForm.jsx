import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useGlobalContext } from "../../Context";

export default function LoginForm() {
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");

  const { getLoggedUser, setLogin, loginFormErrors } = useGlobalContext();

  const navigate = useNavigate();

  const login = (e) => {
    e.preventDefault();
    let formInfo = { email, password };
    setLogin(formInfo, navigate);
  };

  return (
    <div>
      <form onSubmit={login}>
        <div className="form-group">
          <label>Email</label>
          <input
            type="text"
            name="email"
            className="form-control"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            name="password"
            className="form-control"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <p className="text-danger">{loginFormErrors}</p>
        <input type="submit" className="m-3 button " value="Login" />
      </form>
    </div>
  );
}
