import Header from "../components/header";
import Title from "../components/title";
import styles from "../styles/Projects.module.scss";

import useSWR from "swr";
import Link from "next/link";

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
    <div>
      <div className={styles.info}>Total repos: {data.length}</div>
      <ul className={styles.container}>
        {data.map((data, index) => (
          <li key={index} className={styles.item}>
            <div className={styles.projectWrapper}>
              <Link href={data.html_url}>
                <div className={styles.projectName}>
                  <b>{data.name}</b>
                </div>
              </Link>
              {data.description ? (
                <div>{data.description}</div>
              ) : (
                "No description was provided"
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
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
