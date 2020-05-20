const moment = require('moment');

let segundos;

module.exports = {
    iniciar(el) {
        let tempo = moment.duration(el.textContent);
        segundos = tempo.asSeconds();
        setInterval(function () {
            segundos++;
            el.textContent = this.segundosParaTempo(segundos);
        }, 1000);
    },
    
    parar() {

    },

    segundosParaTempo(segundos) {
        return moment().startOf('day').seconds(segundos).format("HH:mm:ss");
    }
}