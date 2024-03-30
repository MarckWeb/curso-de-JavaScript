
const carrito =""; // array vacio para llenarlo

//Definir un producto

const producto ={
    nombre: "Monitor",
    precio: 400,
}

const producto2 ={
    nombre: "celular",
    precio: 800,
}

const producto3 ={
    nombre: "teclado",
    precio: 80,
}

const producto4 ={
    nombre: "televisor",
    precio: 880,
}
carrito.push(producto);// este etara el primero
carrito.push(producto2);// este estara segundo
carrito.push(producto3);// estara en 3ra
carrito.push(producto4); // estara en 5

console.table(carrito); //Monitor, celuar, teclado, televisor

//eliminar ultimo elemento
carrito.pop();// 
console.table(carrito);// elimina televisor

//eliminar del inicio de array
carrito.shift();
console.log(carrito); // elimina Monitor

//eliminar elemento de una cierta posicion

carrito.splice(1,1);// eliminamos elemento que inicia en posicion 1 y con el otro 1 le dicimos cantidad de elementos a elminiar
console.table(carrito)// Monitor, teclado, televisor
// carrito.splice(1,2) ;si queremos elimnar 2 elementos desde posicion 1 // nos quedaria Monitor i televisor
