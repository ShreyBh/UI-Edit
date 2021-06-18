import styles from "../styles/Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <ul className={styles.footer__nav}>
        <li className={styles.footer__item}>
          <a className={styles.footer__link} href="#">
            About
          </a>
        </li>
        <li className={styles.footer__item}>
          <a className={styles.footer__link} href="#">
            Pricing
          </a>
        </li>
        <li className={styles.footer__item}>
          <a className={styles.footer__link} href="#">
            Terms of Use
          </a>
        </li>
        <li className={styles.footer__item}>
          <a className={styles.footer__link} href="#">
            Privacy Policy
          </a>
        </li>
        <li className={styles.footer__item}>
          <a className={styles.footer__link} href="#">
            Contact Us
          </a>
        </li>
      </ul>
      {/* <img
        src="../static/images/SourceqQwik_Logo_G.png"
        alt="Logo"
        class={styles.footer__logo}
      /> */}
      <p class={styles.footer__copyright}>
        SourceQwik © 2021. All rights reserved
      </p>
    </footer>
  );
}

export default Footer;
