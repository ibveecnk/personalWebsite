import Header from "../components/Header";
import NextHead from "next/head";

export default function Layout(props) {
  return (
    <div>
      <NextHead>
        <title>{`ibveecnk ${props.title ? "- " + props.title : ""}`}</title>
      </NextHead>

      <Header />
      <main>{props.content}</main>
    </div>
  );
}
