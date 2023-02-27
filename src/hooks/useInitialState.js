import { useState } from "react";

const useInitialState = () => {
  const [saleId, setSaleId] = useState(null);

  const [saleInfo, setToggleSaleInfo] = useState(false);
  const toggleSaleInfo = () => {
    setToggleSaleInfo(!saleInfo);
  };

  const [sellInfo, setToggleSellInfo] = useState(false);
  const toggleSellInfo = () => {
    setToggleSellInfo(!sellInfo);
  };

  const [menu, setToggleMenu] = useState(false);
  const toggleMenu = () => {
    setToggleMenu(!menu);
  };

  const [mobileMenu, setToggleMobileMenu] = useState(false);
  const toggleMobileMenu = () => {
    setToggleMobileMenu(!mobileMenu);
  };

  return {
    saleId,
    setSaleId,
    saleInfo,
    toggleSaleInfo,
    sellInfo,
    toggleSellInfo,
    menu,
    toggleMenu,
    mobileMenu,
    toggleMobileMenu,
  };
};

export default useInitialState;
