// buena parctica de codigo

const autenticado = true;

if (autenticado === true) {
    console.log(' usuario autenticado');
}
// no es necesario evaluar un true porque ya se 
// da por echo que autenticado esta como true
// abajo correcto escrito

if (autenticado) {
    console.log(' usuario autenticado');
}


const puntaje = 500;

if (puntaje > 300) {
    console.log('Buen puntaje... felicitat');
} else if (puntaje > 400) {
    console.log('Excelente');
}

// if solo ejectua la primera que se cumple
// es importante entender como se va ejecutar el codigo
// abajo correcto arriba error

if (puntaje > 400) {
    console.log('Excelente');
} else if (puntaje > 300) {
    console.log('Buen puntaje... felicitat');
}

// Mucha gente no utiliza el else if sino directo solo if
// Esto lo declaramos dentro de una funcion y los returns para
// que solo ejecute el 1r if que este bien y pare

function revisarPuntaje() {
    if (puntaje > 400) {
        console.log('Excelente');
        return;
    }

    if (puntaje > 300) {
        console.log('Buen puntaje... felicitat');
        return;
    }

}

revisarPuntaje();