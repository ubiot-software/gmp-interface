import React, { useContext } from "react";
import AppContext from "@context/AppContext.js";
import TransactionInfo from "@components/TransactionInfo";
import closeImg from "@assets/close.png";
import "@styles/TransactionDetail.scss";

const TransactionDetail = () => {
  const { toggleTransactionInfo } = useContext(AppContext);
  const handleClick = () => {
    toggleTransactionInfo();
  };
  return (
    <aside className="transaction-detail ">
      <div className="transaction-detail-close">
        <img src={closeImg} alt="close" onClick={handleClick} />
      </div>
      <TransactionInfo />
    </aside>
  );
};

export default TransactionDetail;
