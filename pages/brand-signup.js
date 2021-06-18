import Link from "next/link";
import styles from "../styles/Form.module.css";

function BrandSignup() {
  return (
    <section className={styles.section}>
      <div className={styles.wrapper}>
        <h2 className={styles.form__header}>Register as Brand</h2>
        <form>
          <p className={styles.form__grp}>
            <label htmlFor="brand_name">Brand/ Organisation Name</label>
            <input type="text" />
          </p>
          <p className={styles.form__grp}>
            <label htmlFor="email">Email Address</label>
            <input type="email" />
          </p>
          <p className={styles.form__grp}>
            <label htmlFor="phone">Phone </label>
            <input type="phone" />
          </p>
          <p className={styles.form__grp}>
            <button class={styles.btn}> Register </button>
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
