import Header from "../components/Header";

export default function Layout(props) {
  return (
    <div>
      <Header />
      <main>{props.content}</main>
    </div>
  );
}
