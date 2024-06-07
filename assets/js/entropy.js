/** @format */

import { log } from './utils';
const passwordDisplay = document.querySelector('.password-display');
//const passwordEntropy = document.getElementById('password-entropy');
const passwordGen = document.getElementById('passwordGeneratorForm');
const length = document.querySelector('.length');
const lower = document.querySelector('.lower');
const upper = document.querySelector('.upper');
const numbers = document.querySelector('.numbers');
const spec = document.querySelector('.spec');
const entropyDisplay = document.querySelector('.entropy');
const reset1 = document.querySelector('.reset');
const numerics = 10;
const lowerScore = 26;
const upperScore = 26;
const symbolsScore = 32;
const passwordScore = 0;

/**
 * E = L × Math.log2(R)
 * E = L × log2(R)
 * R is the possible range of character types in your password
 * L is the number of characters in your password
 */

function gen() {
	let pass = passwordDisplay.textContent; //get the value
	let passwordLength = pass.length; //get the length of the password
	length.value = passwordLength;
	lowerS(pass);
	upperS(pass);
	num(pass);
	special(pass);
	total(passwordLength);
}

function lowerS(pass) {
	const pattern = /[a-z]/g;
	let lowersc = pass.match(pattern);
	lowersc ? (lower.value = lowerScore) : (lower.value = 0);
}
function upperS(pass) {
	const pattern = /[A-Z]/g;
	let upperSc = pattern.test(pass);
	upperSc ? (upper.value = upperScore) : (upper.value = 0);
}
function num(pass) {
	const pattern = /[0-9]/g;
	let numberSc = pass.match(pattern);
	numberSc ? (numbers.value = numerics) : (numbers.value = 0);
}
function special(pass) {
	const pattern = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
	let specialSc = pattern.test(pass);
	specialSc ? (spec.value = symbolsScore) : (spec.value = 0);
}

function total(passwordLength) {
	const generatedString =
		+spec.value + +numbers.value + +upper.value + +lower.value;
	const calc = Math.log2(generatedString);
	const passwordEntropy = passwordLength * calc;
	entropyDisplay.value = Math.floor(passwordEntropy);
}

function clear() {
	entropyDisplay.value = '';
	spec.value = '';
	numbers.value = '';
	upper.value = '';
	lower.value = '';
	length.value = '';
	passwordDisplay.textContent = '';
}

passwordGen.addEventListener('submit', () => {
	setTimeout(gen, 500);
});

reset1.addEventListener('click', clear);
