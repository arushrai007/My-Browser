window.addEventListener("DOMContentLoaded", () => {
  const webview = document.getElementById("webview");
  const urlInput = document.getElementById("url");
  const goBtn = document.getElementById("go");

  if (!webview || !urlInput || !goBtn) {
    console.error("UI elements not found!");
    return;
  }

  goBtn.addEventListener("click", () => {
    let url = urlInput.value.trim();

    if (!url.startsWith("http")) {
      url = "https://" + url;
    }

    console.log("Loading:", url);
    webview.setAttribute("src", url);   // ✅ WORKING METHOD
  });
});
