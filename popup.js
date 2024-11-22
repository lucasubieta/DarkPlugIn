document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('toggleDarkMode');
  
    // Obtener el estado actual del modo oscuro desde el almacenamiento
    chrome.storage.local.get(['darkMode'], (result) => {
      if (result.darkMode) {
        button.textContent = 'Desactivar Modo Oscuro';
      } else {
        button.textContent = 'Activar Modo Oscuro';
      }
    });
  
    // Alternar el modo oscuro al hacer clic
    button.addEventListener('click', () => {
      chrome.storage.local.get(['darkMode'], (result) => {
        const newDarkMode = !result.darkMode;
  
        // Guardar la nueva preferencia en el almacenamiento
        chrome.storage.local.set({ darkMode: newDarkMode }, () => {
          button.textContent = newDarkMode ? 'Desactivar Modo Oscuro' : 'Activar Modo Oscuro';
  
          chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
            chrome.scripting.executeScript({
              target: { tabId: tabs[0].id },
              func: toggleDarkMode,
              args: [newDarkMode],
            });
          });
        });
      });
    });
  });
  
  function toggleDarkMode(isDarkMode) {
    if (isDarkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }
  