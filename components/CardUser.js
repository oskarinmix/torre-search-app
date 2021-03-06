import React from "react";
import "../styles/card-user.scss";
const defaultImg = "/img/default.jpg";
const CardUser = ({ img, name, username, skills }) => {
  return (
    <React.Fragment>
      <div className="card-user">
        <img src={img ? img : defaultImg} alt="profile" />
        <h1>{name}</h1>
        <span> {username}</span>
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
