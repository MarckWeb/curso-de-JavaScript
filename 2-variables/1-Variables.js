/*
   📌 Qué son las variables:
   - Espacios en memoria donde podemos guardar informacion, normalmente son valores pequeños que nuestro sitio web o aplicacion utilizarán.
*/

// 📌 Como declarar variables
// var edad 	Declaramos la variable edad.
// = 27 		Le asignamos un tipo de valor.
var edad = 27;

/* 📌 Reglas de las variables:
   - Todas las variables deben tener nombres únicos.
   - Deben empezar por al menos una letra.
   - También pueden empezar por el simbolo $ y _ pero es muy poco común.
   - No se pueden usar palabras reservadas como nombre. (ejemplo: for)
*/

/* 📌 Tipos de datos que podemos guardar en las variables:
    string - Cadena de Texto
    number - Numero
    boolean - Booleano (verdadero o falso)
    object - Objeto
    function - Funciones

   null - Valor nulo
   undefined - Valor sin definir
*/

// 📌 Otras formas de declarar variables:
let nombre = 'Carlos';
const correo = 'correo@correo.com';

// var - ya casi no se utiliza. Fue la primera forma de declarar variables.
// let - se usa cuando queremos definir una variable y su valor puede cambiar en el futuro.
// const - se usa cuando queremos definir una variable y su valor no va a cambiar en el futuro.

// const y let tienen un alcance de tipo bloque (block scope).

// 📌 Declarar variables en una sentencia:
let telefono,
   pais = 'Mexico',
   id;

// 📌 Podemos reasignar valores a las variables:
telefono = 12345678;
console.log(telefono);

pais = 'España';
console.log(pais);

// 📌 Las variables de tipo const no las podemos reasignar
const numero = 123;
numero = 456;
console.log(numero);

// 📌 Undefined
// Nos retorna undefined cuando una variable no tiene un valor definido:
console.log(id);

// 📌 Podemos realizar operaciones aritmeticas al definir variables
const resultado = 4 + 4;
console.log(resultado);

// En el caso de cadenas de texto, se concatenan los valores.
const nombre1 = 'Carlos ';
const nombre2 = 'Martin';
const nombreCompleto = nombre1 + nombre2;
console.log(nombreCompleto);

/*
   📌 Tipos de variables dinamicos
   En javascript a las variables no les especificamos que solo puedan guardar un tipo de valor.
   En javascript el tipo de valor que podemos guardar es dinamico.
   Es decir que podemos guardar un numero, y luego remplazarlo por una cadena de texto.
*/
let variable = 'Texto';
variable = 7;
console.log(variable);


// Inicializar una variable con un valor
var producto = "Monitor de 24 pulgadas";
console.log(producto);

//Las variable se pueden reasignar
producto = 'Monitor de 19 Pulgadas';
console.log(producto);

//JavaScript es un lenguaje de tipo dinamico, nse e especifica tipo de dato
producto = 20;
console.log(producto);

//Se pueden inicializar sin valor y asignarlo despues
var disponible;
disponible = true;

disponbile = false;

//Inicializar multiple variable
var catergoria = 'Computadoras',
   marca = "Marca Famosa",
   calificacion = 5;

//REASIGNANDO VALORES
// no pudes iniciar una variable con numeros
//var 99dias;    esta mal
// var 01_   var_usuario

// varable escrita en camelCase esta es la recomendada
var nombreProducto;
// variable snake
var nombre_producto;

let producto = 'Tablet';

// reasignar el valor

producto = 'Monitor';

producto = 20;
producto = true;
producto = null;

console.log(producto)

let precio;

precio = 300;
console.log(precio)