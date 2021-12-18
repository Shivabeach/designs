/** @format */
const exp = document.getElementById('exp');
const display = document.querySelector('.display');
const make = document.querySelector('.make');
const take = document.querySelector('.take');

let work = ['first'];
//check local storage
function check() {
	if (localStorage.getItem('local') === null) {
		work = [];
	} else {
		work = JSON.parse(localStorage.getItem('local'));
	}
	return local;
}
//add to array
function showArr() {
	document.querySelector('.display').innerHTML = work;
}
document.addEventListener('DOMContentLoaded', () => {
	showArr();
	check();
});

exp.addEventListener('submit', (e) => {
	e.preventDefault();
});
