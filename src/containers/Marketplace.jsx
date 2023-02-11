import React from "react";
import Transactions from "@components/Transactions";
import "@styles/Marketplace.scss";

const Marketplace = () => {
  return (
    <div className="container">
      <h1 className="market-title">GroundWater Marketplace</h1>
      <Transactions />
    </div>
  );
};

export default Marketplace;
