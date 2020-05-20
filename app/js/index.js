const { ipcRenderer } = require('electron');
const timer = require('./timer');

let linkSobre = document.getElementById('link-sobre');
let botaoPlay = document.querySelector('.botao-play');

let imgs = ['./img/play-button.svg', './img/stop-button.svg']

let tempo = document.querySelector('.tempo');

linkSobre.addEventListener('click', () => {
    ipcRenderer.send('abrir-janela-sobre');
});

botaoPlay.addEventListener('click', () => {
    imgs = imgs.reverse();
    timer.iniciar(tempo);
    botaoPlay.src = imgs[0];
}) 
