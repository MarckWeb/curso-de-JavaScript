const producto = 'Monitor 24 pulgadas';

// pinta en consola monitor 24
console.log(producto);

// nos cuenta las letras q hay en nuestra cadena de texto
console.log(producto.length); 


// nos dice si hay la palabra Monitor en nuestro 
//string indicando la posicion de la primera letra
console.log(producto.indexOf('Monitor')); // posicion 0

// nos dice con true o false si exsiste Monitor en nuestro string
console.log(producto.includes('Monitor')); // true
console.log(producto.includes('monitor')); // false
