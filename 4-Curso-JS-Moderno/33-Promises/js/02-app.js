// callback hell //

const paises2 = [];

function nuevoPais(pais,callback) {
    paises2.push(pais);
    console.log(`Agregado: ${pais}`);
    callback();
}

function mostrarPaises() {
    console.log(paises2);
}

function iniciarCallbackHell() {
    setTimeout(() => {
        nuevoPais('Alemania',mostrarPaises)

        setTimeout(() => {
            nuevoPais('Francia',mostrarPaises)

            setTimeout(() => {
                nuevoPais('Irlanda',mostrarPaises)
            }, 3000);
        }, 3000);
    }, 3000);
}

iniciarCallbackHell();