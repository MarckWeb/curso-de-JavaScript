const producto ={
    nombre:"Monitor 20 pulgadas",
    precio:300,
    disponible :true,
}
 // agregar productos al objeto

 producto.imagen = "imagen.jpg"

 // eliminar producto al objeto

 delete producto.disponible; 

console.log(producto)