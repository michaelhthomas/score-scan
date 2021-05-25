const fs = require('fs')
const { ipcMain } = require('electron')

ipcMain.handle('list-library', (event, ...args) => {
  fs
})