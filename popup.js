document.getElementById("button").addEventListener("click", (e) => {
    chrome.storage.local.get(['active'], function(result) {
        if (result.active) {
            chrome.storage.local.set({ active: false }, () => {
                console.log("Desactivando extension")
            });
        } else {
            chrome.storage.local.set({ active: true }, () => {
                console.log("Activando extension");
            });
        }
        actualizarEstado();
    });
})

function actualizarEstado() {
    chrome.storage.local.get(['active'], function(result) {
        if (result.active) {
            document.getElementById("button").innerHTML = "Desactivar";
        } else {
            document.getElementById("button").innerHTML = "Activar";
        }
    });
}

actualizarEstado();