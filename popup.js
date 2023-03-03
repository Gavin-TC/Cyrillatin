console.log("Popup script loaded.");

// Example function to send a message to the service worker
function sendMessageToServiceWorker() {
  chrome.runtime.sendMessage({ type: "hello" }, (response) => {
    console.log("Response from service worker:", response);
  });
}