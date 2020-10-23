import React from "react";
import Axios from "axios";

const Profile = ({ data }) => {
  React.useEffect(() => {
    console.log("data", data);
  }, []);
  return (
    <React.Fragment>
      <img src={data.organizations[0].picture} alt="profile" />
      <h1>Perfil de {data.objective}</h1>
    </React.Fragment>
  );
};

Profile.getInitialProps = async (props) => {
  const id = props.query.id;
  const res = await Axios(`http://localhost:3000/api/opportunities/${id}`);
  return {
    data: res.data,
  };
};

export default Profile;
