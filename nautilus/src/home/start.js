//Includes
const { app, BrowserWindow, Menu } = require('electron');
const path = require('path');

const template = [
  {
    label: 'File',
    submenu: [
      {
        role: 'Save'
      },
      {
        role: 'Load'
      },
      {
        role: 'Run'
      },
      {
        role: 'Export'
      },
      {
        role: 'Quit'
      }
    ]
  },
  {
    label: 'Edit',
    submenu: [
       {
          role: 'undo'
       },
       {
          role: 'redo'
       },
       {
          type: 'separator'
       },
       {
          role: 'cut'
       },
       {
          role: 'copy'
       },
       {
          role: 'paste'
       }
    ]
  },
  {
    label: 'View',
    submenu: [
      {
          role: 'reload'
      },
      {
          role: 'toggledevtools'
      },
      {
          type: 'separator'
      },
      {
          role: 'resetzoom'
      },
      {
          role: 'zoomin'
      },
      {
          role: 'zoomout'
      },
      {
          type: 'separator'
      },
      {
          role: 'togglefullscreen'
      }
    ]
  },
  {
    role: 'window',
    submenu: [
      {
          role: 'minimize'
      },
      {
          role: 'close'
      }
    ]
  },
  {
    role: 'help',
    submenu: [
      {
          role: 'Website'
      },
      {
        role: 'Docs'
      },
      {
        role: 'Discord'
      },
      {
        role: 'Github'
      }
    ]
  }
]

if (require('electron-squirrel-startup')) {
  app.quit();
}

//Function to create a browser window
const createWindow = () => {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 1250, //Window width
    height: 800, //Window height
    minWidth: 1100,
    webPreferences: { //Preferences
      nodeIntegration: true,
      enableRemoteModule: true,
      slashes: true,
    },
  });
  const menu = Menu.buildFromTemplate(template)
  Menu.setApplicationMenu(menu)
  console.log("Creating window")
  //Set the window to be start.html
  mainWindow.loadFile(path.join(__dirname, 'start.html'));
  var appRoot = path.join(__dirname, '../..');
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
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});