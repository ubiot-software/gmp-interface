import React, { useState } from "react";
import { useWeb3React } from "@web3-react/core";
import useGmp from "@hooks/useGmp";
import useTruncatedAddress from "@hooks/useTruncateAddress";
import { useNotification } from "react-hook-notification";
import { useSale } from "@hooks/useData";
import Spinner from "@components/Spinner";
import "@styles/SaleInfo.scss";

const SaleInfo = (saleId) => {
  const { account } = useWeb3React();
  const [isBuying, setIsBuying] = useState(false);
  const gmp = useGmp();
  const notification = useNotification();
  const { loading, sale } = useSale(saleId.saleId);

  const Buy = () => {
    setIsBuying(true);

    gmp.methods
      .buy(saleId.saleId)
      .send({ from: account, value: sale.price })
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
        setIsBuying(false);
        console.log("Success");
        notification.success({
          title: "Transaction success",
          text: "Succesfully buyed!",
          position: "bottom-center",
          showProgressBar: false,
        });
        setTimeout(() => {
          location.reload();
        }, 2000);
      })
      .on("error", (error) => {
        setIsBuying(false);
        console.log(error);
        notification.error({
          title: "Error",
          text: "Something was wrong!",
          position: "bottom-center",
          showProgressBar: false,
        });
      });
  };

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <>
          {isBuying ? (
            <>
              <h1 className="buying">Buy</h1>
              <Spinner />
            </>
          ) : (
            <div className="transaction-info">
              <p>
                <span>GMP {sale.amount / (1 * 10 ** 18)} </span>
              </p>
              <p>ETH {sale.price / (1 * 10 ** 18)}</p>
              <p>From {useTruncatedAddress(String(sale.wallet))}</p>
              <button className="primary-button buy-button" onClick={Buy}>
                Buy
              </button>
            </div>
          )}
        </>
      )}
    </>
  );
};

export default SaleInfo;
