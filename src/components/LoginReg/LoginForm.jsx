import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function LoginForm() {
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");

  let [loginFormErrors, setLoginFormErrors] = useState("");

  const navigate = useNavigate();

  const login = (e) => {
    e.preventDefault();
    // attach the form info
    let formInfo = { email, password };
    axios
      .post("http://localhost:8000/api/users/login", formInfo, {
        withCredentials: true,
      })
      .then((res) => {
        console.log("Logged in successfully", res);
        if (res.data.error) {
          setLoginFormErrors(res.data.error);
        } else {
          navigate("/");
        }
      })
      .catch((err) => {
        console.log("error when loggin in", err);
      });
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
        <input type="submit" className="m-3 " value="Login" />
      </form>
    </div>
  );
}
