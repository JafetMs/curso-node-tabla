const fs = require('fs');
const colors = require('../config/colors');

const crearArchivo = async (base,listar,hasta) => {
        try {
            
            for(let j = base;j<=hasta;j++){
                let salida = '';
                let consola = '';
                for (let i=1;i<=10;i++){
    
                    consola +=(`${j} ${'x'.yellow} ${i} = ${j * i} \n`);
                    salida +=(`${j} x ${i} = ${j * i} \n`);
                
                }
                if (listar){
                    console.log('============================='.gray)
                    console.log(`Tabla del ${j}`.blue)
                    console.log('============================='.gray)
        
                    console.log(consola);
        
                  }
                  fs.writeFileSync(`./salida/tabla${j}.txt`,salida );
                  
            }
            
    

            
         
        } catch (err) {
            throw err
        }

}

module.exports = {
    crearArchivo
}

