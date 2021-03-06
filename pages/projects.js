import "../styles/Index.module.css";
import Header from "../components/header";
import Title from "../components/title";

import { Octokit } from "@octokit/rest";
import useSWR from "swr";
const octokit = new Octokit();

function gitHubData() {
  const { data, error } = useSWR("https://api.github.com/users/ibveecnk");
  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;
  return (
    <div>
      <img width="100px" height="100px" src={data.avatar_url}></img>
      <p>
        <code>{JSON.stringify(data)}</code>
      </p>
    </div>
  );
}

export default function Home() {
  return (
    <div className="Wrapper">
      <Header page="projects"></Header>
      <div className="cWrapper">
        <Title text="Projects"></Title>
        <p>Here you can find my current projects.</p>
        {gitHubData()}
      </div>
    </div>
  );
}
