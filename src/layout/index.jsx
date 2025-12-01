
import React from "react";
import HeaderNav from "./HeaderNav";

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <HeaderNav />
      <main className="flex-grow">{children}</main>
    </div>
  );
};

export default Layout;
