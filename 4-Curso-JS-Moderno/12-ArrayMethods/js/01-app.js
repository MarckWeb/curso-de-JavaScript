const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

 // ver todo lo del array
 meses.forEach((mes) => {
    console.log(mes);
})

// comprobar si un valor exciste en el array diferentes maneras de saberlo
meses.forEach((mes) =>{
    if( mes === 'Enero'){
        console.log('Enero si exciste');
    }
})

const resultado = meses.includes('Enero');
console.log(resultado);
// .includes solo funciona en un arrey de un indice

// en array de objetos se utiliza .some
const exsiste = carrito.some((producto) =>{
    return producto.nombre === 'Televisor Curved'
   
})
    console.log(exsiste);

const exsiste2 = meses.some ( mes => mes === 'Febrero');
console.log(exsiste2);


   




