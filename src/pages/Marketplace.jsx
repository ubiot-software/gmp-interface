import React from "react";
import Sales from "@containers/Sales";
import "@styles/Marketplace.scss";

const Marketplace = () => {
  return (
    <div className="container">
      <h1 className="market-title">Groundwater Marketplace</h1>
      <Sales />
    </div>
  );
};

export default Marketplace;
