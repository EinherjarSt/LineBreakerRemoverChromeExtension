chrome.runtime.onInstalled.addListener(function() {
    chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
        chrome.declarativeContent.onPageChanged.addRules([{
            conditions: [new chrome.declarativeContent.PageStateMatcher({
                pageUrl: { hostEquals: 'www.deepl.com' },
            })],
            actions: [new chrome.declarativeContent.ShowPageAction()]
        }]);
    });

    inicializar();

});

function inicializar() {
    chrome.storage.local.get(['active'], function(result) {
        if (!result.active) {
            chrome.storage.local.set({ active: true }, () => {
                console.log("Extension activada por defecto")
            });
        }
    });
}