import Header from "../components/Header";
import Title from "../components/Title";
import Layout from "../components/Layout";

const content = (
  <div>
    <div>
      <Title text="ibveecnk's page"></Title>
      <p>Welcome to my website, which is currently under construction.</p>
      <p>It is constructed using next.js.</p>
    </div>
  </div>
);

export default function Home() {
  return <Layout content={content} />;
}
