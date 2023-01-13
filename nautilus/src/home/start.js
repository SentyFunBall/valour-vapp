//Includes
const {app, BrowserWindow} = require('electron');
const path = require('path');
const fs = require('fs')
const windowStateKeeper = require('electron-window-state');
const { setupTitlebar, attachTitlebarToWindow } = require("custom-electron-titlebar/main");

var page;

// setup the titlebar main process
setupTitlebar();

if (require('electron-squirrel-startup')) {
  app.quit();
}

//Function to create a browser window
const createWindow = () => {
  console.log("Checking stuff..")
  if(!fs.existsSync(app.getPath("userData") + "/saves")) { fs.mkdirSync(app.getPath("userData") + "/saves") }
  if(!fs.existsSync(app.getPath("userData") + "/exports")) { fs.mkdirSync(app.getPath("userData") + "/exports") }
  if(!fs.existsSync(app.getPath('userData') + "/settings.json")) { fs.writeFileSync(app.getPath('userData') + "/settings.json", JSON.stringify({'1':{"emailText": null,"passText": null,"token": null,"info": null,"setup": false}})) }

  let json = require(app.getPath('userData') + "/settings.json");

  if(!json['1']['recents']) {
    json['1']['recents'] = {
      1: {
        filename: "",
        path: "",
      },
      2: {
        filename: "",
        path: "",
      },
      3: {
        filename: "",
        path: "",
      },
      4: {
        filename: "",
        path: "",
      },
      5: {
        filename: "",
        path: "",
      },
      6: {
        filename: "",
        path: "",
      },
      7: {
        filename: "",
        path: "",
      },
      8: {
        filename: "",
        path: "",
      },
      9: {
        filename: "",
        path: "",
      },
      10: {
        filename: "",
        path: "",
      }
    }
    fs.writeFileSync(app.getPath('userData') + "/settings.json", JSON.stringify(json))
  }

  console.log("Creating window")
  // Create the browser window.
  var mainWindow

  //check if setup is already completed
  if (json['1']['setup'] != true) {
    page = '/pages/welcome.html';
  } else {
    page = '/index.html';
  }

  let mainWindowState = windowStateKeeper({
    defaultWidth: 1400,
    defaultHeight: 960
  });

  //create window settings based on platform (linux coming Soon™)
  if(process.platform === 'darwin') {
    mainWindow = new BrowserWindow({
      x: mainWindowState.x, //mainWindowState will keep the pos of the window for next time, very cool.
      y: mainWindowState.y,
      width: mainWindowState.width, //Window width
      height: mainWindowState.height, //Window height
      minWidth: 1300,
      minHeight: 920,
      titleBarStyle: 'hidden',
      frame: false,
      webPreferences: { //Preferences
        nodeIntegration: true,
        enableRemoteModule: true,
      },
    });
  } else {
    mainWindow = new BrowserWindow({
      x: mainWindowState.x,
      y: mainWindowState.y,
      width: mainWindowState.width, //Window width
      height: mainWindowState.height, //Window height
      minWidth: 1300,
      minHeight: 920,
      titleBarStyle: 'hidden',
      frame: false,
      webPreferences: { //Preferences
        nodeIntegration: true,
        enableRemoteModule: true,
        contextIsolation: false,
      },
    });

    require("@electron/remote/main").initialize();
    require("@electron/remote/main").enable(mainWindow.webContents);
    mainWindow.setBackgroundColor('black');
  }
  //Set the window to be index or welcome, depending on setup bool
  mainWindow.loadFile(path.join(__dirname, page));
  
  var appRoot = path.join(__dirname, '../..');  
  require('electron-compile').init(appRoot, require.resolve('./start'));

  mainWindowState.manage(mainWindow);

  // attach fullscreen(f11 and not 'maximized') && focus listeners
  attachTitlebarToWindow(mainWindow);

  console.log("Window ready");
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