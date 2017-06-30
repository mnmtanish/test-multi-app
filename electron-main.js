const { app, BrowserWindow } = require('electron');
const path = require('path');
const url = require('url');

function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
  });

  if (process.env.NODE_ENV === 'production') {
    win.loadURL(url.format({
      pathname: path.join(__dirname, 'index.html'),
      protocol: 'file:',
      slashes: true,
    }));
  } else {
    win.loadURL(url.format({
      hostname: 'localhost',
      port: '4200',
      protocol: 'http:',
      slashes: true,
    }));
    win.webContents.openDevTools({ detach: true });
  }

  return win;
}

app.commandLine.appendSwitch('disable-http-cache');

app.on('ready', function () {
  let win = createWindow();

  // Quit when all windows are closed.
  app.on('window-all-closed', () => {
    // On macOS it is common for applications and their menu bar
    // to stay active until the user quits explicitly with Cmd + Q
    if (process.platform !== 'darwin') {
      app.quit();
    }
  });

  app.on('activate', () => {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (win === null) {
      win = createWindow();
    }
  });
});
