const opts = 
{
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        default: 10,
        alias: 'l'
    }
}

const argv = require('yargs')
    .command('crear', 'Crear el archivo de la tabla de multiplicar', opts )
    .command('listar', 'Imprime  en consola la tabla de multiplicar', opts )
    .help()
    .argv;

let getComando = () => argv._[0];

module.exports = {argv, getComando};