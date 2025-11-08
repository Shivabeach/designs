/** @format */

const today = new Date();
const f = new Intl.DateTimeFormat('en-us', {
  dateStyle: 'full',
  //timeStyle: 'full',
});
// datey.style.color = '#4b0082';
datey.innerHTML = f.format(today);
