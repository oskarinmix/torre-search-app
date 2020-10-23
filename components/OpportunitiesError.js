import React from "react";
import "../styles/profile-card.scss";
import Link from "next/link";
const img = "/img/profile-error.png";
const jobs = "/img/jobs.svg";
const OpportunitiesError = () => {
  return (
    <React.Fragment>
      <div className="profile-card">
        <img src={img} alt="error" />
        <h1>Job doesn't exist.</h1>
        <h2>Please, check the Job id</h2>
        <Link href="/search/jobs">
          <a>
            <img src={jobs} alt="people" /> <h3>Return to Job Search</h3>
          </a>
        </Link>
      </div>
    </React.Fragment>
  );
};

export default OpportunitiesError;
