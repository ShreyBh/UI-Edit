import React from 'react';
import ReactDOM from 'react-dom';

export const loginForm = (
  <section className="section" id="section--1">   
  <div className="">
      <h2 className="login__header .section__title">
        Log In 
      </h2>
      <form className="login__form">
        <label>Email Address</label>
        <input type="email" />
        <label>Password</label>
        <input type="password" />
        <button className="btn">Log In &rarr;</button>
      </form>
      <span>Not registered as a brand?</span>
          <button className="btn-reg">Register</button>
    </div>
  </section>
  );