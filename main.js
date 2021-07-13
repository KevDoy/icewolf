const { app, BrowserWindow, ipcMain } = require('electron')
const path = require('path')

let win

function createWindow() {
	win = new BrowserWindow({
		width: 800,
		height: 600,
		hasShadow: true,
		icon: './logo-transparent.png',
		webPreferences: {
			nodeIntegration: true,
			webviewTag: true,
			enableRemoteModule: true,
			contextIsolation: false,
			preload: './preload.js'
		},
		frame: false
	})

	// win.webContents.openDevTools()

	win.loadFile('index.html')

	return win
}

app.whenReady().then(() => {
	createWindow()
})

app.on('window-all-closed', function () {
	if (process.platform !== 'darwin') app.quit()
})

require('@electron/remote/main').initialize()