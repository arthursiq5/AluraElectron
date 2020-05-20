const moment = require('moment');

let segundos;

module.exports = {
    iniciar(el) {
        let tempo = moment.duration(el.textContent);
        segundos = tempo.asSeconds();
        setInterval(function () {

        }, 1000);
    },
    parar() {

    }
}