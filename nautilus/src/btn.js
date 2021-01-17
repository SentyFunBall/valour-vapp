const {ipcMain, dialog} = require('electron')
const { app, BrowserWindow } = require('electron');
const path = require('path');
const os = require('os')

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