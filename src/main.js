const { app, BrowserWindow } = require('electron');

let mainWindow;

app.on('ready', () => {
   mainWindow = new BrowserWindow({
      width: 415,
      height: 691,
      frame: false,
      titleBarStyle: 'hidden',
      alwaysOnTop: true,
      backgroundColor: '#00000000',
      transparent: true
   });

   mainWindow.loadURL(`file://${__dirname}/public/index.html`);
});