//OBJETOS DEL METODO MATH
//muestar com usar math para escribir una funcion

function calcularCirculo(radio) {
   return Math.PI * Math.pow(radio, 2);
}

calcularCirculo(1)

//MATH MAX
//Math.max() es una función que devuelve el valor mayor de una lista de valores numéricos pasados como parámetros. Si se pasa un valor no numérico como parámetro, Math.max() devolverá NaN

//Números como parámetros

Math.max(4, 13, 27, 0, -5); // devuelve 27

//Parámetro inválido

Math.max(4, 13, 27, 'ocho', -5); // devuelve NaN

//Arreglo como parámetro, usando Spread (…)

let numeros = [4, 13, 27, 0, -5];

Math.max(...numeros); // devuelve 27

//Arreglo como parámetro, usando .apply()

let numeros1 = [4, 13, 27, 0, -5];

Math.max.apply(null, numeros); // devuelve 27


//////////MATH MIN//////////////////////
//La función Math.min() devuelve el menor valor de cero o más números.

Math.min(7, 2, 9, -6);
// devuelve -6

// Math PI
// Math.PI es una propiedad estática del objeto Math y corresponde al número Pi, que se define como la relación entre la longitud de la circunferencia de un círculo respecto a su diámetro. El número Pi es aproximadamente 3.14149 y se representa comúnmente con la letra griega π.

Math.PI // 3.141592653589793

// Math Pow
// Math.pow() devuelve el valor de un número elevado a otro número.

// Sintaxis
// Math.pow(base, exponente), donde base es el número base y exponente es el número al que se eleva la base.

// pow() es un método estático de Math, por lo tanto, siempre es llamado como Math.pow() en vez de un método en otro objeto.

Ejemplos
Math.pow(5, 2); // 25
Math.pow(7, 4); // 2401
Math.pow(9, 0.5); // 3
Math.pow(-8, 2); // 64
Math.pow(-4, 3); // -64

// Math Sqrt
// La función Math.sqrt() devuelve la raíz cuadrada de un número.

// Si se ingresa un número negativo, te devuelve NaN.

// sqrt() es un método estático de Math, por lo tanto, siempre es llamado como Math.sqrt() en vez de un método en otro objeto.

// Sintaxis
// Math.sqrt(x), donde x es un número.

Math.sqrt(25); // 5
Math.sqrt(169); // 13
Math.sqrt(3); // 1.732050807568
Math.sqrt(1); // 1
Math.sqrt(-5); // NaN

//Math Trunc
// Math.trunc() es un método del objeto estándar Math que devuelve sólo la parte entera de un número dado, simplemente quitando las unidades fraccionarias. Esto resulta en hacer un redondeo de la parte decimal a 0. Cualquier valor ingresado que no sea un número devolverá como resultado NaN.

// Cuidado: este método es una característica de ECMAScript 2015 (ES6) y no tiene soporte en los navegadores antiguos.

Math.trunc(0.1)   //  0
Math.trunc(1.3)   //  1
Math.trunc(-0.9)  // -0
Math.trunc(-1.5)  // -1
Math.trunc('foo') // NaN

// Math Ceil
// Math.ceil() es un método del objeto estándar Math que redondea un número dado hacia el siguiente número entero. Toma nota que para los números negativos, esto significa que el número será redondeado "hacia 0" en vez de el número de mayor valor absoluto (ve los ejemplos a continuación).


Math.ceil(0.1)  //  1
Math.ceil(1.3)  //  2
Math.ceil(-0.9) // -0
Math.ceil(-1.5) // -1

// Math Floor
// Math.floor() es un método del objeto estándar Math que redondea un número dado hacia el número entero anterior. Toma nota que para los números negativos esto significa que el número será redondeado "lejos de 0" en vez de el número de menor valor absoluto debido a que Math.floor() devuelve el número entero que sea menor o igual al número dado.

Math.floor(0.9)  //  0
Math.floor(1.3)  //  1
Math.floor(0.5)  //  0
Math.floor(-0.9) // -1
Math.floor(-1.3) // -2

// Aplicando math.floor: Cómo crear una Máquina Tragamonedas de JavaScript
// Para este ejercicio, tenemos que generar tres números al azar usando una fórmula específica y no la fórmula general. 
//floor redondea numero hacia abajo
Math.floor(Math.random() * (3 - 1 + 1)) + 1;

puestoUno = Math.floor(Math.random() * (3 - 1 + 1)) + 1;
puestoDos = Math.floor(Math.random() * (3 - 1 + 1)) + 1;
puestoTres = Math.floor(Math.random() * (3 - 1 + 1)) + 1;
// Otro ejemplo: Encontrando el residuo
//5 % 2 = 1 porque
Math.floor(5 / 2) = 2(Cociente)
// 2 * 2 = 4
// 5 - 4 = 1 (Residuo)

//Math.round (al número entero más cercano), y Math.abs, que toma el valor absoluto de un número, lo que significa que niega los valores negativos pero deja los positivos tal y como estan.

// En matemáticas, se puede verificar si un número es par o impar viendo el residuo de dividir dicho número entre 2.

// 17 % 2 = 1 (17 es impar)
// 48 % 2 = 0 (48 es par)