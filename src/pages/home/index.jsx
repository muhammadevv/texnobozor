import React from "react";
import { Banner, Category, Discount, RecommendedItems } from "./components";
import Bestseller from "./components/bestseller";

function HomePage() {
  return (
    <>
      <Banner/>
      <Category/>
      <Bestseller/>
      <RecommendedItems/>
      <Discount/>     
    </>
  );
}

export default HomePage;
