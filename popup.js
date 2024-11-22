document.getElementById('toggleDarkMode').addEventListener('click', () => {
    // Obtener la pestaña activa
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      // Ejecutar el script en la pestaña activa
      chrome.scripting.executeScript({
        target: { tabId: tabs[0].id },
        func: toggleDarkMode
      });
    });
  });
  
  function toggleDarkMode() {

    const body = document.body;
    body.classList.toggle('dark-mode');
  
    saveUserPreference(body.classList.contains('dark-mode'));
  }
  
  function saveUserPreference(isDarkMode) {
    chrome.storage.local.set({ darkMode: isDarkMode });
  }
  