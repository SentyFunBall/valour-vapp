//Includes
const { app, BrowserWindow, shell} = require('electron');
const path = require('path');
let json = require(__dirname + "/pages/misc/settings.json");

var startupPage;

if (require('electron-squirrel-startup')) {
  app.quit();
  return;
}

if (json['1'] == null || json['1']['emailText'] == null) {
  startupPage = '/pages/welcome.html';
} else {
  startupPage = '/index.html';
}

//Function to create a browser window
const createWindow = () => {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 1600, //Window width
    height: 900, //Window height
    minWidth: 1000,
    minHeight: 800,
    webPreferences: { //Preferences
      nodeIntegration: true,
      enableRemoteModule: true,
    },
  });

  var appRoot = path.join(__dirname, '../..');

  console.log("Creating window")
  //Set the window to be start.html
  mainWindow.loadFile(path.join(__dirname, startupPage));
  mainWindow.setIcon(path.join(appRoot, './src/assets/icons/icon.ico'));
  //mainWindow.removeMenu();
  require('electron-compile').init(appRoot, require.resolve('./start'));
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
  createWindow();
});