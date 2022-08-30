import React from "react";

export default function LoginForm() {
  return (
    <div>
      <form action="">
        <div className="form-group">
          <label>Email</label>
          <input type="text" name="email" className="form-control" />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input type="password" name="password" className="form-control" />
        </div>
        <input type="submit" className="m-3 " value="Login" />
      </form>
    </div>
  );
}
