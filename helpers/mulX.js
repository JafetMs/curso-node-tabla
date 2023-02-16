const fs = require('fs');

// const crearArchivo = (base) => {

//     return new Promise ( (resolve,reject) => {

//         console.log('=============================')
//         console.log(`Tabla del ${base}`)
//         console.log('=============================')


//         let salida = '';

//         for (let i=1;i<=10;i++){

//             salida +=(`${base} x ${i} = ${base * i} \n`);
        
//         }

//         console.log(salida);

//         fs.writeFileSync(`tabla-${base}.txt`,salida );

//         console.log(`Tabla-${base}.txt creado`)
//         salida? resolve('Si se pudo') : reject('error')

//     });
// }

const crearArchivo = async (base,limite) => {

        try {
            for (let j=base;j<=limite;j++){
                console.log('=============================')
                console.log(`Tabla del ${j}`)
                console.log('=============================')
            
            
                let salida = '';
            
                for (let i=1;i<=10;i++){
                    
                    salida +=(`${j} x ${i} = ${j * i} \n`);
                   
                }
            console.log(salida);
                
            fs.writeFileSync(`tabla-${j}.txt`,salida );
    
            
            }
        } catch (err) {
            throw err
        }

       

}

module.exports = {
    crearArchivo
}

