let counter = document.getElementById('counter');

chrome.storage.sync.get('count', (data) => {
  counter.innerHTML = data.count;
});

chrome.storage.sync.get('host', (data) => {
  hostNameText.innerHTML = data.host;
});

resetCounter.onclick = () => {
  counter.innerHTML = 0; // Visibly reset before syncing w/ storage
  chrome.storage.sync.set({count: 0}, () => {
    console.log("counter reset");
  })
};
