import Link from "next/link";

function BrandSignup() {
  return (
    <section class="section" id="section--1">
      <div class="">
        <h2 class="login__header .section__title">Register as Brand</h2>
        <form class="login__form">
          <label>Brand/ Organisation Name</label>
          <input type="email" />
          <label>Email Address</label>
          <input type="email" />
          <label>Phone </label>
          <input type="number" />
          <button class="btn"> Register </button>
        </form>
        <span>Already registerd?</span>
        <Link href="/login/brand" passHref>
          <button class="btn">Login</button>
        </Link>
      </div>
    </section>
  );
}

export default BrandSignup;
