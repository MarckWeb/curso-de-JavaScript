for ( let i = 0; i < 10; i++ ){
    console.log (` Numero : ${i}`)
}

// let i = 0 es donde inicia el loop
// i < 10 condicion que revisamos minetras i es menor a 10 cuando i = 10 ya no se ejecuta
// i ++ es el incremento en este caso le sumamos uno en cada vuelta


for ( let i = 0; i < 10; i += 2){
    console.log (` Numero : ${i}`)
}
// incremento sera de dos en dos o el numero que queramos 3, 4 ,5 etc...

for (let i = 1; i <= 20; i++){
    if( i % 2 === 0 ){
        console.log(`el Numero ${i} es par`);
    } else {
        console.log(` el Numero ${i} es inpar`);
    }
}
// aqui con el (i % 2 === 0) buscamos todos los numeros para de 1 a 20
// con el else pasamos lo contrario de par

//------ ejemplo carrito de compra--------//

const carrito =[
    {Nombre: "Monitor 30 pul", precio: 500},
    {Nombre: "Tablet", precio: 400},
    {Nombre: "Nevera", precio: 550},
    {Nombre: "Televisor", precio: 700},
    {Nombre: "Celular", precio: 900},
]

console.log(carrito[0]); // esto nos trae el monitor 30 pul
console.log(carrito.length); // esto no trae la logitud de carrito

for (let i = 0; i < carrito.length; i++ ) {
    console.log(carrito[i]);// para acceder a todo lo del carrito
    console.log(carrito[i].Nombre);// para acceder al nombre
}

// iniciamos el loop a 0 y ejecutamos loops hasta q i sea menor que la longitud del carrito
// cada vuelta le sumamos uno