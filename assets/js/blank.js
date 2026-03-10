/** @format */

const today = new Date();
const f = new Intl.DateTimeFormat('en-us', {
  dateStyle: 'full'
  //timeStyle: 'full',
});
// datey.style.color = '#4b0082';
datey.innerHTML = f.format(today);

// Highlight the current active link using URL normalization
const normalizeHref = (href) => {
  try {
    const u = new URL(href, location.href);
    u.hash = '';
    return u.href.replace(/\/$/, '');
  } catch (err) {
    return href.replace(/#.*$/, '').replace(/\/$/, '');
  }
};
const currentHref = normalizeHref(window.location.href);
Array.from(document.links).forEach((link) => {
  if (normalizeHref(link.href) === currentHref) {
    link.classList.add('current');
  }
});
