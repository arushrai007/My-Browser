const webview = document.getElementById("webview");
const urlBar = document.getElementById("url");

function go() {
  let url = urlBar.value.trim();

  if (!url.startsWith("http")) {
    url = "https://" + url;
  }

  webview.loadURL(url);
}

function back() {
  if (webview.canGoBack()) webview.goBack();
}

function forward() {
  if (webview.canGoForward()) webview.goForward();
}

function reload() {
  webview.reload();
}
