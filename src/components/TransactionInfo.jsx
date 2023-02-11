import React from "react";
import "@styles/TransactionInfo.scss";

const TransactionInfo = () => {
  return (
    <div className="transaction-info">
      <p>$35,00</p>
      <p>10 ML</p>
      <p>With its practical position.</p>
      <button className="primary-button buy-button">Buy</button>
    </div>
  );
};

export default TransactionInfo;
