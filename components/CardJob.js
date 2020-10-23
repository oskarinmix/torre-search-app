import React from "react";
import "../styles/card-job.scss";
const defaultImg = "/img/default.jpg";

const CardUser = ({ img, title, company, skills, compensation }) => {
  const printSalary = () => {
    const Round = (amount) => {
      const m = amount.toString();
      return m
        .replace("000000", "M")
        .replace("500000", ".5M")
        .replace("50000", "50K")
        .replace("00000", "00K")
        .replace("0000", "0K")
        .replace("000", "K");
    };

    if (compensation) {
      const { minAmount, maxAmount, currency, periodicity } = compensation;
      return `${Round(minAmount)} - ${Round(
        maxAmount
      )} ${currency}/${periodicity}`;
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
