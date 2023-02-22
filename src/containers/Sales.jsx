import { useWeb3React } from "@web3-react/core";
import React from "react";
import Sale from "@components/Sale";
import Spinner from "@components/Spinner";
import { useData } from "@hooks/useData";
import "@styles/Sales.scss";

const Sales = () => {
  const { active } = useWeb3React();
  const { sales, loading } = useData();

  // If user not logged in, request access. TODO.
  if (!active) return "Please login...";

  return (
    <>
      {/* If loading variable return spinner */}
      {loading ? (
        <Spinner />
      ) : (
        // If not, return sales
        <div className="market-content">
          {sales.map((sale) =>
            // If sale is available, show it
            !sale.isSold ? (
              <Sale
                key={sale.id}
                id={sale.id}
                price={sale.price}
                amount={sale.amount}
                wallet={sale.wallet}
              />
            ) : (
              ""
            )
          )}
        </div>
      )}
    </>
  );
};

export default Sales;
