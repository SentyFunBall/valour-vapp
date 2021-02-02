const { app, BrowserWindow }=require('electron');
const path = require('path');

const newWindowBtn = document.getElementById('new-window')

newWindowBtn.addEventListener('click', (event) => {
  const modalPath = path.join(__dirname, 'wiki.html')
  let win = new BrowserWindow({ width: 400, height: 320 })

  win.on('close', () => { win = null })
  win.show()
  console.log('button')
})
