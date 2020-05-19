const { ipcRenderer, shell } = require('electron');
const process = require('process');

let linkFechar = document.getElementById('link-sobre');
let linkGithub = document.getElementById('link-github');
let versaoElectron = document.getElementById('versao-electron');

linkFechar.addEventListener('click', () => {
    ipcRenderer.send('fechar-janela-sobre');
});

linkGithub.addEventListener('click', () => {
    shell.openExternal('https://github.com/arthursiq5')
});

window.onload = () => {
    versaoElectron.textContent = process.versions.electron;
}