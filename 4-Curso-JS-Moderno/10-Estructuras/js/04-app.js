//operador mayor que y menor que

const dinero = 300;

const totalAPagar = 500;

const tarjeta = true;

const cheque = true;

if (dinero >= totalAPagar) {
    console.log('si podemos pagar');
} else if (tarjeta) {
    console.log('si puedo pagar porque tengo tarjeta');
} else if (cheque) {
    console.log('si tengo un cheque');
} else {
    console.log('Fondos insuficientes');
}