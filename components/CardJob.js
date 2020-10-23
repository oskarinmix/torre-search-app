import React from "react";
import "../styles/card-job.scss";
import abbreviateNumber from "../helpers/Number";
const defaultImg = "/img/default.jpg";

const CardUser = ({ img, title, company, skills, compensation }) => {
  const printSalary = () => {
    if (compensation) {
      const { minAmount, maxAmount, currency, periodicity } = compensation;
      return `${abbreviateNumber(minAmount)} - ${abbreviateNumber(
        maxAmount
      )} ${currency} / ${periodicity.replace("ly", "")}`;
    }
  };

  return (
    <React.Fragment>
      <div className="card-job">
        <img src={img ? img : defaultImg} alt="profile" />
        <h1>{title}</h1>
        <span> {company}</span>
        {skills.map((skill) => (
          <span className="skill" key={skill.id}>
            {skill.name}
          </span>
        ))}
        <span className="compensation">{printSalary()}</span>
      </div>
    </React.Fragment>
  );
};

export default CardUser;
