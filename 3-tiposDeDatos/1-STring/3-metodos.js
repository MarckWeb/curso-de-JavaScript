
console.log('------------ Método .trim() ---------')

// 📌 rim() elimina todos los espacios en blanco al principio y al final de la cadena de texto.
const trimmedText = '   nombre y apellido   ';

console.log(`${trimmedText.trim()}`); // Devuelve "nombre y apellido"




// 📌 startsWith(string) indica si la cadena comienza con la cadena especificada en el parámetro.
// Devuelve true si la cadena comienza con la cadena pasada por parámetro, de lo contrario, devuelve false.

console.log('------------ Método .startsWith() ---------')

const text = 'gato feliz y perro triste';

console.log(text.startsWith('gato')); // Devuelve true
console.log(text.startsWith('cat')); // Devuelve false





// 📌 endsWith(string) indica si la cadena termina con la cadena especificada en el parámetro.
// Devuelve true si la cadena termina con la cadena pasada por parámetro, de lo contrario, devuelve false.
console.log('------------ Método .endsWith() ---------')

console.log(text.endsWith('triste')); // Devuelve true
console.log(text.endsWith('perro')); // Devuelve false



// 📌 includes(string) comprueba si la cadena contiene la cadena pasada por parámetro.
// Devuelve true si la cadena contiene la cadena pasada por parámetro, de lo contrario, devuelve false.
console.log('------------ Método .includes() ---------')

console.log(text.includes('feliz')); // Devuelve true
console.log(text.includes('hola')); // Devuelve false



// 📌 split() divide la cadena de texto en partes, utilizando el carácter pasado por parámetro como separador.
// Devuelve un array con las partes separadas.
console.log('------------ Método .split() ---------')

console.log(text.split('')); // ['g', 'a', 't', 'o', ' ', 'f', 'e', 'l', 'i', 'z', ' ', 'y', ' ', 'p', 'e', 'r', 'r', 'o', ' ', 't', 'r', 'i', 's', 't', 'e']
console.log(text.split(' ')); // ['gato', 'feliz', 'y', 'perro', 'triste']
console.log(text.split(' , ')); // ['gato feliz y perro triste']
console.log(text.split(',')); // ['gato feliz y perro triste']
console.log(text.split('hola')); // ['gato feliz y perro triste']




// 📌 .trimStart() elimina los espacios en blanco al inicio de la cadena.

const producto3 = '   Teclado mecánico';

console.log('------------ Método .trimStart() ---------')

console.log(`${producto3.trimStart()}`); // Devuelve "Teclado mecánico"


// 📌 .trimEnd() elimina los espacios en blanco al final de la cadena.
console.log('------------ Método .trimEnd() ---------')

console.log(`${producto3.trimEnd()}`); // Devuelve "   Teclado mecánico"


// 📌 trim() elimina los espacios en blanco tanto al inicio como al final de la cadena.
console.log('------------ Método .trim() ---------')
console.log(`${producto3.trim()}`); // Devuelve "Teclado mecánico"



// 📌 MÉTODO match()

const box = 'Esta es una Caja Caja  2 48 5'

console.log('------------ Método .match() ---------')

// El método .match() busca todas las coincidencias de letras dentro de la cadena y devuelve las encontradas en una lista array.
// Si se utiliza una expresión regular como parámetro, devuelve un array con todas las coincidencias encontradas.
console.log(box.match(/[caja]/g)); // Devuelve ['a', 'a', 'a','j', 'a', 'a','j', 'a']

// También se puede utilizar para buscar mayúsculas o números dentro de la cadena.
console.log(box.match(/[A-Z]/g)); // Devuelve [ 'E', 'C', 'C' ]
console.log(box.match(/[0-9]/g)); // Devuelve [ '2', '4', '8', '5' ]

// Si se proporciona una cadena como parámetro, busca esa cadena en toda la cadena de texto y devuelve un array con la cadena encontrada junto con su índice y la cadena de entrada completa.
console.log(box.match('una')); // Devuelve ['una', index: 8, input: 'Esta es una Caja Caja  2 48 5', groups: undefined]



// 📌 EXPRESIONES REGULARES

console.log('------------ EXPRESIONES REGULARES ---------')

// Las expresiones regulares sirven para buscar, capturar o reemplazar texto utilizando patrones.
// Se definen utilizando el constructor RegExp o utilizando una expresión regular literal, encerrando el patrón entre barras (/).

const paragraph = 'El veloz zorro marrón salta sobre el perro perezoso. Ladró.';
const capturingRegex = /(?<animal>zorro|gato) marrón/;
const found = paragraph.match(capturingRegex);

console.log(found.groups); // Devuelve { animal: 'zorro' }
