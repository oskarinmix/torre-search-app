import React from "react";
import "../styles/card-user.scss";
const defaultImg = "/img/default.jpg";
const CardUser = ({ img, name, username }) => {
  return (
    <React.Fragment>
      <div className="card-user">
        <img src={img ? img : defaultImg} alt="profile" />
        <h1>{name}</h1>
        <span> {username}</span>
      </div>
    </React.Fragment>
  );
};

export default CardUser;
