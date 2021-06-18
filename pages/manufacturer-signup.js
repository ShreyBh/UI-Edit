import Link from "next/link";
import styles from "../styles/Form.module.css";

function ManufacturerSignup() {
  return (
    <section className={styles.section}>
      <div className={styles.wrapper}>
        <h2 className={styles.form__header}>Register as Manufacturer</h2>
        <form>
          <p className={styles.form__grp}>
            <label htmlFor="manufacturer">Your name</label>
            <input type="text" />
          </p>
          <p className={styles.form__grp}>
            <label htmlFor="firm">Firm's name</label>
            <input type="text" />
          </p>
          <p className={styles.form__grp}>
            <p>Your role at the firm:</p>
            <input type="radio" id="owner" name="role" value="Owner" />
            <label htmlFor="owner">Owner</label>
            <input type="radio" id="other" name="role" value="Other" />
            <label htmlFor="other">Other</label>
          </p>
          <p className={styles.form__grp}>
            <label>Website Address (if any)</label>
            <input type="text" />
          </p>
          <p className={styles.form__grp}>
            <label>Email Address</label>
            <input type="email" />
          </p>
          <p className={styles.form__grp}>
            <label>Address</label>
            <input type="text" />
          </p>
          <p className={styles.form__grp}>
            <label>Phone </label>
            <input type="phone" />
          </p>
          <p className={styles.form__grp}>
            <p>Please select your gender:</p>
            <input type="radio" />
            <label>Male</label>
            <input type="radio" />
            <label>Female</label>
          </p>
          <p className={styles.form__grp}>
            <p></p>
            <input type="checkbox" />
            <label>Men's wear</label>
            <input type="checkbox" />
            <label>Ladies wear</label>

            <input type="checkbox" />
            <label>Kid's wear</label>

            <input type="checkbox" />
            <label>Home</label>

            <input type="checkbox" />
            <label>Accessoories</label>

            <input type="checkbox" />
            <label>Others</label>
          </p>
          <p className={styles.form__grp}>
            <label>What do you manufacture in above categories?</label>
            <input type="text" />
          </p>
          <p className={styles.form__grp}>
            <label>How many pieces can you make in day? *</label>
            <input type="number" />
          </p>
          <p>
            <p className={styles.form__grp}>Are you Sedex certified :</p>
            <input type="radio" />
            <label>Yes</label>
            <input type="radio" />
            <label>No</label>
            <input type="radio" />
            <label>Maybe</label>
          </p>
          <p className={styles.form__grp}>
            <p>Do you make your own designs</p>
            <input type="radio" />
            <label>Yes</label>

            <input type="radio" />
            <label>No</label>
          </p>
          <p className={styles.form__grp}>
            <p>Do you procure your own raw materials?</p>
            <label>Yes</label>

            <input type="radio" />
            <label>No</label>

            <input type="radio" />
            <label>Maybe</label>
          </p>
          <p className={styles.form__grp}>
            <p>Do you have your own QA/QC team?</p>
            <input type="radio" />
            <label>Yes</label>

            <input type="radio" />
            <label>No</label>
          </p>
          <p className={styles.form__grp}>
            <p>Tell us about some brands you have worked with?</p>
            <textarea id="subject" name="subject"></textarea>
          </p>
          <p className={styles.form__grp}>
            <div id="drop-area">
              <div>
                <p>
                  Upload multiple files with the file dialog or by dragging and
                  dropping images onto the dashed region
                </p>
                <input
                  type="file"
                  id="fileElem"
                  multiple
                  accept="image/*"
                  onchange="handleFiles(this.files)"
                />
                <label className="button" htmlFor="fileElem">
                  Select some files
                </label>
              </div>
            </div>
          </p>
          <p className={styles.form__grp}>
            <button className={styles.btn}> Register </button>
          </p>
        </form>
        <div className={styles.form__grp}>
          <p>Already registerd?</p>
          <Link href="/login/manufacturer" passHref>
            <button className={styles.btn}>Login</button>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default ManufacturerSignup;
