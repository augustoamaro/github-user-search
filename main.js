import './style.css';
import './src/styles/reset.css';

import search from './assets/icon-search.svg';
import dark from './assets/icon-moon.svg';

import { searchUser } from './src/helpers/request.js'

document.querySelector('#app').innerHTML = /*html*/`
  <main>
    <section class="top">
      <h1>devfinder</h1>

      <div class="theme">
        <h2>DARK</h2>
        <img src="${dark}"/>
      </div>
    </section>

    <section class="search">
        <img src="${search}">

        <input username placeholder="Search GitHub username...">

        <div search class="btn-search">
          <span>Search</span>
        </div>
    </section>

    <section class="box">
    <div class="git-info">
      <img src="${search}">

      <div>
        <h1 full_name></h1>
        <h2 login></h2>
        <h3 joined></h3>
      </div>
    </div>
    <p bio>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros.</p>

    <div class="box-info">
    
    </div>
    </section>
  </main>
`
const input = document.querySelector('[username]')
const searchBtn = document.querySelector('[search]')

searchUser(input, searchBtn);
