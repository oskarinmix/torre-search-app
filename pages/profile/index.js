import React from "react";
import Layout from "./../../components/Layout";
import "../../styles/profile.scss";
import { useRouter } from "next/router";
const Index = () => {
  const [username, setUsername] = React.useState("");
  const router = useRouter();
  const handleSubmit = (e) => {
    e.preventDefault();
    router.push(`/profile/${username}`);
  };
  return (
    <Layout>
      <div className="profile">
        <h1>Please, write a name to get the full detailed profile</h1>
        <form onSubmit={handleSubmit}>
          <input
            placeholder="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <button type="submit"> go to {username}</button>
        </form>
      </div>
    </Layout>
  );
};

export default Index;
