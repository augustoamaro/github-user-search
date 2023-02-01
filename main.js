import './style.css';
import './src/styles/reset.css';

import search from './assets/icon-search.svg';
import dark from './assets/icon-moon.svg';

import { setupCounter } from './counter.js'

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

        <input placeholder="Search GitHub username...">

        <div class="btn-search">
          <span>Search</span>
        </div>
    </section>

    <section class="box">
    <div class="git-info">
      <img src="${search}">

      <div>
        <h1>The Octocat</h1>
        <h2>@octocat</h2>
        <h3>Joined 25 Jan 2011</h3>
      </div>
    </div>

    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros.</p>

    <div>
    
    </div>
    </section>
  </main>
`

setupCounter(document.querySelector('#counter'))
