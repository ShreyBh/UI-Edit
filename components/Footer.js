
function Footer() {
  return (
    <footer className = "pt-8 pb-8 left-0 right-0 bottom-0 w-full bg-gray-800 text-center">
      <ul className = "list-none flex justify-center mb-4"> 
        <li className = "mr-16">
          <a className = "text-2xl text-gray-200 no-underline">
            About
          </a>
        </li>
        <li className =  "mr16">-
          <a className = "text-2xl text-gray-200 no-underline">
            Pricing
          </a>
        </li>
        <li className = "mr-16">
          <a className = "text-2xl text-gray-200 no-underline">
            Terms of Use
          </a>
        </li>
        <li className = "mr-16">
          <a className = "text-2xl text-gray-200 no-underline">
            Privacy Policy
          </a>
        </li>
        <li className = "mr-16">
          <a className = "text-2xl text-gray-200 no-underline">
            Contact Us
          </a>
        </li>
      </ul>
      {/* <img
        src="../static/images/SourceqQwik_Logo_G.png"
        alt="Logo"
        class={styles.footer__logo}
      /> */}
      <p class = "mb-0 text-2xl text-gray-500 text-center">
        SourceQwik © 2021. All rights reserved 
      </p>
    </footer>
  );
}

export default Footer;
