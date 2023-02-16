import React from "react";
import Header from "@components/Header";
import Footer from "@components/Footer";
import "@styles/Layout.scss";

const Layout = ({ children }) => {
  return (
    <div className="Layout">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
