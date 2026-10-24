// Add the live Chrome Web Store URL when your listing is approved.
// Example: const chromeStoreUrl = 'https://chromewebstore.google.com/detail/...';
const chromeStoreUrl = '';
const storeButton = document.getElementById('store-button');
const comingSoon = document.getElementById('coming-soon');
if (chromeStoreUrl) {
  storeButton.href = chromeStoreUrl;
  storeButton.hidden = false;
  comingSoon.hidden = true;
}

const descriptions = {
  lists: 'Give everything a home with lists you name yourself.',
  videos: 'See every video you saved in one place, with titles and thumbnails.'
};
const tabs = [...document.querySelectorAll('.preview-tab')];
function setTab(name, focus = false) {
  tabs.forEach(button => {
    const active = button.dataset.tab === name;
    button.classList.toggle('active', active);
    button.setAttribute('aria-selected', String(active));
    button.tabIndex = active ? 0 : -1;
    if (active && focus) button.focus();
  });
  document.querySelectorAll('.preview-screen').forEach(panel => {
    panel.hidden = panel.id !== `panel-${name}`;
  });
  document.getElementById('preview-description').textContent = descriptions[name];
}
tabs.forEach((button, index) => {
  button.addEventListener('click', () => setTab(button.dataset.tab));
  button.addEventListener('keydown', (event) => {
    if (!['ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(event.key)) return;
    event.preventDefault();
    const next = event.key === 'Home' ? 0 : event.key === 'End' ? tabs.length - 1 : (index + (event.key === 'ArrowRight' ? 1 : -1) + tabs.length) % tabs.length;
    setTab(tabs[next].dataset.tab, true);
  });
});

const revealElements = document.querySelectorAll('[data-reveal]');
if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('revealed');
      observer.unobserve(entry.target);
    });
  }, {threshold:.12});
  revealElements.forEach(element => observer.observe(element));
} else {
  revealElements.forEach(element => element.classList.add('revealed'));
}
