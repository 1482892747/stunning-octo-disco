const toggle = document.querySelector('#theme');
try { document.body.classList.toggle('dark', localStorage.getItem('theme') === 'dark'); } catch (_) {}
toggle.addEventListener('click', () => {
  const dark = document.body.classList.toggle('dark');
  toggle.setAttribute('aria-pressed', String(dark));
  try { localStorage.setItem('theme', dark ? 'dark' : 'light'); } catch (_) {}
});
toggle.setAttribute('aria-pressed', String(document.body.classList.contains('dark')));
document.querySelector('#year').textContent = new Date().getFullYear();
