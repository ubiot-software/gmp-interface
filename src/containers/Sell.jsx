import { useWeb3React } from "@web3-react/core";
import React, { useContext, useState } from "react";
import AppContext from "@context/AppContext.js";
import useGmp from "@hooks/useGmp";
import Spinner from "@components/Spinner";
import closeImg from "@assets/close.png";
import { useNotification } from "react-hook-notification";
import "@styles/Sell.scss";

const Sell = () => {
  const { account } = useWeb3React();
  const [isRegistering, setIsRegistering] = useState(false);
  const gmp = useGmp();
  const notification = useNotification();
  const registerSale = () => {
    setIsRegistering(true);

    const amount = document.getElementById("amount").value;
    const price = document.getElementById("price").value;

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
    <aside className="Sell ">
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
            <input id="amount" type="number" />
            <label htmlFor="price">Price</label>
            <input id="price" type="number" />
            <button
              className="primary-button sell-button"
              onClick={registerSale}
            >
              Register sell
            </button>
          </>
        )}
      </div>
    </aside>
  );
};

export default Sell;
