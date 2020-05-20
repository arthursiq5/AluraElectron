const moment = require('moment');

module.exports = {
    iniciar(el) {
        let tempo = moment.duration(el.textContent);
        setInterval(function () {

        }, 1000);
    },
    parar() {

    }
}