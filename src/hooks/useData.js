import { useCallback, useEffect, useState } from "react";
import useGmp from "@hooks/useGmp";

const getSalesData = async ({ gmp, saleId }) => {
  const [result] = await Promise.all([gmp.methods.sales(saleId).call()]);

  const id = saleId;
  const amount = result[0];
  const price = result[1];
  const wallet = result[2];
  const isSold = result[3];

  return { id, amount, price, wallet, isSold };
};

const useData = () => {
  const [sales, setSales] = useState([]);
  const [loading, setLoading] = useState(true);
  const gmp = useGmp();

  const update = useCallback(async () => {
    if (gmp) {
      setLoading(true);

      let salesId;

      const salesCount = await gmp.methods.salesCount().call();
      salesId = new Array(Number(salesCount)).fill().map((_, index) => index);

      const salesPromise = salesId.map((saleId) =>
        getSalesData({ gmp, saleId })
      );

      const sales = await Promise.all(salesPromise);

      setSales(sales);
      setLoading(false);
    }
  }, [gmp]);

  useEffect(() => {
    update();
  }, [update]);

  return {
    loading,
    sales,
    update,
  };
};

export { useData };
