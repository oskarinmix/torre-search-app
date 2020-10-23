import React from "react";
import "../styles/header.scss";
import Link from "next/link";

const Header = () => {
  return (
    <header>
      <Link href="/">
        <a>
          <h1>torre</h1>
        </a>
      </Link>
    </header>
  );
};

export default Header;
