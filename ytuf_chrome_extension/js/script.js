chrome.browserAction.onClicked.addListener(function(activeTab) {
	if (!activeTab.url.startsWith("https://www.youtube.com/watch?v=")) {
		window.alert("You must be on a YouTube video page for this to work!");
	} else {
		embedUrl = activeTab.url.replace("/watch?v=", "/embed/");
		var html = `
		<head>
			<title>${activeTab.title}</title>
		</head>
		<body bgcolor='#282828'>
			<iframe width='100%'
					height='97%' 
					src=${embedUrl} />
		</body>`;
		var url = `javascript:document.write(\"${html}\")`;
		chrome.tabs.create({url: url});
	}
});