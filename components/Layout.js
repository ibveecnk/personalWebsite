import Header from "../components/Header";
import NextHead from "next/head";
import dynamic from "next/dynamic";
import Background from "../components/Background";
import styles from "../styles/Layout.module.scss";

function Layout(props) {
  return (
    <div>
      <NextHead>
        <title>{`ibveecnk ${props.title ? "- " + props.title : ""}`}</title>
      </NextHead>
      <Header />
      <main className={styles.content}>
        <div className={styles.propcontent}>{props.content}</div>
        {<Background />}
      </main>
    </div>
  );
}

export default Layout;
