function Footer() {
  return (
    <footer className="footer">
      <ul className="footer__nav">
        <li className="footer__item">
          <a className="footer__link" href="#">
            About
          </a>
        </li>
        <li className="footer__item">
          <a className="footer__link" href="#">
            Pricing
          </a>
        </li>
        <li className="footer__item">
          <a className="footer__link" href="#">
            Terms of Use
          </a>
        </li>
        <li className="footer__item">
          <a className="footer__link" href="#">
            Privacy Policy
          </a>
        </li>
        <li className="footer__item">
          <a className="footer__link" href="#">
            Contact Us
          </a>
        </li>
      </ul>
      <img src="img/SourceqQwik_Logo_G.png" alt="Logo" class="footer__logo" />
      <p class="footer__copyright">SourceQwik © 2021. All rights reserved</p>
    </footer>
  );
}

export default Footer;
