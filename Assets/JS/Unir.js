fetch('../../Partials/Header.html')
  .then(res => res.text())
  .then(html => { document.getElementById('header-placeholder').innerHTML = html; });

fetch('../../Partials/Footer.html')
  .then(res => res.text())
  .then(html => { document.getElementById('footer-placeholder').innerHTML = html; });

document.addEventListener('click', (e) => {
  if (e.target.closest('.nav-toggle')) {
    document.querySelector('.nav').classList.toggle('abierto');
  }
});