const {BrowserWindow} = require('electron').remote
const blocklyCode = 
const path = require('path')
const electron = require('electron'); 
const fs = require('fs'); 
const newWindowBtn = document.getElementById('new-window')

newWindowBtn.addEventListener('click', (event) => {
  const modalPath = path.join('file://', __dirname, 'modal.html')
  let win = new BrowserWindow({ 
    width: 800, 
    height: 600,
    webPreferences: {
      nodeIntegration: true,
      enableRemoteModule: true,
    },
  })

  win.on('close', () => { win = null })
  win.loadURL(modalPath)
  win.show()
})

