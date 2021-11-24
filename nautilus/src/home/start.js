//Includes
const {app, BrowserWindow} = require('electron');
const path = require('path');
let json = require(__dirname + "/pages/misc/settings.json");

var page;

if (require('electron-squirrel-startup')) {
  app.quit();
}

if (json['1']['emailText'] == null || json['1']['emailText'] == '') {
  page = '/pages/welcome.html';
} else {
  page = '/index.html';
}

//Function to create a browser window
const createWindow = () => {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 1600, //Window width
    height: 900, //Window height
    minWidth: 1000,
    minHeight: 800,
    titleBarStyle: 'hiddenInset',
    frame: false,
    fullscreen: false,
    webPreferences: { //Preferences
      nodeIntegration: true,
      enableRemoteModule: true,
    },
  });

  
  console.log("Creating window")
  //Set the window to be start.html
  mainWindow.loadFile(path.join(__dirname, page));
  //mainWindow.removeMenu();

  var appRoot = path.join(__dirname, '../..');  
  require('electron-compile').init(appRoot, require.resolve('./start'));
};

app.on('ready', createWindow); //When app is ready, create the window

//When all windows are closed, quit the app.
//if running macOS (darwin), dont quit the app upon window close. 
//the user will explicitly quit the app with CMD+Q on macOS.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

//when focus is returned or started, and there are no windows open, create a new window.
app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});