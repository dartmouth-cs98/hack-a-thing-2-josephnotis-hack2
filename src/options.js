updateBtn.onclick = () => {
  const newHost = document.getElementById('hostName');
  chrome.storage.sync.set({host: newHost.value}, () => {
    console.log(`Host updated to ${newHost.value}`);
    newHost.value = "";
  });
};