import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "@containers/Layout";
import Home from "@pages/Home";
import NotFound from "@pages/NotFound";
import Dashboard from "@pages/Dashboard";
import Marketplace from "@pages/Marketplace";
import Account from "@pages/Account";
import AppContext from "@context/AppContext";
import useInitialState from "@hooks/useInitialState";
import { Web3ReactProvider } from "@web3-react/core";
import { getLibrary } from "@config/web3";
import "@styles/global.css";

const App = () => {
  const initialState = useInitialState();

  return (
    <AppContext.Provider value={initialState}>
      <BrowserRouter>
        <Web3ReactProvider getLibrary={getLibrary}>
          <Layout>
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/dashboard" element={<Dashboard />} />
              <Route exact path="/marketplace" element={<Marketplace />} />
              <Route exact path="/account" element={<Account />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Layout>
        </Web3ReactProvider>
      </BrowserRouter>
    </AppContext.Provider>
  );
};

export default App;
