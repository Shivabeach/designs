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
const specV = document.querySelector('.specV');
const lowerV = document.querySelector('.lowerV');
const upperV = document.querySelector('.upperV');
const digits = document.querySelector('.digits');

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
	specialCharsCounts();
	lowerCharsCounts();
	upperCharsCounts();
	digitCount();
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
	const calc = passwordLength * Math.log2(generatedString);
	//const passwordEntropy = passwordLength * calc;
	entropyDisplay.value = Math.floor(calc);
	console.log(Math.log2(generatedString ^ passwordLength));
}

function clear() {
	entropyDisplay.value = '';
	spec.value = '';
	numbers.value = '';
	upper.value = '';
	lower.value = '';
	length.value = '';
	passwordDisplay.textContent = '';
	specV.textContent = '';
	lowerV.textContent = '';
	upperV.textContent = '';
	digits.textContent = '';
}

passwordGen.addEventListener('submit', () => {
	setTimeout(gen, 500);
});

reset1.addEventListener('click', clear);

// ==========================================================================
// Start character counts for spcial chars, numbers upper and lower values
// ==========================================================================

function specialCharsCounts() {
	let pass = passwordDisplay.textContent;
	const specialChars = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?`']+/;
	let count = 0;
	for (let i = 0; i < pass.length; i++) {
		if (specialChars.test(pass[i])) {
			count++;
		}
	}
	specV.textContent = `${count} Special Characters`;
}

function lowerCharsCounts() {
	let pass = passwordDisplay.textContent;
	const numChars = /[a-z]/;
	let count = 0;
	for (let i = 0; i < pass.length; i++) {
		if (numChars.test(pass[i])) {
			count++;
		}
	}
	lowerV.textContent = `${count} Lower Characters`;
}

function upperCharsCounts() {
	let pass = passwordDisplay.textContent;
	const upChars = /[A-Z]/;
	let count = 0;
	for (let i = 0; i < pass.length; i++) {
		if (upChars.test(pass[i])) {
			count++;
		}
	}
	upperV.textContent = `${count} Upper Characters`;
}

function digitCount() {
	let pass = passwordDisplay.textContent;
	const digitChars = /[0-9]/;
	let count = 0;
	for (let i = 0; i < pass.length; i++) {
		if (digitChars.test(pass[i])) {
			count++;
		}
	}
	digits.textContent = `${count} Digits`;
}
