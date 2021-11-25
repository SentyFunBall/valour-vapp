//Includes
const {app, BrowserWindow} = require('electron');
const path = require('path');
let json = require(__dirname + "/pages/misc/settings.json");

var page;

if (require('electron-squirrel-startup')) {
  app.quit();
}

//Function to create a browser window
const createWindow = () => {
  // Create the browser window.
  var mainWindow

  //check if setup is already completed
  if (json['1']['setup'] != true) {
    page = '/pages/welcome.html';
  } else {
    page = '/index.html';
  }

  //create window settings based on platform (linux coming Soon™)
  if(process.platform === 'darwin') {
    mainWindow = new BrowserWindow({
      width: 1600, //Window width
      height: 800, //Window height
      minWidth: 1000,
      minHeight: 700,
      titleBarStyle: 'hidden',
      frame: false,
      webPreferences: { //Preferences
        nodeIntegration: true,
        enableRemoteModule: true,
      },
    });
  } else {
    mainWindow = new BrowserWindow({
      width: 1600, //Window width
      height: 900, //Window height
      minWidth: 1000,
      minHeight: 800,
      webPreferences: { //Preferences
        nodeIntegration: true,
        enableRemoteModule: true,
      },
    });
  }

  
  console.log("Creating window")
  //Set the window to be index or welcome, depending on setup bool
  mainWindow.loadFile(path.join(__dirname, page));

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