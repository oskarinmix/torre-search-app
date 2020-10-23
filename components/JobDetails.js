import React from "react";
import "../styles/profile-card.scss";
import abbreviateNumber from "../helpers/Number";
const JobDetails = ({ data }) => {
  const printSalary = () => {
    if (data.compensation) {
      const { minAmount, maxAmount, currency, periodicity } = data.compensation;
      return `${abbreviateNumber(minAmount)} - ${abbreviateNumber(
        maxAmount
      )} ${currency} / ${periodicity.replace("ly", "")}`;
    }
  };
  return (
    <React.Fragment>
      <div className="profile-card">
        <img src={data.organizations[0].picture} alt="profile" />
        <h1>{data.objective}</h1>
        <h2>{data.agreement.type.replace(/-/g, " ").toUpperCase()}</h2>
        <h2>
          {(
            data.commitment.code.replace(/-/g, " ") +
            " " +
            "Employment"
          ).toUpperCase()}
        </h2>
        <h2>{data.organizations[0].name}</h2>
        <h1> {printSalary()}</h1>
        <div className="skills">
          {data.strengths.map((strength) => (
            <span className="skill " key={strength.id}>
              {strength.name}
            </span>
          ))}
        </div>
      </div>
    </React.Fragment>
  );
};

export default JobDetails;
