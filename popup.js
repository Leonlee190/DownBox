// chrome.downloads.onCreated.addListener(function(downloadItem) {
//     console = chrome.extension.getBackgroundPage().console;
//     console.log("File name with local path ", downloadItem.filename)
// });

document.addEventListener('DOMContentLoaded', function () {
    restoreOptions();
    document.getElementById("boxed").addEventListener('click', runTimer);
    console.log("DOM Loaded");
});