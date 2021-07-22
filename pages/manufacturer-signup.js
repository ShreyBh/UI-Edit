import Link from "next/link";
import styles from "../styles/globals.css";
/*
import styles from "../styles/Form.module.css";
*/
function ManufacturerSignup() {
  return (
    <section className="m-40 border-t border-solid border-gray-400 transition-opacity duration-1000">
      <div className="max-w-screen-md mt-12 mb-12 ml-20 mr-20 pt-0 pr-0 pl-0 pb-4 relative ">
        <h2 className="bg-white text-6xl font-bold p-4 mt-4 mb-4 ml-3 mr-3 relative"> Register as Manufacturer </h2>
        <form>
          <p className = "block mt-0 mr-0 mb-1 ml-0 leading-normal font-bold tracking-wide text-base text-gray-800">
            <label htmlFor="manufacturer">Your name</label>
            <input type="text"  className = "border border-solid border-gray-400 pt-3 pb-3 pl-3 pr-3 rounded-sm outline-none text-gray-800 text-base w-full h-10 leading-5" />
          </p>
          <p className = "block mt-0 mr-0 mb-1 ml-0 leading-normal font-bold tracking-wide text-base text-gray-800">
            <label htmlFor="firm">Firm's name</label>
            <input type="text"  className = "border border-solid border-gray-400 pt-3 pb-3 pl-3 pr-3 rounded-sm outline-none text-gray-800 text-base w-full h-10 leading-5"/>
          </p>
          <p className = "mt-0 ml-8 mr-8 mb-4 text-gray-800 font-bold">Your role at the firm:</p>
          <div className="mt-0 ml-8 mr-8 mb-4">
            <ul>
              <li>
                <input type="radio" id="owner" name="role" value="Owner" className = "mt-0 ml-8 mr-8 mb-4" />
                <label  htmlFor="owner">Owner</label>
              </li>
              <li>
                <input type="radio" id="other" name="role" value="Other" className = "mt-0 ml-8 mr-8 mb-4" />
                <label htmlFor="other">Other</label>
              </li>
            </ul>
          </div>
          <p className = "block mt-0 mr-0 mb-1 ml-0 leading-normal font-bold tracking-wide text-base text-gray-800">
            <label>Website Address (if any)</label>
            <input type="text" className = "border border-solid border-gray-400 pt-3 pb-3 pl-3 pr-3 rounded-sm outline-none text-gray-800 text-base w-full h-10 leading-5"/>
          </p>
          <p className = "block mt-0 mr-0 mb-1 ml-0 leading-normal font-bold tracking-wide text-base text-gray-800">
            <label>Email Address</label>
            <input type="email"  className = "border border-solid border-gray-400 pt-3 pb-3 pl-3 pr-3 rounded-sm outline-none text-gray-800 text-base w-full h-10 leading-5"  />
          </p>
          <p className = "block mt-0 mr-0 mb-1 ml-0 leading-normal font-bold tracking-wide text-base text-gray-800">
            <label>Address</label>
            <input type="text"  className = "border border-solid border-gray-400 pt-3 pb-3 pl-3 pr-3 rounded-sm outline-none text-gray-800 text-base w-full h-10 leading-5" />
          </p>
          <p className = "block mt-0 mr-0 mb-1 ml-0 leading-normal font-bold tracking-wide text-base text-gray-800">
            <label>Phone </label>
            <input type="phone"  className = "border border-solid border-gray-400 pt-3 pb-3 pl-3 pr-3 rounded-sm outline-none text-gray-800 text-base w-full h-10 leading-5" />
          </p>

          <p className = "mt-0 ml-8 mr-8 mb-4 text-gray-800 font-bold">
            What category apparels do you manufacture?{" "}
          </p>
          <ul>
            <li>
              <input type="checkbox" />
              <label>Men's wear</label>
            </li>
            <li>
              <input type="checkbox" />
              <label>Ladies wear</label>   
            </li>
            <li>
              <input type="checkbox" />       
              <label>Kid's wear</label>       
            </li>
            <li>
              <input type="checkbox" />         
              <label>Home</label>
            </li>
            <li>
              <input type="checkbox" />         
              <label>Accessories</label>
            </li>
            <li>
              <input type="checkbox" />         
              <label>Others</label>
            </li>
          </ul>

          <p className = "block mt-0 mr-0 mb-1 ml-0 leading-normal font-bold tracking-wide text-base text-gray-800">
            <label>What do you manufacture in above categories?</label>
            <input type="text"  />
          </p>
          <p className = "block mt-0 mr-0 mb-1 ml-0 leading-normal font-bold tracking-wide text-base text-gray-800">
            <label>How many pieces can you make in day? *</label>
            <input type="number" />
          </p>
          <p className = "mt-0 ml-8 mr-8 mb-4 text-gray-800 font-bold">Are you Sedex certified :</p>
          <ul>
            <li>
              <input type="radio" classname = "align-baseline" />
              <label>Yes</label>
            </li>
            <li>
              <input type="radio" classname = "align-baseline" />
              <label>No</label>
            </li>
            <li>
              <input type="radio" classname = "align-baseline" />
              <label>Maybe</label>
            </li>
          </ul>

          <p className = "mt-0 ml-8 mr-8 mb-4 text-gray-800 font-bold" >Do you make your own designs</p>
          <ul>
            <li>
              <input type="radio" classname = "align-baseline" />
              <label>Yes</label>
            </li>
            <li>
              <input type="radio" classname = "align-baseline" />
              <label>No</label>
            </li>
          </ul>
          <p>
            <p className = "mt-0 ml-8 mr-8 mb-4 text-gray-800 font-bold">
              Do you procure your own raw materials?
            </p>
            <ul>
              <li>
                <input type="radio" classname = "align-baseline" />
                <label>Yes</label>
              </li>
              <li>
                <input type="radio" classname = "align-baseline" />
                <label>No</label>
              </li>
              <li>
                <input type="radio" classname = "align-baseline" />
                <label>Maybe</label>
              </li>
            </ul>
          </p>
          <p className = "mt-0 ml-8 mr-8 mb-4 text-gray-800 font-bold">Do you have your own QA/QC team?</p>
          <ul>
            <li>
              <input type="radio" classname = "align-baseline" />
              <label>Yes</label>
            </li>
            <li>
              <input type="radio" classname = "align-baseline"  />
              <label>No</label>
            </li>
          </ul>
          <p className = "mt-0 ml-8 mr-8 mb-4 text-gray-800 font-bold">
            <p className = "text-gray-800 font-bold">Tell us about some brands you have worked with?</p>
            <textarea id="subject" name="subject"></textarea>
          </p>
          <p className =" mt-0 ml-8 mr-8 mb-4 text-gray-800 font-bold">
            <div id="drop-area">
              <div>
                <p className = "text-gray-800 font-bold">
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
          <p className = "mt-0 ml-8 mr-8 mb-4 text-gray-800 font-bold">
            <button className = "mt-4 mr-0 mb-4 ml-0 inline-block text-gray-800 bg-gray-200 border border-solid border-gray-400 min-w-24 font-normal pt-4 pb-4 pl-12 pr-12 rounded-lg cursor-pointer transition-all duration-300 smaller-10"> Register </button>
          </p>
        </form>
        <div className = "mt-0 ml-8 mr-8 mb-4">
          <p className = "text-gray-800 font-bold">Already registered?</p>
          <Link href="/login/manufacturer" passHref>
            <button className="mt-4 mr-0 mb-4 ml-0 inline-block text-gray-800 bg-gray-200 border border-solid border-gray-400 min-w-24 font-normal pt-4 pb-4 pl-12 pr-12 rounded-lg cursor-pointer transition-all duration-300 smaller-10"> Login </button>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default ManufacturerSignup;
