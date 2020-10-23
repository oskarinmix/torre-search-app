import React from "react";
import Layout from "./../../components/Layout";
import "../../styles/profile.scss";
import { useRouter } from "next/router";
import { Link } from "next/link";
const Index = () => {
  const [id, setId] = React.useState("");
  const router = useRouter();
  const handleSubmit = (e) => {
    e.preventDefault();
    router.push(`/opportunities/${id}`);
  };

  return (
    <Layout>
      <div className="profile">
        <h1>Please, write the id of the job to gel full details.</h1>
        <form onSubmit={handleSubmit}>
          <input
            placeholder="Job ID"
            value={id}
            onChange={(e) => setId(e.target.value)}
          />
          <button type="submit">go!! </button>
        </form>
        <h2>
          If you don't know the job id , you can go to our
          <a href="/search/jobs"> Job Finder</a>
        </h2>
      </div>
    </Layout>
  );
};

export default Index;
