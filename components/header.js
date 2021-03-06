import Link from "next/link";

function Header({ page }) {
  return (
    <header id="header">
      <div className="center">
        <nav id="mainNav">
          <ul className="navContainer">
            <li className="mainLi">
              <Link href="/">
                <a className="mainName">
                  <b>ibveecnk</b>
                </a>
              </Link>
            </li>
            <li className={page == "about" ? "active" : ""}>
              <Link href="/about">
                <a>about</a>
              </Link>
            </li>
            <li className={page == "contact" ? "active" : ""}>
              <Link href="/contact">
                <a>contact</a>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
