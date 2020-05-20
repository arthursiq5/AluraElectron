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
});

ipcRenderer.on('curso-trocado', (event, nomeCurso) => {
    timer.parar(curso.textContent);
    data.pegaDados(nomeCurso)
        .then((dados) => {
            tempo.textContent = dados.tempo;
        }).catch((err) => {
            console.log('O curso ainda não possui um JSON');
            tempo.textContent = "00:00:00";
        })
    curso.textContent = nomeCurso;
});

let botaoAdicionar = document.querySelector('.botao-adicionar');
let campoAdicionar = document.querySelector('.campo-adicionar');

botaoAdicionar.addEventListener('click', function () {
    if (campoAdicionar.value == '') {
        console.log('Não posso adicionar um curso com nome vazio');
        return;
    }

    let novoCurso = campoAdicionar.value;
    curso.textContent = novoCurso;
    tempo.textContent = '00:00:00';
    campoAdicionar.value = '';
    
    ipcRenderer.send('curso-adicionado', novoCurso);
});

ipcRenderer.on('atalho-iniciar-parar', () => {
    console.log('Atalho no renderer process');
    let click = new MouseEvent('click');
    botaoPlay.dispatchEvent(click);
});

botaoPlay.addEventListener('click', function () {
    if (play) {
        timer.parar(curso.textContent);
        play = false;
        new Notification('Alura Timer', {
            body: `O curso ${curso.textContent} foi parado!!`,
            icon: 'img/stop-button.png'
        });
    } else {
        timer.iniciar(tempo);
        play = true;
        new Notification('Alura Timer', {
            body: `O curso ${curso.textContent} foi iniciado!!`,
            icon: 'img/play-button.png'
        });
    }
    imgs = imgs.reverse();
    botaoPlay.src = imgs[0];
});
