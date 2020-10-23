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
        {data.languages && (
          <div className="languages">
            {data.languages.map((language) => (
              <span className="language" key={language.code}>
                {language.language} - {language.fluency.replace(/-/g, " ")}
              </span>
            ))}
          </div>
        )}
        <div className="skills">
          {data.strengths.map((strength) => (
            <span className="skill " key={strength.id}>
              {strength.name}
            </span>
          ))}
        </div>
        <div className="stats">
          <h1>Stats</h1>
          <div className="stats-details">
            <span> Education: {data.stats.education || 0}</span>
            <span>Jobs: {data.stats.jobs || 0}</span>
            <span>Skills: {data.stats.strengths || 0}</span>
            <span>Interests: {data.stats.interests || 0}</span>
            <span>Opportunities: {data.opportunities.length || 0}</span>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ProfileCard;
