// como concatenar 2 strings

const producto = 'Monitor 20 pulgadas ';
const precio = '30 USD ';

// concatenamos los dos productos 
console.log (producto.concat(precio));
// sumamos un string a la variable
console.log (producto.concat('en descuento'));

// sumamos o comas bajas de  los productos y nuevas strings
console.log( producto + 'con un precio de: ' + precio);
console.log( 'el producto' , producto ,'tiene un precio de ',  precio);

// temple strings ( variable las tenemos con ${} i le ponemos el string que queramos)
console.log(`el producto${producto} tiene un precio de ${precio}`);

