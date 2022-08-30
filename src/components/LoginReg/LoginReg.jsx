import React from "react";
import LoginForm from "./LoginForm";
import Registration from "./Registration";

export default function LoginReg() {
  return (
    <div className="d-flex justify-content-center">
      <div className="w-50">
        <div className="login">
          <h3>Sign In</h3>
          <LoginForm />
        </div>
        <div className="reg">
          <h3>First time here? please register below</h3>
          <Registration />
        </div>
      </div>
    </div>
  );
}
