import React, { useContext } from "react";
import AppContext from "@context/AppContext.js";
import closeImg from "@assets/close.png";
import "@styles/Sell.scss";

const Sell = () => {
  const { toggleSellInfo } = useContext(AppContext);
  const handleClick = () => {
    toggleSellInfo();
  };

  return (
    <aside className="Sell ">
      <div className="Sell-close">
        <img src={closeImg} alt="close" onClick={handleClick} />
      </div>
      <div className="Sell-info">
        <label htmlFor="amount">Amount</label>
        <input id="amount" type="number" />
        <label htmlFor="price">Price</label>
        <input id="price" type="number" />
        <button className="primary-button sell-button">Register sell</button>
      </div>
    </aside>
  );
};

export default Sell;
