import React, { useContext } from "react";
import AppContext from "@context/AppContext.js";
import "@styles/Sale.scss";
import addTransactionImg from "@assets/add.png";

const Sale = (sale) => {
  const { toggleTransactionInfo } = useContext(AppContext);
  const handleClick = () => {
    toggleTransactionInfo();
  };

  return (
    <div className="market-card" onClick={() => handleClick()}>
      <div className="market-info">
        <div>
          <p>ETH {sale.price / (1 * 10 ** 18)}</p>
          <p>GMP {sale.amount / (1 * 10 ** 18)}</p>
          <p className="market-date">08/02/2023</p>
        </div>
        <figure>
          <img src={addTransactionImg} alt="sale.id" />
        </figure>
      </div>
    </div>
  );
};

export default Sale;
