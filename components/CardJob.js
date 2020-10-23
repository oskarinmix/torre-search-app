import React from "react";
import "../styles/card-job.scss";
const defaultImg = "/img/default.jpg";

const CardUser = ({ img, title, company, skills, compensation }) => {
  const printSalary = () => {
    var SI_SYMBOL = ["", "k", "M", "G", "T", "P", "E"];

    function abbreviateNumber(number) {
      var tier = (Math.log10(number) / 3) | 0;

      if (tier == 0) return number;

      var suffix = SI_SYMBOL[tier];
      var scale = Math.pow(10, tier * 3);

      var scaled = number / scale;

      return scaled.toFixed(1) + suffix;
    }

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
