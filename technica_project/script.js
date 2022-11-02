function handleCreated(tab) {
    //tab = getCurrentTab();
    function sw() {
        chrome.tabs.query({currentWindow: true}, function(tab){
            chrome.tabs.reload(tab.id);
        })
    };
    setInterval(sw, 500);
    chrome.tabs.onRemoved.addListener(handleRemoved);
}
function handleRemoved(tab) {
    handleCreated(tab).stop();
}

async function getCurrentTab() {
    let queryOptions = { active: true, lastFocusedWindow: true };
    // `tab` will either be a `tabs.Tab` instance or `undefined`.
    let [tab] = await chrome.tabs.query(queryOptions);
    return tab;
  }

chrome.tabs.onCreated.addListener(handleCreated);


// Storage.prototype.setObject = function(key, value) {
//     this.setItem(key, JSON.stringify(value));
// };

// Storage.prototype.getObject = function(key) {
//     return this.getItem(key) && JSON.parse(this.getItem(key));
// };

// function init() {
//     localStorage.setObject('tabsOpen', 0);
//     var tabsTotal = localStorage.getObject('tabsTotal');
//     if (!tabsTotal)
// 		localStorage.setObject('tabsTotal', 0);

//     chrome.tabs.onCreated.addListener(function() {
// 		incrementTabOpenCount(1);
// 	});
// }

// function incrementTabOpenCount(count) {

// 	if (!count)
// 		count = 1;

// 	localStorage.setObject('tabsOpen', localStorage.getObject('tabsOpen') + count);
// 	localStorage.setObject('tabsTotal', localStorage.getObject('tabsTotal') + count);

// 	updateTabOpenCount();
// }

// function updateTabOpenCount() {
// 	chrome.browserAction.setBadgeText({text: localStorage.getObject('tabsOpen').toString()});
// }
