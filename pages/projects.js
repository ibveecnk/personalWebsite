import Header from "../components/header";
import Title from "../components/title";
import "../styles/Projects.module.scss";

import { Octokit } from "@octokit/rest";
import useSWR from "swr";
import Link from "next/link";
const octokit = new Octokit();

// Todo: Add caching

function gitHubData() {
  const { data, error } = useSWR("https://api.github.com/users/ibveecnk/repos");
  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;
  if (
    data.documentation_url ==
    "https://docs.github.com/rest/overview/resources-in-the-rest-api#rate-limiting"
  )
    return (
      <div>You have been ratelimited by GitHub, please check back later.</div>
    );
  return (
    <ul className="flex-container">
      {data.map((data, index) => (
        <li key={index} className="flex-item">
          <Link href={data.html_url}>
            <a>{data.name}</a>
          </Link>
          {data.description ? <div>{data.description}</div> : ""}
        </li>
      ))}
    </ul>
  );
}

export default function Projects() {
  return (
    <div className="Wrapper">
      <Header page="projects"></Header>
      <div className="cWrapper">
        <Title text="Projects"></Title>
        {gitHubData()}
      </div>
    </div>
  );
}
