// Initialize the counter
chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({count: 0}, () => {
    console.log('Counter Started');
  });

  chrome.storage.sync.set({host: 'google.com'}, () => {
    console.log("host set to google.com")
  });
});


let host;
chrome.runtime.onMessage.addListener((msg, sender, sendReponse) => {
  if (msg.newHost) {
    chrome.storage.sync.get('hostURL', (data) => {
      host = data.hostURL;
      sendReponse({receivedNewHost: true});
    });
  }
});
// On a google.com hosted page load
chrome.webNavigation.onCompleted.addListener(function() {
  // console.log("I am connected");
  // Get and increment counter
  chrome.storage.sync.get('count', (data) => {
    chrome.storage.sync.set({count: data.count + 1}, () => {
      console.log("counter updated");
    })
  })
}, {url: [{hostContains: host}]});