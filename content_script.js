var s = document.createElement('script');
// TODO: add "script.js" to web_accessible_resources in manifest.json
s.src = chrome.extension.getURL('embed.js');
s.charset = "utf-8";
s.onload = function() {
    this.remove();
};
(document.head || document.documentElement).appendChild(s);

var s = document.createElement('script');
// TODO: add "script.js" to web_accessible_resources in manifest.json
s.src = "https://cdn.jsdelivr.net/npm/clipboard@1/dist/clipboard.min.js";
s.onload = function() {
    this.remove();
};
(document.head || document.documentElement).appendChild(s);
