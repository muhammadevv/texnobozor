import React from "react";
import { Banner, Category, Discount, RecommendedItems } from "./components";

function HomePage() {
  return (
    <>
      <Banner/>
      <Category/>
      <RecommendedItems/>
      <Discount/>     
    </>
  );
}

export default HomePage;
