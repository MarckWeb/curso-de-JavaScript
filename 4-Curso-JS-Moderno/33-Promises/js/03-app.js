// Promises .then .catch //

const aplicarDescuento = new Promise ( (resolve, reject) => {

    const descuento = true;

    if(descuento){
        resolve ('Descuento aplicado')
    } else {
        reject('No se pudo aplicar')
    }
})


aplicarDescuento// podemos escribir tanto de la manera del .then como del .catch porq son arrowfunction
    .then( resultado => descuento(resultado))
    .catch( error =>{
        console.log(error);
    })

// tres valores possibles:
// fuvilled - el promise se cumplio
// reject - el promise no se cumplio
// pending - no se ha cumplido ni tampoco rechazado

function descuento(mensaje) {
    console.log(mensaje);
}