import React from "react";
import Axios from "axios";
import Layout from "../../components/Layout";
import OpportunitiesError from "./../../components/OpportunitiesError";

import JobDetails from "./../../components/JobDetails";
const Profile = ({ data, error }) => {
  React.useEffect(() => {
    console.log("data", data);
  }, []);

  if (error) {
    return (
      <Layout>
        <OpportunitiesError />
      </Layout>
    );
  }
  return (
    <Layout>
      <JobDetails data={data} />
    </Layout>
  );
};

Profile.getInitialProps = async (props) => {
  const id = props.query.id;
  try {
    const resp = await Axios(
      `${
        process.env.NEXT_PUBLIC_DOMAIN_SITE || "http://localhost:3000"
      }/api/opportunities/${id}`
    );
    return {
      data: resp.data,
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
