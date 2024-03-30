const meses2 = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const carrito2 = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

// encontrar el numero de indice
meses.forEach( (mes, i) =>{
    if (mes === 'Abril'){
        console.log(`Encontrado en el indice ${i}`);
    }
})

// Encontrar indice abril con findIndex

const indice = meses.findIndex( mes => mes ==='Marzo') 
console.log(indice);

const indice2 = meses.findIndex( mes => mes ==='Diciembre') 
console.log(indice2);

// no ponemos el parentesi porque solo le pasamos un paramentro y asi no hace la funcion mas compacta y facil de leer
// findIndex cuando no lo encuentra nos devuelve -1 

// Encontrar indice de array de objectos

const indice3 = carrito2.findIndex( producto => producto.precio === 100);
console.log(indice3);

// findIndex solo encuentra el primero y deja de buscar si hay dos de iguales dentro del array
