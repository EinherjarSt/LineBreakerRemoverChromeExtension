let active;

chrome.storage.local.get(['active'], function(result) {
    active = result.active;
})

chrome.storage.onChanged.addListener(function(changes, namespace) {
    if (changes.active) {
        console.log("Cambiado el valor de active a ")
        active = changes.active.newValue;
        console.log(active);
    }
});

// on copy event, send a message to background.html
function onPaste(e) {
    if (active) {
        let target = e.target;
        let paste = (e.clipboardData || window.clipboardData).getData('text');
        target.value = paste.replace(/\r\n/g, " ");
        e.preventDefault();
    }
}

//register event listener for copy events on document
document.addEventListener('paste', onPaste, true);