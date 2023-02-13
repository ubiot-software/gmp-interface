import React, { useContext } from "react";
import AppContext from "@context/AppContext.js";
import "@styles/Transactions.scss";
import addTransactionImg from "@assets/add.png";

const Transactions = () => {
  const { toggleTransactionInfo } = useContext(AppContext);
  const handleClick = () => {
    toggleTransactionInfo();
  };

  return (
    <div className="market-content">
      <div className="market-card" onClick={() => handleClick()}>
        <div className="market-info">
          <div>
            <p>$34,00</p>
            <p>10 ML</p>
            <p className="market-date">08/02/2023</p>
          </div>
          <figure>
            <img src={addTransactionImg} alt="" />
          </figure>
        </div>
      </div>
      <div className="market-card">
        <div className="market-info">
          <div>
            <p>$34,00</p>
            <p>10 ML</p>
            <p className="market-date">08/02/2023</p>
          </div>
          <figure>
            <img src={addTransactionImg} alt="" />
          </figure>
        </div>
      </div>
      <div className="market-card">
        <div className="market-info">
          <div>
            <p>$34,00</p>
            <p>10 ML</p>
            <p className="market-date">08/02/2023</p>
          </div>
          <figure>
            <img src={addTransactionImg} alt="" />
          </figure>
        </div>
      </div>
      <div className="market-card">
        <div className="market-info">
          <div>
            <p>$34,00</p>
            <p>10 ML</p>
            <p className="market-date">08/02/2023</p>
          </div>
          <figure>
            <img src={addTransactionImg} alt="" />
          </figure>
        </div>
      </div>
      <div className="market-card">
        <div className="market-info">
          <div>
            <p>$34,00</p>
            <p>10 ML</p>
            <p className="market-date">08/02/2023</p>
          </div>
          <figure>
            <img src={addTransactionImg} alt="" />
          </figure>
        </div>
      </div>
      <div className="market-card">
        <div className="market-info">
          <div>
            <p>$34,00</p>
            <p>10 ML</p>
            <p className="market-date">08/02/2023</p>
          </div>
          <figure>
            <img src={addTransactionImg} alt="" />
          </figure>
        </div>
      </div>
      <div className="market-card">
        <div className="market-info">
          <div>
            <p>$34,00</p>
            <p>10 ML</p>
            <p className="market-date">08/02/2023</p>
          </div>
          <figure>
            <img src={addTransactionImg} alt="" />
          </figure>
        </div>
      </div>
      <div className="market-card">
        <div className="market-info">
          <div>
            <p>$34,00</p>
            <p>10 ML</p>
            <p className="market-date">08/02/2023</p>
          </div>
          <figure>
            <img src={addTransactionImg} alt="" />
          </figure>
        </div>
      </div>
      <div className="market-card">
        <div className="market-info">
          <div>
            <p>$34,00</p>
            <p>10 ML</p>
            <p className="market-date">08/02/2023</p>
          </div>
          <figure>
            <img src={addTransactionImg} alt="" />
          </figure>
        </div>
      </div>
      <div className="market-card">
        <div className="market-info">
          <div>
            <p>$34,00</p>
            <p>10 ML</p>
            <p className="market-date">08/02/2023</p>
          </div>
          <figure>
            <img src={addTransactionImg} alt="" />
          </figure>
        </div>
      </div>
      <div className="market-card">
        <div className="market-info">
          <div>
            <p>$34,00</p>
            <p>10 ML</p>
            <p className="market-date">08/02/2023</p>
          </div>
          <figure>
            <img src={addTransactionImg} alt="" />
          </figure>
        </div>
      </div>
      <div className="market-card">
        <div className="market-info">
          <div>
            <p>$34,00</p>
            <p>10 ML</p>
            <p className="market-date">08/02/2023</p>
          </div>
          <figure>
            <img src={addTransactionImg} alt="" />
          </figure>
        </div>
      </div>
    </div>
  );
};

export default Transactions;
