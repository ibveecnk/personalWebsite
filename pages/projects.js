import Title from "../components/Title";
import styles from "../styles/Projects.module.scss";
import Layout from "../components/Layout";

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
                <span className={styles.projectName}>
                  <b>{data.name}</b>
                </span>
              </Link>
              {data.description ? (
                <span className={styles.description}>
                  {" " + data.description}
                </span>
              ) : (
                <span className={styles.description}>
                  {" No description was provided!"}
                </span>
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
    <div>
      <Layout content={null} title="projects" />
      <Title text="Projects"></Title>
      <p>
        Here you can find a list of my projects which I open-sourced on github -
        some are great and some are even better.
      </p>
      {gitHubData()}
    </div>
  );
}
