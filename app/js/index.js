const { ipcRenderer } = require('electron');
const timer = require('./timer');
const data = require('../../data');

let linkSobre = document.getElementById('link-sobre');
let botaoPlay = document.querySelector('.botao-play');

let imgs = ['./img/play-button.svg', './img/stop-button.svg']

let tempo = document.querySelector('.tempo');
let curso = document.querySelector('.curso');

let play = false;

linkSobre.addEventListener('click', () => {
    ipcRenderer.send('abrir-janela-sobre');
});


window.onload = () => {
    data.pegaDados(curso.textContent)
        .then((dados) => {
            tempo.textContent = dados.tempo;
        })
};


botaoPlay.addEventListener('click', () => {
    if (play) {
        timer.parar(curso);
        play = false;
    } else {
        timer.iniciar(tempo);
        play = true;
    }
    imgs = imgs.reverse();
    botaoPlay.src = imgs[0];
}) 
