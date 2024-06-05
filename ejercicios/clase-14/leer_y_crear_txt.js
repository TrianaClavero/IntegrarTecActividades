const fs = require('fs');
const path = require('path');

function contarNumerosPares(filePath) {
    try {
        const data = fs.readFileSync(filePath, 'utf8');

        const numeros = data.split(/\s+/).map(Number);

        let count = 0;
        numeros.forEach(num => {
            if (!isNaN(num) && num % 2 === 0) {
                count++;
            }
        });
        
        return count;
    } catch (err) {
        console.error('Error leyendo el archivo:', err);
        return null;
    }
}

const inputFilePath = path.join(__dirname, 'datos.txt');

const numPares = contarNumerosPares(inputFilePath);

if (numPares !== null) {
    const outputContent = `La cantidad de números pares es: ${numPares}`;

    const outputFilePath = path.join(__dirname, 'resultado.txt');

    fs.writeFileSync(outputFilePath, outputContent, 'utf8');
    console.log('Resultado escrito en resultado.txt');
} else {
    console.log('No se pudo contar los números pares.');
}
