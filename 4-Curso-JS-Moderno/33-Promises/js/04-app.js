// callback --> promises //

const paises4 = [];

const nuevoPais4 = pais => new Promise(resolve => {
    setTimeout(() => {
        paises4.push(pais);
        resolve('Se cumplio el promis y agrego el nuevo pais correcto')
    }, 3000);
})

nuevoPais4('Georgia')
    .then(resultado => {
        console.log(resultado);
        console.log(paises4);
        return nuevoPais4('Italia')
    })
    .then(res => {
        console.log(res);
        console.log(paises4);
        return nuevoPais4('Suiza')
    })
    .then(respuesta => {
        console.log(respuesta);
        console.log(paises4);
    })