import React from 'react';
import ReactDOM from 'react-dom';

export const regAsBrandForm = (
  <section class="section" id="section--1">   
  <div class="">
      <h2 class="login__header .section__title">
        Log In 
      </h2>
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
      <a href="login.html">
      <button class="btn">Login</button> </a>
    </div>
    </section>
  );
