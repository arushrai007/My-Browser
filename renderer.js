const webview = document.getElementById("webview");
const urlBar = document.getElementById("url");
const tabsBar = document.getElementById("tabsBar");
// ✅ Welcome Message Auto Hide
window.onload = () => {
  setTimeout(() => {
    const popup = document.getElementById("welcomePopup");
    if (popup) popup.style.display = "none";
  }, 2500); // hides after 2.5 seconds
};

let tabs = [];
let currentTab = 0;

// ✅ Create first tab
tabs.push({ url: "home.html" });

function go() {
  let url = urlBar.value.trim();
  if (!url.startsWith("http")) url = "https://" + url;

  tabs[currentTab].url = url;
  webview.loadURL(url);

  updateTabTitle(url);
}

function back() { if (webview.canGoBack()) webview.goBack(); }
function forward() { if (webview.canGoForward()) webview.goForward(); }
function reload() { webview.reload(); }

/* ===== TAB SYSTEM ===== */

function newTab() {
  tabs.push({ url: "home.html" });
  currentTab = tabs.length - 1;

  renderTabs();
  webview.loadURL("home.html");
}

function switchTab(index) {
  currentTab = index;
  webview.loadURL(tabs[index].url);
  renderTabs();
}

function updateTabTitle(url) {
  let host = new URL(url).hostname.replace("www.", "");
  document.querySelectorAll(".tab")[currentTab].innerText = host;
}

function renderTabs() {
  tabsBar.innerHTML = "";

  tabs.forEach((tab, index) => {
    let div = document.createElement("div");
    div.className = "tab" + (index === currentTab ? " active" : "");
    div.innerText = tab.url === "home.html" ? "New Tab" : new URL(tab.url).hostname;
    div.onclick = () => switchTab(index);
    tabsBar.appendChild(div);
  });

  let add = document.createElement("div");
  add.className = "add-tab";
  add.innerText = "+";
  add.onclick = newTab;
  tabsBar.appendChild(add);
}
