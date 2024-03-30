
// Creando un Set
// Un set te permite crear una lista de valores sin duplicados.
// Pocas veces los veo que se utilizan, muchas personas prefieren crear arreglos y evitar duplicados, pero sería más sencillo con un set... de hecho en algunas ocasiones termina siendo mejor opción que un arreglo o un objeto...
// Alamacena todo tipo de objetos

let carrito1 = new Set();
carrito1.add('Camisa');
carrito1.add('Disco #1');
carrito1.add('Disco #2');
carrito1.add('Disco #3');
carrito1.add('Disco #3');
console.log(carrito1.size);


// En un arreglo
let numeros = ([1,2,3,4,5,6,7,3,3,3,3]);
console.log(numeros);
// eliminar duplicados
let noDuplicados = new Set(numeros);
console.log(noDuplicados);
// tamaño de arreglo
console.log(noDuplicados.size);

let carrito2 = new Set();
carrito2.add('Camisa');
carrito2.add('Disco #1');
carrito2.add('Disco #2');
carrito2.add('Disco #3');
carrito2.add('Disco #3');


// Comprobando que un valor existe en el set.
console.log( carrito2.has('Camisa') );

// Eliminando del set
console.log( carrito1.delete('Camisa') );
console.log( carrito1.has('Camisa') );
console.log(carrito1);

// Limpiar un set
carrito1.clear();
console.log(carrito1);

// Foreach a un set
carrito1.forEach(producto =>  {
    console.log(producto);
})

// Foreach a un set
carrito2.forEach((producto, index, pertenece) =>  {
    console.log(`${index} : ${producto}`);
    console.log(pertenece  === carrito2); // nombre de la variable
})

// Convertir un set a un arreglo...
const arregloCarrito = [...carrito2];
console.log(arregloCarrito);

