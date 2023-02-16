const {crearArchivo} = require('./helpers/mulX');

console.clear();

console.log(process.argv);

const [,,arg3,arg4] = process.argv;
const [,base] = arg3.split('=');
const [,limite] = arg4.split('=');
console.log(base,limite);

// const base =12;

crearArchivo(base,limite)
.then (nombreArchivo => console.log(nombreArchivo,'creado'))
.catch(err => console.log(err))