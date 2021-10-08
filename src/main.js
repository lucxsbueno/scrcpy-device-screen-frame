const { app, BrowserWindow } = require('electron');

let mainWindow;

app.on('ready', () => {
   mainWindow = new BrowserWindow({
      width: 345,
      height: 767,
      // frame: false,
      titleBarStyle: 'hidden',
      alwaysOnTop: true,
      backgroundColor: '#00000000',
      transparent: true
   });

   mainWindow.loadURL(`file://${__dirname}/public/index.html`);

});