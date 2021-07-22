import Link from "next/link";
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
    <section className="m-40 border-solid border-gray-400 border-t transition-opacity duration-1000">
      <div className="max-w-screen-md mt-12 mb-12 ml-20 mr-20 pt-0 pr-0 pl-0 pb-4 relative">
        <h2 className="bg-white text-6xl font-bold p-4 mt-4 mb-4 ml-3 mr-3 relative">Register as Brand</h2>
        <form onSubmit={registerUser}>
          <p className = "block mt-0 mr-0 mb-1 ml-0 leading-normal font-bold tracking-wide text-base text-gray-800">
            <label htmlFor="brand_name">Brand/ Organisation Name</label>
            <input type="text" name="brand_name" />
          </p>
          <p className = "block mt-0 mr-0 mb-1 ml-0 leading-normal font-bold tracking-wide text-base text-gray-800">
            <label htmlFor="email">Email Address</label>
            <input type="email" name="email"/>
          </p>
          <p className = "block mt-0 mr-0 mb-1 ml-0 leading-normal font-bold tracking-wide text-base text-gray-800">
            <label htmlFor="password">Password</label>
            <input type="password" name="password" />
          </p>
          <p className = "block mt-0 mr-0 mb-1 ml-0 leading-normal font-bold tracking-wide text-base text-gray-800">
            <label htmlFor="phone">Phone </label>
            <input type="phone" />
          </p>
          <p className = "mt-0 ml-8 mr-8 mb-4 text-gray-800 font-bold">
            <button type="submit" class="mt-4 mr-0 mb-4 ml-0 inline-block text-gray-800 bg-gray-200 border border-solid border-gray-400 min-w-24 font-normal pt-4 pb-4 pl-12 pr-12 rounded-lg cursor-pointer transition-all duration-300 smaller-10"> Register </button>
          </p>
        </form>
        <p className = "mt-0 ml-8 mr-8 mb-4 text-gray-800 font-bold">Already registerd?</p>
        <p className = "mt-0 ml-8 mr-8 mb-4 text-gray-800 font-bolds">
          <Link href="/login/brand" passHref>
            <button className = "mt-4 mr-0 mb-4 ml-0 inline-block text-gray-800 bg-gray-200 border border-solid border-gray-400 min-w-24 font-normal pt-4 pb-4 pl-12 pr-12 rounded-lg cursor-pointer transition-all duration-300 smaller-10">Login</button> b
          </Link>
        </p>
      </div>
    </section>
  );
}

export default BrandSignup;
