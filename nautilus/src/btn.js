const {ipcMain, dialog} = require('electron')
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

ipcMain.on('open-file-dialog', (event) => {
    dialog.showOpenDialog({
        properties: ['openDirectory']
    }, (files) => {
        if (files) {
            event.sender.send('selected-directory',files)
        }
    })
})

ipcMain.on('open-error-dialog', (event) => {
    dialog.showErrorBox('An error has occured in Nautius.', "The operation could not complete. The application may or may not close now.")
})