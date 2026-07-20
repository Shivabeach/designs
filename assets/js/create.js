/** @format */

const date = document.getElementById('date-input').value;
const create = document.querySelector('.create');
const submit = document.getElementById('submit-date');
const form = document.getElementById('trial-form');

if (date) {
  const newEl = document.createElement('input');
  newEl.className = 'newDate';
  newEl.type = 'text';
  newEl.id = 'new-date-input';
  form.appendChild(newEl);
}

// Manual YYYY-MM-DD validator and submit handler
function isValidDate(value) {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(value)) return false;
  const [y, m, d] = value.split('-').map(Number);
  const dt = new Date(value);
  return (
    !Number.isNaN(dt.getTime()) &&
    dt.getFullYear() === y &&
    dt.getMonth() + 1 === m &&
    dt.getDate() === d
  );
}

if (form) {
  form.addEventListener('submit', function(e) {
    const newDateEl = document.getElementById('new-date-input');
    const raw = (newDateEl && newDateEl.value) || (date && date.value) || '';
    const val = raw.trim();
    if (!val || !isValidDate(val)) {
      e.preventDefault();
      alert('Please enter a valid date in YYYY-MM-DD format.');
      if (newDateEl) newDateEl.focus();
      else if (date) date.focus();
    }
  });
}
