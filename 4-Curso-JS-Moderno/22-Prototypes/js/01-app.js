// PROTOTYPES

// Object literal
// No creamos objetos dinamicos ni reutilizables

const cliente = {
    nombre: 'Dani',
    saldo: 500
}

console.log(cliente);



// Object Constructor
// Creamos objectos dinamicos y reutilizable

function Cliente (nombre,saldo) {
    this.nombre = nombre;
    this.saldo = saldo;
}

const dani = new Cliente('Dani', 500);
console.log(dani);

const paula = new Cliente('Paula', 800);
console.log(paula);