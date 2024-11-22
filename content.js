// Verificar si el usuario tiene preferencia por el modo oscuro
const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");

if (prefersDarkScheme.matches) {
  document.body.classList.add('dark-mode');
}

prefersDarkScheme.addEventListener('change', (e) => {
  if (e.matches) {
    document.body.classList.add('dark-mode');
  } else {
    document.body.classList.remove('dark-mode');
  }
});

const observer = new MutationObserver(() => {
  if (document.body.classList.contains('dark-mode')) {
    document.body.classList.add('dark-mode');
  }
});

observer.observe(document.body, { childList: true, subtree: true });
