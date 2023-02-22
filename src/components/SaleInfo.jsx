import React from "react";
import Spinner from "@components/Spinner";
import useTruncatedAddress from "@hooks/useTruncateAddress";
import { useSale } from "@hooks/useData";
import "@styles/SaleInfo.scss";

const SaleInfo = (saleId) => {
  const { loading, sale } = useSale(saleId.saleId);

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <div className="transaction-info">
          <p>
            <span>GMP {sale.amount / (1 * 10 ** 18)} </span>
          </p>
          <p>ETH {sale.price / (1 * 10 ** 18)}</p>
          <p>From {useTruncatedAddress(String(sale.wallet))}</p>
          <button className="primary-button buy-button">Buy</button>
        </div>
      )}
    </>
  );
};

export default SaleInfo;
