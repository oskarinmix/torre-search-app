import React from "react";
import Axios from "axios";
import Layout from "../../components/Layout";
const Profile = ({ data }) => {
  React.useEffect(() => {
    console.log("data", data);
  }, []);
  return (
    <Layout>
      <img src={data.organizations[0].picture} alt="profile" />
      <h1>{data.objective}</h1>
      <h2>{data.agreement.type.replace(/-/g, " ").toUpperCase()}</h2>
      <h2>
        {(
          data.commitment.code.replace(/-/g, " ") +
          " " +
          "Employment"
        ).toUpperCase()}
      </h2>
      <h2>{data.organizations[0].name}</h2>
    </Layout>
  );
};

Profile.getInitialProps = async (props) => {
  const id = props.query.id;
  const resp = await Axios(`http://localhost:3000/api/opportunities/${id}`);
  console.log(resp.data);
  return {
    data: resp.data,
  };
};

export default Profile;
