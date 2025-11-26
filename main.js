const { app, BrowserWindow, session } = require("electron");
const path = require("path");

function createWindow() {
  const win = new BrowserWindow({
    width: 1400,
    height: 900,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
      webviewTag: true   // ✅ REQUIRED for <webview>
    }
  });

  win.loadFile("index.html");

  // Download support
  session.defaultSession.on("will-download", (event, item) => {
    item.setSavePath(
      app.getPath("downloads") + "/" + item.getFilename()
    );
  });
}

app.whenReady().then(createWindow);
