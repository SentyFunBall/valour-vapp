//Includes
const { app, BrowserWindow } = require('electron');
const path = require('path');

if (require('electron-squirrel-startup')) {
  app.quit();
}

//Function to create a browser window
const createWindow = () => {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 1250, //Window width
    height: 800, //Window height
    webPreferences: { //Preferences
      nodeIntegration: true,
      enableRemoteModule: true,
    },
  });

  //Set the window to be start.html
  mainWindow.loadFile(path.join(__dirname, 'start.html'));
};
app.on('ready', createWindow); //When app is ready, create the window

//When all windows are closed, quit the app.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

//When app activates, if there are no browser windows, create one.
app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});