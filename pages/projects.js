import "../styles/Index.module.css";
import Header from "../components/header";
import Title from "../components/title";

import { Octokit } from "@octokit/rest";
const octokit = new Octokit();

// This function gets called at build time on server-side.
// It may be called again, on a serverless function, if
// revalidation is enabled and a new request comes in
export async function getStaticProps() {
  const res = await await octokit.users.getByUsername({ username: "ibveecnk" });
  return {
    props: {
      gitHubData: res,
    },
    revalidate: 10,
  };
}

export default function Home({ gitHubData }) {
  return (
    <div className="Wrapper">
      <Header page="projects"></Header>
      <div className="cWrapper">
        <Title text="Projects"></Title>
        <p>Here you can find my current projects.</p>
        <p>{"Fetched at " + gitHubData.headers.date}</p>
      </div>
    </div>
  );
}
