import Link from "next/link";

function ManufacturerSignup() {
  return (
    <section className="section" id="section--1">
      <div className="">
        <h2 className="login__header .section__title">
          Register as Manufacturer
        </h2>
        <form className="login__form">
          <label>Your name</label>
          <input type="text" />
          <label>Firm's name</label>
          <input type="text" />
          <p>Your role at the firm:</p>
          <input type="radio" id="owner" name="role" value="Owner" />
          <label htmlFor="owner">Owner</label>

          <input type="radio" id="other" name="role" value="Other" />
          <label htmlFor="other">Other</label>

          <label>Website Address (if any)</label>
          <input type="text" />
          <label>Email Address</label>
          <input type="email" />
          <label>Address</label>
          <input type="text" />
          <label>Phone </label>
          <input type="number" />
          <p>Please select your gender:</p>
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

          <label>What do you manufacture in above categories?</label>
          <input type="text" />
          <label>How many pieces can you make in day? *</label>
          <p>Are you Sedex certified :</p>
          <input type="radio" />
          <label>Yes</label>

          <input type="radio" />
          <label>No</label>

          <input type="radio" />
          <label>Maybe</label>

          <p>Do you make your own designs</p>
          <input type="radio" />
          <label>Yes</label>

          <input type="radio" />
          <label>No</label>

          <p>Do you procure your own raw materials?</p>
          <label>Yes</label>

          <input type="radio" />
          <label>No</label>

          <input type="radio" />
          <label>Maybe</label>

          <p>Do you have your own QA/QC team?</p>
          <input type="radio" />
          <label>Yes</label>

          <input type="radio" />
          <label>No</label>

          <p>Tell us about some brands you have worked with?</p>
          <textarea id="subject" name="subject"></textarea>
          <div id="drop-area">
            {/* <div className="my-form">
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
            </div> */}
          </div>
          <button className="btn"> Submit </button>
        </form>
        <p>Already registerd?</p>
        <Link href="/login/manufacturer" passHref>
          <button className="btn">Login</button>
        </Link>
      </div>
    </section>
  );
}

export default ManufacturerSignup;