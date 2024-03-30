

const meses8 = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const carrito8 = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]
//spread operator en array de indices

// no modifica el array original

const mese= [...meses8, 'Agosto'];
console.log(mese);

const mese1= [ 'Agosto',...meses8,];
console.log(mese1); // el oroden es importante porque es donde se colocarar en el nuevo array

// si modifica el array original

meses8.push('Agosto');
console.log(meses8);


// spread operator en array de objetos


const product = { nombre: 'Disco duro', precio: 300};

const carri= [...carrito8, product];
console.log(carri);