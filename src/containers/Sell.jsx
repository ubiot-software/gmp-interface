import React, { useContext, useState, useRef } from "react";
import { useWeb3React } from "@web3-react/core";
import AppContext from "@context/AppContext.js";
import useGmp from "@hooks/useGmp";
import Spinner from "@components/Spinner";
import closeImg from "@assets/close.png";
import { useNotification } from "react-hook-notification";
import "@styles/Sell.scss";

const Sell = () => {
  const { account } = useWeb3React();
  const [isRegistering, setIsRegistering] = useState(false);
  const [amount, setAmount] = useState(false);
  const [price, setPrice] = useState(false);
  const gmp = useGmp();
  const notification = useNotification();

  const registerSale = () => {
    setIsRegistering(true);

    gmp.methods
      .registerSale(
        BigInt(amount * (1 * 10 ** 18)),
        BigInt(price * (1 * 10 ** 18))
      )
      .send({ from: account })
      .on("transactionHash", (txHash) => {
        console.log(txHash);
        notification.info({
          title: "Transaction sent",
          text: txHash,
          position: "bottom-center",
          showProgressBar: false,
          delay: 8000,
          closeOnClick: false,
        });
      })
      .on("receipt", () => {
        setIsRegistering(false);
        console.log("Success");
        notification.success({
          title: "Transaction sent",
          text: "Succesfully registered!",
          position: "bottom-center",
          showProgressBar: false,
        });
        setTimeout(() => {
          location.reload();
        }, 2000);
      })
      .on("error", (error) => {
        setIsRegistering(false);
        console.log(error);
        notification.error({
          title: "Error",
          text: "Something was wrong!",
          position: "bottom-center",
          showProgressBar: false,
        });
      });
  };

  const { toggleSellInfo } = useContext(AppContext);
  const handleClick = () => {
    toggleSellInfo();
  };

  return (
    <aside className="Sell">
      <div className="Sell-close">
        <img src={closeImg} alt="close" onClick={handleClick} />
      </div>
      <div className="Sell-info">
        <h1>Register Sale</h1>
        {isRegistering ? (
          <Spinner />
        ) : (
          <>
            <label htmlFor="amount">Amount</label>
            <input
              id="amount"
              type="number"
              onChange={(e) => setAmount(e.target.value)}
            />
            <label htmlFor="price">Price</label>
            <input
              id="price"
              type="number"
              onChange={(e) => setPrice(e.target.value)}
            />
            <button
              disabled={!amount && !price}
              className="primary-button sell-button"
              onClick={registerSale}
            >
              Register sale
            </button>
          </>
        )}
      </div>
    </aside>
  );
};

export default Sell;
