const {BrowserWindow} = require('electron').remote
const path = require('path')

const newWindowBtn = document.getElementById('new-window')

newWindowBtn.addEventListener('click', (event) => {
  const modalPath = path.join('file://', __dirname, 'modal.html')
  let win = new BrowserWindow({ 
    width: 400, 
    height: 320,
    webPreferences: {
      nodeIntegration: true,
      enableRemoteModule: true,
    },
  })

  win.on('close', () => { win = null })
  win.loadURL(modalPath)
  win.show()
})
