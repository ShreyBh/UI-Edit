import React from 'react';
import ReactDOM from 'react-dom';
import { loginForm } from '../templates/login.js'
import { regAsBrandForm } from '../templates/registerAsBrand.js'
import { btn } from '../js/login.js'

ReactDOM.render(loginForm, document.getElementById('root'));

btn.addEventListener('click', ()=> {
    ReactDOM.render(regAsBrandForm, document.getElementById('root'));
});