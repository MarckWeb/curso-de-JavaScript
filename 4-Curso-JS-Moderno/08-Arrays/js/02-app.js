const num =[10,20,30,40,[1,2,3]];

console.log(num);
console.table(num); // crea una tabla que nos da index i valor

// acceder al array

console.log(num[2]);// pinta el 30
console.log(num[0]);// pinta 10 por la posicion
console.log(num[5]);// pinta 1,2,3 por el array dentro del array que esta en posicion 5
console.log(num[5][1]); // pint 2 del array interior