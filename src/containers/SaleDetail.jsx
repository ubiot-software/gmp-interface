import React, { useContext } from "react";
import AppContext from "@context/AppContext.js";
import SaleInfo from "@components/SaleInfo";
import closeImg from "@assets/close.png";
import "@styles/SaleDetail.scss";

const SaleDetail = () => {
  const { saleId, toggleSaleInfo } = useContext(AppContext);
  const handleClick = () => {
    toggleSaleInfo();
  };
  return (
    <aside className="transaction-detail ">
      <div className="transaction-detail-close">
        <img src={closeImg} alt="close" onClick={handleClick} />
      </div>
      <SaleInfo saleId={saleId} />
    </aside>
  );
};

export default SaleDetail;
