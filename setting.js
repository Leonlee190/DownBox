function toSetting() {
    chrome.windows.create({
        url: "popup.html",
        type: "popup",
        state: "minimized"
    }, function(window){});
};

// document.getElementById("go-back").addEventListener("click", toSetting());