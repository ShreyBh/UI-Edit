import Link from "next/link";
import styles from "../styles/Form.module.css";
import signUp from "../components/Signup.js"

function BrandSignup() {
  const registerUser = event => {
    event.preventDefault();
    let email = event.target.email.value;
    let password = event.target.password.value;
    let username = event.target.brand_name.value;
    console.log(email,password)
    signUp(email, email, password);
  }
  return (
    <section className={styles.section}>
      <div className={styles.wrapper}>
        <h2 className={styles.form__header}>Register as Brand</h2>
        <form onSubmit={registerUser}>
          <p className={styles.form__grp}>
            <label htmlFor="brand_name">Brand/ Organisation Name</label>
            <input type="text" name="brand_name" />
          </p>
          <p className={styles.form__grp}>
            <label htmlFor="email">Email Address</label>
            <input type="email" name="email"/>
          </p>
          <p className={styles.form__grp}>
            <label htmlFor="password">Password</label>
            <input type="password" name="password" />
          </p>
          <p className={styles.form__grp}>
            <label htmlFor="phone">Phone </label>
            <input type="phone" />
          </p>
          <p className={styles.form__grp}>
            <button type="submit" class={styles.btn}> Register </button>
          </p>
        </form>
        <p className={styles.form__grp}>Already registerd?</p>
        <p className={styles.form__grp}>
          <Link href="/login/brand" passHref>
            <button className={styles.btn}>Login</button>
          </Link>
        </p>
      </div>
    </section>
  );
}

export default BrandSignup;
