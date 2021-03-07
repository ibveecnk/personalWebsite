import Header from "../components/header";
import Title from "../components/title";

export default function Home() {
  return (
    <div className="Wrapper">
      <Header page="index"></Header>
      <div className="cWrapper">
        <Title text="ibveecnk's page"></Title>
        <p>Welcome to my website, which is currently under construction.</p>
        <p>It is constructed using next.js.</p>
      </div>
    </div>
  );
}
