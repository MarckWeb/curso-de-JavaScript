"use strict"; // exige ciertas reglas para escribir el codigo

const producto ={
    nombre:"Monitor 20 pulgadas",
    precio:300,
    disponible :true,
}

Object.freeze(producto); // comportamient mas similar del objeto como una variable const no podemos modificar

//producto.disponible =false;
//producto.imagen ="imagen.jpg";
//delete producto.precio
console.log(producto);

console.log(Object.isFrozen(producto)); // saber si producto esta congelado
