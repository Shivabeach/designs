/** @format */
const show = document.querySelector('.show');
const data1 = document.getElementById('data1');
const data2 = document.getElementById('data2');
const data3 = document.getElementById('data3');
const all = [data1.textContent, data2.textContent, data3.textContent];
const trys = [...all, 'Data4'];
//show.innerHTML = trys;
console.log(trys);
