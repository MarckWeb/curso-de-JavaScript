// forEach ideal para correr arrays
// map recorrer array creando uno nuevo

const pendientes = ['Tarea','Comer','Proyecto', 'Estudiar JavaScript'];

pendientes.forEach( (pendiente, index) =>{
    console.log(`${index} : ${pendiente}`);
})


const carrito3 =[
    {Nombre: "Monitor 30 pul", precio: 500},
    {Nombre: "Tablet", precio: 400},
    {Nombre: "Nevera", precio: 550},
    {Nombre: "Televisor", precio: 700},
    {Nombre: "Celular", precio: 900},
]

carrito3.forEach ( producto => console.log(producto.Nombre, producto.precio))

// al tener una sola linea quitamos llaves y lo dejamos mas compacto


carrito3.map ( producto => console.log(producto.Nombre, producto.precio))


// Diferencia en map y forEach es que map crea un array nuevo y forEach solo lo recorre