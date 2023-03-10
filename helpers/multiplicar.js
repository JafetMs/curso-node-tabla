const fs = require('fs');
const colors = require('../config/colors');

const mulH = async (base,hasta,listar) => {
        try {
            
            for(let j = base;j<=hasta;j++){
                
                let salida = '';
                let consola = '';

                for (let i=1;i<=10;i++){
    
                    consola +=(`${j} ${'x'.yellow} ${i} = ${j * i} \n`);
                    salida +=(`${j} x ${i} = ${j * i} \n`);
                
                }
            if (listar){

                console.log('============================='.gray);
                console.log(`Tabla del ${j}`.blue);
                console.log('============================='.gray);
        
                console.log(consola);
                console.log(`Tabla del ${j} creado con exito`);
                
        
            }
                fs.writeFileSync(`./salida/tabla${j}.txt`,salida );
                  
            }
            
        } catch (err) {
            throw err
        }

}

const mulX = async (base,x,listar) => {

    try {
        let salida = '';
        let consola = '';
    
        for (i=1;i<=x;i++){
            consola +=(`${base} ${'x'.yellow} ${i} = ${base * i} \n`);
            salida +=(`${base} x ${i} = ${base * i} \n`);
        }

        if (listar){

            console.log('============================='.gray)
            console.log(`Tabla del ${base}`.blue)
            console.log('============================='.gray)
    
            console.log(consola);
    
        }
        
        fs.writeFileSync(`./salida/tabla${base}.txt`,salida );

        return `tabla${base}.txt`
        
    } catch (err) {
        throw err;
    }
}
module.exports = {
    mulH,
    mulX
}

