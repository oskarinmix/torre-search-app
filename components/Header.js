import React from "react";
import "../styles/header.scss";
import Link from "next/link";
const people = "/img/people.svg";
const jobs = "/img/jobs.svg";
const Header = () => {
  return (
    <header>
      <Link href="/">
        <a>
          <h1>torre</h1>
        </a>
      </Link>
      <div className="icons">
        <Link href="/search/jobs">
          <a>
            <img src={jobs} alt="people" />
            <h1>Search Jobs</h1>
          </a>
        </Link>
        <Link href="/search/people">
          <a>
            <img src={people} alt="people" />
            <h1>Search People</h1>
          </a>
        </Link>
      </div>
    </header>
  );
};

export default Header;
