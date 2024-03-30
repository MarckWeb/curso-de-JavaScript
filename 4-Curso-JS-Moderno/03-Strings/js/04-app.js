const producto= '      Monitor 20 pulgadas       ';
console.log(producto)
console.log(producto.length);


//eliminar del inicio los espacios en blanco..
console.log( producto.trimStart());

// elimiar del final los espacio
console.log( producto.trimEnd());

// para eliminar espacios en blanco inicio y final
console.log( producto.trimStart().trimEnd());

// para eliminar inicio y final espacios en blanco
console.log( producto.trim());

