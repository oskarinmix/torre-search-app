import React from "react";
import Axios from "axios";
import Layout from "../../components/Layout";
import ProfileCard from "../../components/ProfileCard";
import ProfileError from "./../../components/ProfileError";
const defaultImg = "/img/default.jpg";
const Profile = ({ data, error }) => {
  React.useEffect(() => {
    console.log("data", data);
  }, []);

  if (error) {
    return (
      <Layout>
        <ProfileError />
      </Layout>
    );
  }
  return (
    <Layout>
      <ProfileCard data={data} />
    </Layout>
  );
};

Profile.getInitialProps = async (props) => {
  const username = props.query.id;
  try {
    const res = await Axios(`https://torre-search-app.netlify.app/api/profile/${username}`);
    return {
      data: res.data,
      error: false,
    };
  } catch (e) {
    return {
      data: e,
      error: true,
    };
  }
};

export default Profile;
