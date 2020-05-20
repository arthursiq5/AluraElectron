const jsonfile = require('jsonfile-promised');
const fs = require('fs');

module.exports = {
    salvaDados(curso, tempoEstudado) {
        let arquivoDoCurso = __dirname + '/data/' + curso + '.json';
        if (fs.existsSync(arquivoDoCurso)) {
            // Salva os dados
        } else {
            this.criaArquivoDeCurso(arquivoDoCurso, {})
                .then(() => {
                    // Salva os dados
                });
        }
    },
    
    adicionaTempoAoCurso(arquivoDoCurso, tempoEstudado) {
        let dados = {
            ultimoEstudo: new Date().toString(),
            tempo: tempoEstudado
        }
        jsonfile.writeFile(arquivoDoCurso, dados)
            .then(() => {
                console.log('Tempo salvo com sucesso');
            }).catch((err) => {
                console.log(err);
            })
    },

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