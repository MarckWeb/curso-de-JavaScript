const meses =['Enero', 'Febrero','Marzo','Abril','Mayo','Junio'];

//agregar al final del arreglo

meses.push('Julio');// agrega al final
meses.push('Agosto');

//-----------------------------------

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

carrito.push(producto);// este etara el primero
carrito.push(producto2);// este estara segundo

carrito.unshift(producto3); // unshift lo sube al primero

console.table(carrito); // Teclado, Monitor y ultimo celular