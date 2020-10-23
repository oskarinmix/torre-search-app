import React from "react";
import Axios from "axios";
import Layout from "../../components/Layout";
const defaultImg = "/img/default.jpg";
const Profile = ({ data }) => {
  React.useEffect(() => {
    console.log("data", data);
  }, []);
  return (
    <Layout>
      <img
        src={
          data.person.pictureThumbnail
            ? data.person.pictureThumbnail
            : defaultImg
        }
        alt="profile"
      />
      <h1>Perfil de {data.person.name}</h1>
    </Layout>
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
