// chrome.downloads.onCreated.addListener(function(downloadItem) {
//     console = chrome.extension.getBackgroundPage().console;
//     console.log("File name with local path ", downloadItem.filename)
// });

document.getElementById("filepicker").addEventListener("change", function(event) {
    let output = document.getElementById("listing");
    let files = event.target.files;
  
    for (let i=0; i<files.length; i++) {
      let item = document.createElement("li");
      item.innerHTML = files[i].webkitRelativePath;
      output.appendChild(item);
    };
  }, false);


document.getElementById("boxed").addEventListener("change", function(event){
    let clicked = document.querySelector('input[value="sBox"]');

    if(clicked.checked){
        chrome.storage.sync.set({sBox: true}, function(){
            console.log("Specific box is checked");
        });
    }
    else{
        chrome.storage.sync.set({sBox: false}, function(){
            console.log("Specific box is unchecked");
        });
    }
});