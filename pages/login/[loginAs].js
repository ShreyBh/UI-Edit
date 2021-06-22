import Link from "next/link";
import LoginAs from "./index";
import { useRouter } from "next/router";
import styles from "../../styles/Form.module.css";
import signIn from "../../components/Signin.js"

function LoginForm() {
  const router = useRouter();
  const { loginAs } = router.query;
  let title;
  let goTo;
  let registered;
  console.log(loginAs);
  if (loginAs === "brand") {
    title = "Login as a Brand";
    goTo = `/brand-signup`;
    registered = "Brand";
  } else {
    title = "Login as a Manufacturer";
    goTo = `/manufacturer-signup`;
    registered = "Manufacturer";
  }

  const loginUser = event => {
    event.preventDefault();
    let email = event.target.email.value;
    let password = event.target.password.value;
    signIn(email, password);
  }
  return (
    <LoginAs>
      <div className={styles.wrapper}>
        <h2 className={`${styles.form__header}`}>{title}</h2>
        <form onSubmit={loginUser}>
          <p className={styles.form__grp}>
            <label htmlFor="email">Email Address</label>
            <input type="email" name="email" />
          </p>
          <p className={styles.form__grp}>
            <label htmlFor="password">Password</label>
            <input type="password" name="password" />
          </p>
          <p className={styles.form__grp}>
            <button className={styles.btn} type="submit">Login</button>
          </p>
        </form>
        <p className={styles.form__grp}>Not registered as a {registered}?</p>

        <p className={styles.form__grp}>
          <Link href="/[loginAs]" as={goTo}>
            <button className={styles.btn}>Register</button>
          </Link>
        </p>
      </div>
    </LoginAs>
  );
}

export default LoginForm;
