import React, { useState, useEffect } from "react";
import About from "./Home/About";
import Banner from "./Home/Banner";
import Featured from "./Home/Featured";
import axios from "axios";
import { useGlobalContext } from "../Context";
import Categories from "./Home/Categories";
import NewsLetter from "./Home/NewsLetter";

export default function Home() {
  const { getUserCart, loggedUser } = useGlobalContext();

  useEffect(() => {
    getUserCart(loggedUser._id);
  }, [loggedUser]);

  return (
    <>
      <div>
        <Banner />
        <Featured />
        <About />
        <Categories />
        <NewsLetter />
      </div>
    </>
  );
}
