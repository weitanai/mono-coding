chrome.runtime.onInstalled.addListener(() => {
    chrome.action.setBadgeText({
        text: "OFF",
    }, function () {
        console.log("---chrome ex-----");
    });
});

function getTabId() { }
chrome.tabs.onActivated.addListener(function (tab) {
    chrome.scripting.executeScript(
        {
            target: { tabId: getTabId() },
            files: ["scripts/content.js"],
        }
    ).then((result) => {
        console.log("script injected in all frames", result);
    }).catch((err) => {
        console.err(err);
    });
});
