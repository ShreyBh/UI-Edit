import Link from "next/link";
import LoginAs from "./index";
import { useRouter } from "next/router";
import styles from "../../styles/Form.module.css";

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

  return (
    <LoginAs>
      <div className={styles.wrapper}>
        <h2 className={`${styles.form__header}`}>{title}</h2>
        <form>
          <p className={styles.form__grp}>
            <label htmlFor="email">Email Address</label>
            <input type="email" />
          </p>
          <p className={styles.form__grp}>
            <label htmlFor="password">Password</label>
            <input type="password" />
          </p>
          <p className={styles.form__grp}>
            <button className={styles.btn}>Login</button>
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
