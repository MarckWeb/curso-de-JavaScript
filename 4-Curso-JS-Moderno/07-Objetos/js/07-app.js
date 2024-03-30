const producto ={
    nombre:"Monitor 20 pulgadas",
    precio:300,
    disponible :true,
}

producto.disponible = false;
delete producto.precio; // ya no sale precio

console.log(producto);// disponible pasa a ser false
