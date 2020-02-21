chrome.downloads.onDeterminingFilename.addListener(function(item, suggest) {
    suggest({filename: item.filename,
             conflict_action: 'overwrite',
             conflictAction: 'overwrite'});
});

chrome.downloads.onCreated.addListener(function(downloadItem) {
    // console = chrome.extension.getBackgroundPage().console;
    if(downloadItem.filename){
        console.log("File name with local path = ", downloadItem.filename);
    }
    else{
        console.log("can't get filename");
    }
    console.log("Mime = ", downloadItem.mime);
    console.log("ID = ", downloadItem.id);
    console.log("Start = ", downloadItem.startTime);
});

chrome.storage.onChanged.addListener(function(changes, areaName){
    chrome.storage.sync.get(['sBox'], function(result){
        console.log("new value = ", changes.newValue);
    });
});


function restoreOptions(){
    chrome.storage.sync.get({
        'initVal' : false
    }, function(item) {
        document.getElementById('boxed').checked = item.initVal;
    });
}