const webview = document.getElementById("webview");
const urlBar = document.getElementById("url");
const tabs = document.getElementById("tabs");
const aiPanel = document.getElementById("aiPanel");
let isDark = true;

function go() {
  let url = urlBar.value.trim();
  if (!url.startsWith("http")) url = "https://" + url;
  webview.loadURL(url);
  addTab(url);
}

function back() { if (webview.canGoBack()) webview.goBack(); }
function forward() { if (webview.canGoForward()) webview.goForward(); }
function reload() { webview.reload(); }

/* ===== TABS ===== */
function addTab(url) {
  const tab = document.createElement("div");
  tab.className = "tab active";
  tab.innerText = new URL(url).hostname;

  document.querySelectorAll(".tab").forEach(t => t.classList.remove("active"));
  tab.onclick = () => webview.loadURL(url);

  tabs.appendChild(tab);
}

function newTab() {
  webview.loadURL("https://google.com");
}

/* ===== THEME ===== */
function toggleTheme() {
  isDark = !isDark;
  document.body.classList.toggle("light");
}

/* ===== AI PANEL ===== */
function toggleAI() {
  aiPanel.classList.toggle("open");
}
