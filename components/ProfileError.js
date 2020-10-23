import React from "react";
import "../styles/profile-card.scss";
import Link from "next/link";
const img = "/img/profile-error.png";
const people = "/img/people.svg";
const ProfileError = ({ data }) => {
  return (
    <React.Fragment>
      <div className="profile-card">
        <img src={img} alt="error" />
        <h1>User's Profile doesn't exist.</h1>
        <h2>Please, check the username</h2>
        <Link href="/search/people">
          <a>
            <img src={people} alt="people" /> <h3>Return to Search</h3>
          </a>
        </Link>
      </div>
    </React.Fragment>
  );
};

export default ProfileError;
