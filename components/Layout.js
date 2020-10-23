import React from "react";
import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <Header />
      <div className="container">{children}</div>
    </React.Fragment>
  );
};

export default Layout;
