const fs = require('fs');
const colors = require('colors');

const crearArchivo = async (base = 2, listar = false, hasta= 10) => {

    try {
        let salida = '';
        let consola = '';

        console.clear();
        console.log('==========='.green)
        console.log(`tabla del ${base}`.green)
        console.log('==========='.green)

        for (let i = 1; i <= hasta; i++) {
            salida += `${base} x ${i} = ${base * i}\n`;
            consola += `${base} ${'x'.green} ${i} ${'='.green} ${base * i}\n`;
        }

        if (listar) {
            console.log(consola)
        }

        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);

        return `tabla-${base}.txt creado`.rainbow;
    } catch (error) {
        throw error
    }
}

module.exports = {
    crearArchivo
}