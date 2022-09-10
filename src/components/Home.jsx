import React, { useEffect, useState } from "react";
import Banner from "./Home/Banner";
import Featured from "./Home/Featured";

export default function Home() {
  return (
    <div>
      <Banner />
      <Featured />
    </div>
  );
}
