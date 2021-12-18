/** @format */
'use strict';
let col5 = document.getElementById('col-5');
let storedData = localStorage.getItem('lister');
let para = document.createElement('p');
let writing = 'This is a newly created paragraph';
para.append(writing);
col5.append(para);

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
	remove(theTake);
});

sub.addEventListener('click', (e) => {
	e.preventDefault();
	let arr = document.querySelector('.make').value;
	list.push(arr);
	local(list);
	get();
	clear();
});

addEventListener('DOMContentLoaded', () => {
	get();
});
