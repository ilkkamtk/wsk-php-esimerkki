'use strict';

const navi = document.querySelector('nav');

// add tooltop for each link
navi.querySelectorAll('a').forEach((link) => {
  link.title = link.textContent;
});
