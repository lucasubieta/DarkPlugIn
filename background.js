chrome.runtime.onInstalled.addListener(() => {

    chrome.storage.local.get('darkMode', (result) => {
      const darkModeEnabled = result.darkMode;
      if (darkModeEnabled) {
        chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
          chrome.scripting.executeScript({
            target: { tabId: tabs[0].id },
            func: applyDarkMode
          });
        });
      }
    });
  });
  

  function applyDarkMode() {
    document.body.classList.add('dark-mode');
  }
  