const { app, BrowserWindow } = require('electron');
const path = require('path');
const os = require('os')
const {ipcRenderer} = require('electron')

const loadB = document.getElementById('loadBtn')
const newB = document.getElementById('newBtn')

loadB.addEventListener('click', (event) => {
  ipcRenderer.send('open-file-dialog')
})

newB.addEventListener('click', (event) => {
    ipcRenderer.send('open-error-dialog')
})