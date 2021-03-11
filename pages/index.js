import Header from "../components/Header";
import Title from "../components/Title";
import Layout from "../components/Layout";
import Link from "next/link";

const content = (
  <div>
    <div>
      <Title text="ibveecnk's page"></Title>
      <p>Hello, I am Iven.</p>
      <p>
        Welcome to my website, which is based on{" "}
        <Link href="https://nextjs.org">next.js</Link>.
      </p>
    </div>
  </div>
);

export default function Home() {
  return <Layout content={content} title="home" />;
}
