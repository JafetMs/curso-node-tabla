const {mulH,mulX} = require('./helpers/multiplicar');

const argv = require('./config/yargs');


console.clear();

console.log(argv);


if(!argv.h && !argv.x){
    console.log('No definiste l ni x');
}else if (argv.h && !argv.x){
    mulH(argv.b, argv.h,argv.l)
    .then (nombreArchivo => console.log('Archivos creados con exito'))
    .catch(err => console.log(err));
}else if (argv.x && !argv.h){
    mulX(argv.b, argv.x,argv.l)
    .then (nombreArchivo => console.log(nombreArchivo,'creado'))
    .catch(err => console.log(err));
}else{
    console.log('No puedes definir ambos')
}
