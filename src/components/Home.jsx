import React, { useEffect, useState } from "react";
import Banner from "./Home/Banner";
import Featured from "./Home/Featured";
import { useNavigate } from "react-router-dom";
import { useGlobalContext } from "../Context";

export default function Home() {
  const { getLoggedUser, loggedUser } = useGlobalContext();

  const navigate = useNavigate();
  useEffect(() => {
    getLoggedUser(navigate);
  }, []);

  return (
    <div>
      <h1>Hello ...{loggedUser.firstName}</h1>
      <Banner />
      <Featured />
    </div>
  );
}
