
// OBJECT LITERAL//
const producto ={
    nombre:"Monitor 20 pulgadas",
    precio:300,
    disponible :true,
}  
console.log(producto)

//OBJECT CONSTRUCTOR//

function Producto(nombre,precio){
    this.nombre = nombre;
    this.precio = precio;
    this.disponible = true;

}
const producto2 = new Producto('Monitor de 24 pulgadas',500);
console.log(producto2);// creo un nuevo producto que nos crea gracias el this lo que hay dentro del objeto

const producto3 =new Producto('Televisor', 150);
console.log(producto3)
