for ( let i = 0; i < 10; i++ ){

    if(i === 5) {
        console.log('este es el 5');
        break;// hacemos dentener el loop aqui asi no continua el for
    }
    console.log (` Numero : ${i}`)
}
// identificar el elemento en el cual estamos y puedes ver que dice numero

for ( let i = 0; i < 10; i++ ){

    if(i === 5) {
        console.log('Cinco');
        continue;// este continue hace que cuando esta el la loop del 5 escribe Cinco
    }            // i no continua con el log de abajo sino que vuelve al for de arriba
    console.log (` Numero : ${i}`)
}

//----- como agregar en un carrito un producto con descuento-----////


const carrito2 =[
    {Nombre: "Monitor 30 pul", precio: 500},
    {Nombre: "Tablet", precio: 400, descuento: true},
    {Nombre: "Nevera", precio: 550},
    {Nombre: "Televisor", precio: 700},
    {Nombre: "Celular", precio: 900},
]

for( let i = 0; i < carrito2.length; i++){
    if(carrito2[i].descuento){
        console.log(`el articulo ${carrito[i].Nombre} tiene descuento`);
        continue;
    }
    console.log(carrito2[i].Nombre);
}


