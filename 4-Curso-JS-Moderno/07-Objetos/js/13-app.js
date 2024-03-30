const producto ={
    nombre:"Monitor 20 pulgadas",
    precio:300,
    disponible :true,
}  

//keys//
console.log( Object.keys (producto) ); // devuelve nombre,precio y disponibilidad sin sus valores
// saber si ese objeto tiene informacio

//values//
console.log( Object.values (producto) ); // devuelve unicamente valores , Monitor...,300, true

//Entries//
console.log( Object.entries (producto) ) // te retrono todo en pares un array para cada parte del objeto 
                                         // array 1 : Nombre y monitor.. array2 precio y 300 array3 disponb y true