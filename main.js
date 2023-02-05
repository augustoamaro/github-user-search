import './style.css';
import './src/styles/reset.css';

import search from './assets/icon-search.svg';
import dark from './assets/icon-moon.svg';
import location from './assets/icon-location.svg';
import website from './assets/icon-website.svg';
import twitter from './assets/icon-twitter.svg';
import company from './assets/icon-company.svg';

import { fetchUserData } from './src/helpers/request.js'

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
        <img avatar>
        <div>
          <h1 full_name>The Octocat</h1>
          <h2 login>@octocat</h2>
          <h3 created_at>Joined 25 Jan 2011</h3>
        </div>
      </div>

      <div class="bio-content">
        <p bio></p>
      </div>

      <div class="box-info">
        <div class="repos">
          <h2>Repos</h2>
          <span public_repos></span>
        </div>
        <div class="followers">
          <h2>Followers</h2>
          <span followers></span>
        </div>
        <div class="following">
          <h2>Following</h2>
          <span following></span>
        </div>
      </div>

      <div class="icons">
        <div class="location">
          <img src="${location}">
          <h2 location></h2>
        </div>
        <div class="website">
          <img src="${website}">
          <h2 website></h2>
        </div>
        <div class="twitter">
          <img src="${twitter}">
          <h2 twitter></h2>
        </div>
        <div class="company">
          <img src="${company}">
          <h2 company></h2>
        </div>
      </div>
    </section>
  </main>
`
const input = document.querySelector('[username]')
const searchBtn = document.querySelector('[search]')

fetchUserData(input, searchBtn);
