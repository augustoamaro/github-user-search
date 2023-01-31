import './style.css'
import { setupCounter } from './counter.js'

document.querySelector('#app').innerHTML = /*html*/`
  <div>
    <h1>Github user search</h1>
  </div>
`

setupCounter(document.querySelector('#counter'))
