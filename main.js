const { app, BrowserWindow, session } = require("electron");

function createWindow() {
  const win = new BrowserWindow({
    width: 1400,
    height: 900,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
      webviewTag: true
    }
  });

  win.loadFile("index.html");

  session.defaultSession.on("will-download", (event, item) => {
    console.log("Downloading:", item.getFilename());
    item.setSavePath(app.getPath("downloads") + "/" + item.getFilename());
  });
}

app.whenReady().then(createWindow);
