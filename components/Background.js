import Link from "next/link";
import styles from "../styles/Background.module.scss";

export default function Background(props) {
  return (
    <>
      <video
        src="/background.mp4"
        autoPlay="true"
        controls="false"
        loop="true"
        className={styles.video}
      />
    </>
  );
}
