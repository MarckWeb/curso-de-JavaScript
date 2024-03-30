"use strict"; // exige ciertas reglas para escribir el codigo

const producto ={
    nombre:"Monitor 20 pulgadas",
    precio:300,
    disponible :true,
}

Object.seal(producto); // no puedes agregar ni borrar propiedades pero si modificar

producto.disponible =false;
//producto.imagen ="imagen.jpg";
//delete producto.precio
console.log(producto); // pasa disponible a flase

console.log(Object.isSealed(producto)); // para saber si esta sellado el objeto