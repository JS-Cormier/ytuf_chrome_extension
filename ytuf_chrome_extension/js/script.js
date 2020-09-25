chrome.browserAction.onClicked.addListener(function(activeTab) {
	if (!activeTab.url.startsWith("https://www.youtube.com/watch?v=")) {
		window.alert("You must be on a YouTube video page for this to work!");
	} else {
		embedUrl = activeTab.url.replace("/watch?v=", "/embed/");
		var trimmedUrl = embedUrl.split("&")[0];
		chrome.tabs.create({url: trimmedUrl});
	}
});