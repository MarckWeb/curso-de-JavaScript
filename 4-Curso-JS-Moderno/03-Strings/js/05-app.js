const producto= 'Monitor 20 pulgadas';

// remplazar texto dentro (.replace)
console.log(producto.replace('pulgadas',' " ') ); // remplaza pulgadas por "
console.log(producto.replace('Monitor','Monitor Curvo') ); // remplaza Monitor por Monitor Curvo


// permite cortar parte de cadena de texto (.slice)

console.log(producto.slice(0, 10) );
console.log(producto.slice(8) );

// alternativa a slice (substring)
console.log(producto.substring(0,10) );

// diferencia entre slice i substring es que si le pasas un numero mayor delante
// slice lo borra todo porque recorre todo el stirng hasta llegar al numero que tiene 
// delante.
// substring lo que hace es girar los numero 

console.log(producto.slice(2,1) ); // borra todo
console.log(producto.substring(2,1) ); // pinta la posicion 2


const unsuario ="Juan"
console.log(producto.substring(0,1) ); // Pinta la J para el logo google (ejemplo)
console.log(producto.charAt(0) ); // Pinta la primera posicion J es mas rapida de hacer
