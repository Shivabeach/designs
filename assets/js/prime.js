/** @format */
import {
  properCase,
  log,
  listen,
  months,
  addToArray,
  sanitizeInput,
} from './utils.js';
const color = require('color');
const veryPeri = color('#6868AC');
const graniteGreen = color('#85A094');
const hawthornRose = color('#894B5D');
const elderberry = color('#A0838F');
const burnishedLilac = color('#C6AAAF');
const lotus = color('#E3C1BE');
const mutedClay = color('#D3927D');
const driedMoss = color('#CDB97D');

let col5 = document.getElementById('col-5');
let storedData = localStorage.getItem('lister');
let para = document.createElement('p');
const col9 = document.getElementById('col-9');

let writing = 'This is a newly created paragraph';
para.append(writing);
col5.append(para);

//const colorcfb = color('#ff8c00');
col9.style.backgroundColor = elderberry;
col9.style.color = elderberry.darken(0.75);

document.getElementById('col-4').style.backgroundColor = graniteGreen;
document.getElementById('col-4').style.color = graniteGreen.darken(0.5);
document.getElementById('col-11').style.backgroundColor = veryPeri;
document.getElementById('col-6').style.backgroundColor = hawthornRose;
document.getElementById('col-6').style.color = hawthornRose.lighten(0.5);
document.getElementById('col-11').style.color = veryPeri.darken(0.5);
document.getElementById('col-3').style.backgroundColor = mutedClay;
document.getElementById('col-3').style.color = mutedClay.darken(0.5);
document.getElementById('col-12').style.backgroundColor = driedMoss;
document.getElementById('col-12').style.color = driedMoss.darken(0.5);
//ident
const display = document.getElementById('display-array');
//let make = document.querySelector('.make');
//const take = document.querySelector('.take');
const made = document.getElementById('make');
let sub = document.getElementById('sub');
const retrieve = localStorage.getItem('lister');
//array
let list = [];

function clear() {
  document.getElementById('make').value = '';
  document.getElementById('take').value = '';
}

function local(list) {
  localStorage.setItem('lister', JSON.stringify(list));
}

function get() {
  if (localStorage.getItem('lister') === '') {
    list = [];
  } else {
    list = JSON.parse(localStorage.getItem('lister'));
    document.getElementById('display-array').textContent = list;
  }

  // if (storedData !== '') {
  // 	let list = JSON.parse(storedData);
  // 	display.innerHTML = JSON.parse(storedData);
  // }
}

function remove(value) {
  list = list.filter((item) => item !== value);
  display.innerHTML = JSON.parse(storedData);
  //console.log(storedData);
}

sub.addEventListener('click', (e) => {
  e.preventDefault();
  let theTake = document.getElementById('take').value;
  const sanitize = sanitizeInput(theTake);
  remove(sanitize);
});

sub.addEventListener('click', (e) => {
  e.preventDefault();
  let arr = document.querySelector('.make').value;
  let arg = sanitizeInput(arr);
  list.push(arg);
  local(list);
  get();
  clear();
});

addEventListener('DOMContentLoaded', () => {
  get();
});
