/** @format */
import {
  properCase,
  log,
  listen,
  months,
  addToArray,
  sanitizeInput,
} from './utils.js';

/* for calculations */
const number1 = document.querySelector('.no1');
const number2 = document.querySelector('.no2');
const click = document.querySelector('.click');
const calculated = document.querySelector('.calculated');

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
const strengthMeter = document.getElementById('strength-meter');
const passwordInput = document.getElementById('password-input');
const reasonsContainer = document.getElementById('reasons');

// let writing = 'This is a newly created paragraph';
// para.append(writing);
// col5.append(para);

const alphaSort = (array) => {
  if (!array.length) return;
  return array.sort();
};

//const colorcfb = color('#ff8c00');
col9.style.backgroundColor = elderberry;
col9.style.color = elderberry.darken(0.75);

document.getElementById('col-4').style.backgroundColor = graniteGreen;
document.getElementById('col-4').style.color = graniteGreen.darken(0.5);
document.getElementById('col-11').style.backgroundColor = veryPeri;
document.getElementById('col-6').style.backgroundColor = hawthornRose;
//document.getElementById('col-6').style.color = hawthornRose.lighten(0.75);
document.getElementById('col-11').style.color = veryPeri.darken(0.5);
document.getElementById('col-3').style.backgroundColor = mutedClay;
document.getElementById('col-3').style.color = mutedClay.darken(0.5);
document.getElementById('col-12').style.backgroundColor = driedMoss;
document.getElementById('col-12').style.color = driedMoss.darken(0.5);
//ident
const display = document.getElementById('display-array');
let make = document.querySelector('.make');
let take = document.querySelector('.take');
const made = document.getElementById('make');
let sub = document.getElementById('sub');
const retrieve = localStorage.getItem('lister');
//array

function clear() {
  made.value = '';
  take.value = '';
}
let list = [];

function getStore() {
  const choco = 'Shampoo';
  list.push(choco);
  localStorage.setItem('lister', JSON.stringify(list));
}

function get() {
  if (JSON.parse(localStorage.getItem('lister') === '')) {
    getStore();
  } else {
    let liste = JSON.parse(localStorage.getItem('lister'));
    let lists = liste.filter((a) => a); // this clears out any empty array items local storage
    let str = '<ul>';
    lists.forEach((item) => {
      str += `<li class="darker">${item}</li>`;
    });
    str += '</ul>';
    document.getElementById('displayContainer').innerHTML = str;
  }
}

function local(arr) {
  list.push(arr);
  localStorage.setItem('lister', JSON.stringify(list));
}
// if (storedData !== '') {
//  let list = JSON.parse(storedData);
//  display.innerHTML = JSON.parse(storedData);
// }

function remove(value) {
  list = list.filter((item) => item !== value);
  localStorage.setItem('lister', JSON.stringify(list));
  //display.innerHTML = JSON.parse(storedData);
  //console.log(storedData);
  get();
}

sub.addEventListener('submit', (e) => {
  e.preventDefault();
  let theTake = take.value;
  // if (theTake.trim() !== '') {
  //   const sanitize = sanitizeInput(theTake);
  remove(theTake);
  // }
});

sub.addEventListener('click', (e) => {
  e.preventDefault();
  let arr = make.value;
  local(arr);
  get();
  //clear();
});

addEventListener('DOMContentLoaded', () => {
  get();
});
// ==========================================================================
// Start passwords
// ==========================================================================
passwordInput.addEventListener('input', updateStrengthMeter);
updateStrengthMeter();

function updateStrengthMeter() {
  const weaknesses = calculatePasswordStrength(passwordInput.value);

  let strength = 100;
  reasonsContainer.innerHTML = '';
  weaknesses.forEach((weakness) => {
    if (weakness == null) return;
    strength -= weakness.deduction;
    const messageElement = document.createElement('div');
    messageElement.innerText = weakness.message;
    reasonsContainer.appendChild(messageElement);
  });
  strengthMeter.style.setProperty('--strength', strength);
}

function calculatePasswordStrength(password) {
  const weaknesses = [];
  weaknesses.push(lengthWeakness(password));
  weaknesses.push(lowercaseWeakness(password));
  weaknesses.push(uppercaseWeakness(password));
  weaknesses.push(numberWeakness(password));
  weaknesses.push(specialCharactersWeakness(password));
  weaknesses.push(repeatCharactersWeakness(password));
  return weaknesses;
}

function lengthWeakness(password) {
  const length = password.length;

  if (length <= 5) {
    return {
      message: 'Your password is too short',
      deduction: 40,
    };
  }

  if (length <= 10) {
    return {
      message: 'Your password could be longer',
      deduction: 15,
    };
  }
}

function uppercaseWeakness(password) {
  return characterTypeWeakness(password, /[A-Z]/g, 'uppercase characters');
}

function lowercaseWeakness(password) {
  return characterTypeWeakness(password, /[a-z]/g, 'lowercase characters');
}

function numberWeakness(password) {
  return characterTypeWeakness(password, /[0-9]/g, 'numbers');
}

function specialCharactersWeakness(password) {
  return characterTypeWeakness(
    password,
    /[^0-9a-zA-Z\s]/g,
    'special characters'
  );
}

function characterTypeWeakness(password, regex, type) {
  const matches = password.match(regex) || [];

  if (matches.length === 0) {
    return {
      message: `Your password has no ${type}`,
      deduction: 20,
    };
  }

  if (matches.length <= 2) {
    return {
      message: `Your password could use more ${type}`,
      deduction: 5,
    };
  }
}

function repeatCharactersWeakness(password) {
  const matches = password.match(/(.)\1/g) || [];
  if (matches.length > 0) {
    return {
      message: 'Your password has repeat characters',
      deduction: matches.length * 10,
    };
  }
}
const characterAmountRange = document.getElementById('characterAmountRange');
const characterAmountNumber = document.getElementById('characterAmountNumber');
const includeUppercaseElement = document.getElementById('includeUppercase');
const includeNumbersElement = document.getElementById('includeNumbers');
const includeSymbolsElement = document.getElementById('includeSymbols');
const form = document.getElementById('passwordGeneratorForm');
const passwordDisplay = document.getElementById('passwordDisplay');

const LOWERCASE_CHAR_CODES = arrayFromLowToHigh(97, 122);
const UPPERCASE_CHAR_CODES = arrayFromLowToHigh(65, 90);
const NUMBER_CHAR_CODES = arrayFromLowToHigh(48, 57);
const SYMBOL_CHAR_CODES = arrayFromLowToHigh(33, 47)
  .concat(arrayFromLowToHigh(58, 64))
  .concat(arrayFromLowToHigh(91, 96))
  .concat(arrayFromLowToHigh(123, 126));

characterAmountNumber.addEventListener('input', SyncCharacterAmount);
characterAmountRange.addEventListener('input', SyncCharacterAmount);

form.addEventListener('submit', (e) => {
  'use strict';
  e.preventDefault();
  const characterAmount = characterAmountNumber.value;
  const includeUppercase = includeUppercaseElement.checked;
  const includeNumbers = includeNumbersElement.checked;
  const includeSymbols = includeSymbolsElement.checked;
  const password = generatePassword(
    characterAmount,
    includeUppercase,
    includeNumbers,
    includeSymbols
  );
  passwordDisplay.innerText = password;
});

function generatePassword(
  characterAmount,
  includeUppercase,
  includeNumbers,
  includeSymbols
) {
  let charCodes = LOWERCASE_CHAR_CODES;
  if (includeUppercase) charCodes = charCodes.concat(UPPERCASE_CHAR_CODES);
  if (includeSymbols) charCodes = charCodes.concat(SYMBOL_CHAR_CODES);
  if (includeNumbers) charCodes = charCodes.concat(NUMBER_CHAR_CODES);

  const passwordCharacters = [];
  for (let i = 0; i < characterAmount; i++) {
    const characterCode =
      charCodes[Math.floor(Math.random() * charCodes.length)];
    passwordCharacters.push(String.fromCharCode(characterCode));
  }
  return passwordCharacters.join('');
}

function arrayFromLowToHigh(low, high) {
  'use strict';
  const array = [];
  for (let i = low; i <= high; i++) {
    array.push(i);
  }
  return array;
}

function SyncCharacterAmount(e) {
  'use strict';
  const value = e.target.value;
  characterAmountNumber.value = value;
  characterAmountRange.value = value;
}

function calculate() {
  const one = number1.value;
  const two = number2.value;
  const done = (one / two) * 100;
  calculated.innerText = done.toFixed(2) + '%';
}

click.addEventListener('click', (e) => {
  e.preventDefault();
  calculate();
});
