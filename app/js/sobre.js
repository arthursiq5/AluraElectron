const { ipcRenderer } = require('electron');

let linkFechar = document.getElementById('link-sobre');

linkFechar.addEventListener('click', () => {
    ipcRenderer.send('fechar-janela-sobre');
});
