

const argv= require('yargs')
                            .option('b',{
                                alias: 'base',
                                type: 'number',
                                demandOption: true,
                                describe: 'Es la base de la tabla de multiplicar'.blue
                            })
                            .option('h',{
                                alias: 'hasta',
                                type: 'number',
                                describe:'Es el limite de nuestras tablas de multiplicar'.blue
                            })
                            .option('x',{
                                alias: 'xs',
                                type: 'number',
                                describe: 'Parametro para multiplicar hasta cierto numero'.blue
                            })
                            .option('l',{
                                alias: 'listar',
                                type: 'boolean',
                                default: false,
                                describe:'Muestra la tabla en consola'.blue
                            })
                            
                            .check( (argv,option) => {
                                console.log('yargs',argv)
                                if ( isNaN(argv.b) ){
                                        throw('La base tiene que ser un numero').error;
                                }
                                return true;
                            })
                            .argv;

module.exports = argv;