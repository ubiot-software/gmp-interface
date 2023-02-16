import { useWeb3React } from "@web3-react/core";
import React from "react";
import Sale from "@components/Sale";
import Spinner from "@components/Spinner";
import { useData } from "@hooks/useData";
import "@styles/Sales.scss";

const Sales = () => {
  const { active } = useWeb3React();
  const { sales, loading } = useData();

  if (!active) return "Please login...";

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <div className="market-content">
          {sales.map((sale) => (
            <Sale
              key={sale.id}
              id={sale.id}
              price={sale.price}
              amount={sale.amount}
              wallet={sale.wallet}
              isSold={sale.isSold}
            />
          ))}
        </div>
      )}
    </>
  );
};

export default Sales;
