import React from "react";
import Axios from "axios";

const Profile = ({ data }) => {
  React.useEffect(() => {
    console.log("data", data);
  }, []);
  return (
    <React.Fragment>
      <img src={data.person.pictureThumbnail} alt="profile" />
      <h1>Perfil de {data.person.name}</h1>
    </React.Fragment>
  );
};

Profile.getInitialProps = async (props) => {
  const username = props.query.id;
  const res = await Axios(`http://localhost:3000/api/profile/${username}`);
  return {
    data: res.data,
  };
};

export default Profile;
