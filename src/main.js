import './style.css'
import { Header, setupNavigation } from './components/Header.js';
import { Hero } from './components/Hero.js';
import { About } from './components/About.js';
import { Services } from './components/Services.js';
import { Contact } from './components/Contact.js';
import { Footer } from './components/Footer.js';

document.querySelector('#app').innerHTML = `
  ${Header()}
  <main id="main">
    ${Hero()}
    ${About()}
    ${Services()}
    ${Contact()}
  </main>
  ${Footer()}
`;

setupNavigation();
