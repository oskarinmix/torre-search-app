import React from "react";
import "../styles/card-job.scss";
const defaultImg = "/img/default.jpg";
const CardUser = ({ img, title, company, skills }) => {
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
      </div>
    </React.Fragment>
  );
};

export default CardUser;
