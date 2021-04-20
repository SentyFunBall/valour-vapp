const {BrowserWindow} = require('electron').remote
const fs = require('fs'); 
const newWindowBtn = document.getElementById('new-window')
const path = require('path');

newWindowBtn.addEventListener('click', (event) => {
  const modalPath = path.join('file://', __dirname, '/pages/modal.html')
  let win = new BrowserWindow({ 
    width: 800, 
    height: 600,
    webPreferences: {
      nodeIntegration: true,
      enableRemoteModule: true,
    },
  })
  console.log("Opening wiki")

  win.on('close', () => { win = null })
  win.loadURL(modalPath)
  win.show()
})

