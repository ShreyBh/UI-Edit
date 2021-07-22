import Link from "next/link";
import LoginAs from "./index";
import { useRouter } from "next/router";
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
      <div className="max-w-screen-md mt-12 mb-12 ml-20 mr-20 pt-0 pr-0 pl-0 pb-4 relative">
        <h2 className="bg-white text-6xl font-bold p-4 mt-4 mb-4 ml-3 mr-3 relative">{title}</h2>
        <form onSubmit={loginUser}>
          <p className = "block mt-0 mr-0 mb-1 ml-0 leading-normal font-bold tracking-wide text-base text-gray-800">
            <label htmlFor="email">Email Address</label>
            <input type="email" name="email" />
          </p>
          <p className  = "block mt-0 mr-0 mb-1 ml-0 leading-normal font-bold tracking-wide text-base text-gray-800">
            <label htmlFor="password">Password</label>
            <input type="password" name="password" />
          </p>
          <p className = "mt-0 ml-8 mr-8 mb-4 text-gray-800 font-bold">
            <button className="mt-4 mr-0 mb-4 ml-0 inline-block text-gray-800 bg-gray-200 border border-solid border-gray-400 min-w-24 font-normal pt-4 pb-4 pl-12 pr-12 rounded-lg cursor-pointer transition-all duration-300 smaller-10" type="submit">Login</button>
          </p>
        </form>
        <p className = "mt-0 ml-8 mr-8 mb-4 text-gray-800 font-bold">Not registered as a {registered}?</p>

        <p className = "mt-0 ml-8 mr-8 mb-4 text-gray-800 font-bold">
          <Link href="/[loginAs]" as={goTo}>
            <button className="mt-4 mr-0 mb-4 ml-0 inline-block text-gray-800 bg-gray-200 border border-solid border-gray-400 min-w-24 font-normal pt-4 pb-4 pl-12 pr-12 rounded-lg cursor-pointer transition-all duration-300 smaller-10">Register</button>
          </Link>
        </p>
      </div>
    </LoginAs>
  );
}

export default LoginForm;
