// chrome.downloads.onCreated.addListener(function(downloadItem) {
//     console = chrome.extension.getBackgroundPage().console;
//     console.log("File name with local path ", downloadItem.filename)
// });

function boxChecker(){
    var specBox = document.getElementById("boxed").checked;
    var dateBox = document.getElementById("date-boxed").checked;
    var turnoff = document.getElementById("turn-off").checked;

    chrome.storage.sync.set({
        sBox : specBox,
        dBox : dateBox,
        tBox : turnoff
    }, function(){
        console.log("Boxes updated");
    });
}

function restoreOption(){
    chrome.storage.sync.get({
        sBox: false,
        dBox: false,
        tBox: false
    }, function(items){
        document.getElementById("boxed").checked = items.sBox;
        document.getElementById("date-boxed").checked = items.dBox;
        document.getElementById("turn-off").checked = items.tBox;
    })
}

document.addEventListener('DOMContentLoaded', function () {
    restoreOption();
    document.getElementById("boxed").addEventListener('click', boxChecker);
    document.getElementById("date-boxed").addEventListener('click', boxChecker);
    document.getElementById("turn-off").addEventListener('click', boxChecker);
    console.log("DOM Loaded");
});