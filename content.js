// Al cargar la página, aplicar el modo oscuro si está activado
chrome.storage.local.get(['darkMode'], (result) => {
    if (result.darkMode) {
      document.body.classList.add('dark-mode');
    }
  });
  