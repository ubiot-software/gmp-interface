import React from "react";
import TransactionInfo from "@components/TransactionInfo";
import closeImg from "@assets/close.png";
import "@styles/TransactionDetail.scss";

const TransactionDetail = () => {
  return (
    <aside className="transaction-detail ">
      <div className="transaction-detail-close">
        <img src={closeImg} alt="close" />
      </div>
      <TransactionInfo />
    </aside>
  );
};

export default TransactionDetail;
