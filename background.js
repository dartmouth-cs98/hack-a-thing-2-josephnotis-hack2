// Initialize the counter
chrome.runtime.onInstalled.addListener(function() {
  chrome.storage.sync.set({count: 0}, function() {
    console.log('Counter Started');
  });
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
}, {url: [{hostContains: 'google.com'}]});