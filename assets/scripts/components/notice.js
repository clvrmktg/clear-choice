const banner = document.getElementById('cookie-banner');
const consentKey = 'analytics_consent';

if (!localStorage.getItem(consentKey)) {
  banner.style.display = 'grid'; // instead of block
}

document.getElementById('accept-cookies')?.addEventListener('click', () => {
  localStorage.setItem(consentKey, 'true');
  banner.style.display = 'none';
});