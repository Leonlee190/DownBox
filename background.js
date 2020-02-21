chrome.downloads.onDeterminingFilename.addListener(function(item, suggest) {
    suggest({filename: item.filename,
             conflict_action: 'overwrite',
             conflictAction: 'overwrite'});
});

chrome.downloads.onCreated.addListener(function(downloadItem) {
    // console = chrome.extension.getBackgroundPage().console;
    console.log("File name with local path = ", downloadItem.filename);
    console.log("Mime = ", downloadItem.mime);
    console.log("ID = ", downloadItem.id);
});