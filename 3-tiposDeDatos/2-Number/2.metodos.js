const num1 = "20";
const num2 = "20.1";
const num3 = "Uno";
const num4 = 20;

console.log(num1)// 20 en negro porq es un string
console.log(Number.parseInt(num1)) // 20 pinta en azul porque convierte de string a numero
console.log(Number.parseInt(num2)) // 20 pinta en azul y redondea el numero
console.log(Number.parseFloat(num2)) // 20.1 pinta azul porque convierte de string a numero
console.log(Number.parseInt(num3)) //NaN porque no es un numero


// Revisar si el numero es entero o no
console.log(Number.isInteger(num4)); // true porq 20 es entero 
console.log(Number.isInteger(num3)) // false
console.log(Number.isInteger(num2)) // false porque 20.1 no es entero

