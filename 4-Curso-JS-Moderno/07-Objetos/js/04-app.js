const producto ={
    nombre:"Monitor 20 pulgadas",
    precio:300,
    disponible :true,
}


console.log(producto.nombre); // Monitor 2o pulgadas

//const nombre = producto.nombre; 
//console.log(nombre); // monitor 20 pulgadas

//destructuring
//const {nombre} = producto;
//const {precio}= poducto;
console.log(nombre); // monitor 20 pulgada
console.log(nombre);  // 300

const{nombre,precio,disponible} = producto;
console.log(nombre); // monitor 20 pulgadas 
console.log(precio); //300
console.log(disponible); // true