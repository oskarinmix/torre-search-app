import React from "react";
import "../styles/profile-card.scss";
const ProfileCard = ({ data }) => {
  return (
    <React.Fragment>
      <div className="profile-card">
        <img
          src={data.person.picture ? data.person.picture : defaultImg}
          alt="profile"
        />
        <h1>{data.person.name}</h1>
        <h2>{data.person.professionalHeadline}</h2>
        <h3>{data.person.location.name}</h3>
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

export default ProfileCard;
