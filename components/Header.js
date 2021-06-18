import styles from "../styles/Header.module.css";
function Header() {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <img
          src="/static/images/SourceqQwik_Logo_G.png"
          alt="SourceQwik logo"
          className={styles.nav__logo}
          id="logo"
          data-version-number="3.0"
        />
        <ul className={styles.nav__links}>
          <li className={styles.nav__item}>
            <a className={styles.nav__link} href="#section--1">
              Home
            </a>
          </li>
          <li className={styles.nav__item}>
            <a className={styles.nav__link} href="#">
              For Brands
            </a>
          </li>
          <li className={styles.nav__item}>
            <a className={styles.nav__link} href="#">
              For Manufacturers
            </a>
          </li>
          <li className={styles.nav__item}>
            <a className={styles.nav__link} href="#">
              Contact Us
            </a>
          </li>
          <li className={styles.nav__item}>
            <a
              className={`${styles.nav__link}${styles.login_box}${styles.nav__link__btn}`}
              href="#"
            >
              Log In
            </a>
          </li>
          <li className={styles.nav__item}>
            <a
              className={`${styles.nav__link} ${styles.nav__link__btn}`}
              href="#"
            >
              #Fight Covid
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
