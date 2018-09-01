const argv = require('./config/yargs').argv,
    colors = require('colors');


const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar.js');

let comando = argv._[0];

switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite)
        break;

    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`archivo creado: ${archivo}`.red))
            .catch(error => console.log(`El error es: ${error}`));
        break;

    default:
        console.log('Comando no reocnocido');
}

// let argv2 = process.argv;

// console.log(argv.base);
// console.log(argv.limite);

// let parametro = argv[2];
// let base = parametro.split('=')[1];

// console.log(base);