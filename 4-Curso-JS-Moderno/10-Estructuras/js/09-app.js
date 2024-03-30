// operador ternario

const autenticado = true;
const puedePagar = true;

console.log( autenticado ? 'Si autenticado' : 'No autenticado' );

console.log( autenticado && puedePagar ? 'Si puede pagar' : 'No autenticado' );

console.log( autenticado || puedePagar ? 'Si autenticado' : 'No autenticado' );



const efectivo = 800;
const credito = 1000;
const disponible = efectivo + credito;
const totalPagar = 600;

// if anidado

if( efectivo > totalPagar  || credito > totalPagar  || disponible > totalPagar) {
    if( efectivo > totalPagar) {
        console.log('si pagaste en efectivo');
    } else {
        console.log('otra forma de pago');
    }
} else {
    console.log('Fondos insuficientes');
}

// ternario anidado poco comun

console.log( autenticado ? puedePagar ? 'Si autenticado y puede pagar' : 'Si autenticado, no puede pagar' : 'No autenticado' );