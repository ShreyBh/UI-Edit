import Link from "next/link";
import LoginAs from "./index";
import { useRouter } from "next/router";

function LoginForm() {
  const router = useRouter();
  const { loginAs } = router.query;
  let title;
  let goTo;
  let registered;
  console.log(loginAs);
  if (loginAs === "brand") {
    title = "Login as Brand";
    goTo = `/brand-signup`;
    registered = "Brand";
  } else {
    title = "Login as Manufacturer";
    goTo = `/manufacturer-signup`;
    registered = "Manufacturer";
  }

  return (
    <LoginAs>
      <div className="">
        <h2 className="login__header .section__title">{title}</h2>
        <form className="login__form">
          <label>Email Address</label>
          <input type="email" />
          <label>Password</label>
          <input type="password" />
          <button className="btn">Log In &rarr;</button>
        </form>
        <span>Not registered as a {registered}?</span>
        <Link href="/[loginAs]" as={goTo}>
          <button className="btn-reg">Register</button>
        </Link>
      </div>
    </LoginAs>
  );
}

export default LoginForm;
