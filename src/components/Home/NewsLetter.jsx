import React from "react";
import "./NewsLetter.css";

export default function NewsLetter() {
  return (
    <div className="newsletter-body">
      <form>
        <h1 className="mb-4">NEWSLETTER</h1>
        <h3>Stay up to date with latest deals!!</h3>
        <div>
          <input
            className="email form-control"
            type="email"
            placeholder="enter your email"
          />
        </div>
        <input className="reg-button button" type="submit" value="Register" />
      </form>
      <p className="copyr">&copy; Copyright 2022 Chamith Gamage</p>
    </div>
  );
}
