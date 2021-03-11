import Link from "next/link";
import styles from "../styles/Header.module.scss";

export default function Header(props) {
  return (
    <div className={styles.navContainer}>
      <Link href="/">
        <a className={styles.A}>
          <img
            className={styles.logo}
            src="/icon.png"
            width="40px"
            height="40px"
            alt="ibveecnk"
          />
        </a>
      </Link>

      <nav>
        <ul className={styles.navUl}>
          <li className={styles.navLi}>
            <Link href="/projects">
              <a className={styles.navA && styles.A}>Projects</a>
            </Link>
          </li>
          <li className={styles.navLi}>
            <Link href="/blog">
              <a className={styles.navA && styles.A}>Blog</a>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
