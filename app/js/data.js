const jsonfile = require('jsonfile-promised');

module.exports = {
    criaArquivoDeCurso(nomeArquivo, conteudoArquivo) {
        jsonfile
            .writeFile(nomeArquivo, conteudoArquivo)
            .then(() => {
                console.log('Arquivo Criado');
            }).catch((err) => {
                console.log(err);
            });
    }
}