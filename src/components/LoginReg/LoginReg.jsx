import React, { useState, useEffect } from "react";
import LoginForm from "./LoginForm";
import Registration from "./Registration";
import "./logReg.css";
import { useGlobalContext } from "../../Context";

export default function LoginReg() {
  const [openLogin, setOpenLogin] = useState(true);
  const [openReg, setOpenReg] = useState(false);

  const reg = () => {
    setOpenLogin(!openLogin);
    setOpenReg(!openReg);
  };
  return (
    <div className="body-container d-flex justify-content-center">
      <div className="main">
        {openLogin ? (
          <div className="login">
            <h3>Sign In</h3>
            <LoginForm />
            <br />
            <br />
            <h4>First time here? please register below</h4>
            <br />
            <button className="button" onClick={reg}>
              Start Regisration by clicking here
            </button>
          </div>
        ) : null}

        <div className="reg">
          {openReg ? (
            <div>
              <h3> Register</h3>
              <br />
              <Registration />
              <br />
              <br />
              <h4>Already have an account? please Login</h4>
              <br />
              <button className="button" onClick={reg}>
                Login!
              </button>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}
