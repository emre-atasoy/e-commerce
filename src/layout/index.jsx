
import React from "react";
import HeaderNav from "./HeaderNav";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <HeaderNav />
      <main className="flex-grow">{children}</main>
      <Footer/>
    </div>
  );
};

export default Layout;
