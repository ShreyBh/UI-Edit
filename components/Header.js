
function Header() {
  return (
    <header className = "flex justify-between items-center h-32 w-full pt-0 pb-24 z-50" style = "background-image url(/static/images/sourceqwik-page-bg-1920x1200.png)">
      <nav className="bg-white flex justify-between items-center h-32 w-full pt-0 pb-0 pl-24 pr-24 z-100">
        <img className = "duration-500"
          src="/static/images/SourceqQwik_Logo_G.png"
          alt="SourceQwik logo"
          className= "pt-0 pb-0 h-16 transition-all duration-300 cursor-pointer aspect-w-3363 aspect-h-500"
          id="logo"
          data-version-number="3.0"
        />
        <ul className = "flex items-center list-none">
          <li className = "ml-16">
            <a className = "text-3xl font-normal no-underline block transition-all duration-300 text-white" href="#section--1">
              Home
            </a>
          </li>
          <li className ="ml-16">
            <a className = "text-3xl font-normal no-underline block transition-all duration-300 text-white" href="#">
              For Brands
            </a>
          </li>
          <li className = "ml-16">
            <a className = "text-3xl font-normal no-underline block transition-all duration-300 text-white"
 href="#">
              For Manufacturers  
            </a>
          </li>
          <li className = "ml-16">
            <a className  = "text-3xl font-normal no-underline block transition-all duration-300 text-white" href="#">
              Contact Us
            </a>
          </li>
          <li className = "ml-16">
            <a
              className = "text-3xl font-normal no-underline block transition-all duration-300 rounded text-center w-25 border border-solid border-gray-800 pt-3 pb-8 text-center cursor-pointer border-gray-800 border-solid border box-border rounded-md bg-gray-800 text-white"
              href="#"  >
              Log In
            </a>
          </li>
          <li className = "ml-16">
            <a
              className = "text-3xl font-normal no-underline block transition-all duration-300  pt-3 pb-8 text-center cursor-pointer border-gray-800 border-solid border box-border rounded-md bg-gray-800 text-white"
              href="#"
            >
              #Fight Covid
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
