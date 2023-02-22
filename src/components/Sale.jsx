import React, { useContext } from "react";
import AppContext from "@context/AppContext.js";
import "@styles/Sale.scss";
import addSaleImg from "@assets/add.png";

const Sale = (sale) => {
  const { setSaleId, toggleSaleInfo } = useContext(AppContext);
  const handleClick = (e) => {
    setSaleId(e.target.getAttribute("alt"));
    toggleSaleInfo();
  };

  return (
    <div className="market-card">
      <div className="market-info">
        <div>
          <p>
            <span>GMP {sale.amount / (1 * 10 ** 18)}</span>
          </p>
          <p>ETH {sale.price / (1 * 10 ** 18)}</p>
          <p className="market-date">08/02/2023</p>
        </div>
        <figure>
          <img src={addSaleImg} alt={sale.id} onClick={(e) => handleClick(e)} />
        </figure>
      </div>
    </div>
  );
};

export default Sale;
