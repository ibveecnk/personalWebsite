import Link from "next/link";

function Header({ page }) {
  return (
    <header id="header">
      <div className="center">
        <nav id="mainNav">
          <ul className="navContainer">
            <li>
              <Link href="/">
                <a className="mainName">
                  <b>
                    <i>ibveecnk</i>
                  </b>
                </a>
              </Link>
            </li>
            <li className={page == "projects" ? "active" : ""}>
              <Link href="/projects">
                <a>projects</a>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
