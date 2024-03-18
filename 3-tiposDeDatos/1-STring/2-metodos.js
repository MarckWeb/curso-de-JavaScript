// 📌 PROPIEDADES DE STRING


//.length-. nos cuenta las letras q hay en nuestra cadena de texto, devuleve la longitud de la cadena 1 al n
const company = 'Coca-Cola-SA'
console.log(company.length) //muestra 12 de longitud

//.toUpperCase()= convierte la cadena en MAYUSCULAS
console.log(company.toUpperCase())

//.toLowerCase() = convierte la cadena en Minuscula
console.log(company.toLowerCase())



// 📌 METODOS DE STRING

// 📌 charAt(numero) devuelve el carácter que ocupa la posición en el índice especificado.
// Si el índice está fuera del rango válido, devuelve una cadena vacía.
// Solo toma un parámetro; si se proporcionan dos, solo se utiliza el primero.

console.log('------------ método .charAt(numero)---------')
console.log(company.charAt(7)) // Devuelve 'l' porque 'l' ocupa la posición 7 en el string.
console.log(company.charAt()) // Devuelve 'C' porque si no se proporciona un índice, por defecto toma el primer carácter.
console.log(company.charAt(20)) // Devuelve una cadena vacía ('') porque el índice 20 está fuera del rango válido de la cadena.




// 📌 charCodeAt(numero) devuelve el código ASCII del carácter en la posición especificada.
// Es decir, devuelve el código numérico que representa la letra en formato ASCII.

console.log('------------ método .charCodeAt(numero)---------')
console.log(company.charCodeAt(2)) // Devuelve 99 porque el código ASCII para 'c' es 99.




// 📌 Los corchetes [] no son un método, pero permiten acceder a los caracteres del string como lo hace el método .charAt().
// Puedes acceder a un carácter específico proporcionando su índice dentro de los corchetes.

console.log('--- Acceso a caracteres con corchetes -------')
console.log(company[3]) // Devuelve 'a' porque el carácter en la posición 3 del string es 'a'.



// 📌 indexOf(string) devuelve el índice del primer carácter de la cadena dada en el parámetro.
// Si la cadena o palabra se encuentra dentro de otra cadena, devuelve la posición del primer carácter de la primera ocurrencia.
// Devolverá -1 si el carácter no está presente en la cadena o si el parámetro está vacío.

const book = 'El-libro de la selva';

console.log('------------ Método .indexOf() ---------')
console.log(`Lugar donde se encuentra 'libro': ${book.indexOf('libro')}`) // Devuelve 3, ya que 'libro' comienza en el índice 3.
console.log(`Índice de 'bro': ${book.indexOf('bro')}`) // Devuelve 5, ya que 'bro' comienza en el índice 5 ('b' está en la posición 5).
console.log(`Índice de 'amarillo': ${book.indexOf('amarillo')}`) // Devuelve -1, ya que 'amarillo' no está presente en el string.
console.log(`Índice con parámetro vacío: ${book.indexOf()}`) // Devuelve -1, ya que no se proporciona un parámetro.
console.log(`Con índice especificado: ${book.indexOf('l', 0)}`) // Devuelve 4, ya que 'l' se encuentra en el índice 4 (a partir del índice 0).



// 📌 lastIndexOf(string) ayuda a encontrar el índice de la última aparición de la cadena especificada en el string.
// Devuelve el índice de la última ocurrencia del string dado en el parámetro.

console.log('------------ Método .lastIndexOf() ---------')
console.log(book.lastIndexOf('libro')) // Devuelve 3, ya que 'libro' comienza en el índice 3.
console.log(book.lastIndexOf('bro')) // Devuelve 5, ya que 'bro' comienza en el índice 5.


// 📌 search() busca una coincidencia en la cadena y devuelve la posición donde comienza el texto.
// Devuelve la posición de inicio de la primera coincidencia encontrada.

console.log('------------ Método .search() ---------')
console.log(book.search('la')) // Devuelve 12, ya que 'la' comienza en el índice 12.
console.log(book.search('selva')) // Devuelve 15, ya que 'selva' comienza en el índice 15.
console.log(book.search('va')) // Devuelve 18, ya que 'va' comienza en el índice 18.



// 📌 slice(obligado(-mayor), opcional(-menor)) devuelve una parte de la cadena original, comenzando desde el índice indicado (obligado) hasta el índice antes del final especificado (opcional).
// Si se proporciona solo un parámetro, devuelve la cadena desde ese índice hasta el final.
// Si se proporcionan dos parámetros, el primero indica el inicio y el segundo el final de la cadena devuelta.
// Puede tomar valores negativos para contar desde el final de la cadena.

const description = 'Practica de metodos de un string';

console.log('------------ Método .slice() ---------')
console.log(`Slice desde el índice 14: "${description.slice(14)}" `) // Devuelve "todos de un string"
console.log(`Slice desde el índice 0 hasta 10: "${description.slice(0, 10)}" `) // Devuelve "Practica d"
console.log(`Slice desde -20 hasta -5: "${description.slice(-20, -5)}" `) // Devuelve "metodos de un s"
console.log(`Slice con parámetros incorrectos: "${description.slice(-10, -11)}" `) // Devuelve una cadena vacía ""



// 📌 substring(numbers) es similar a .slice(), pero no admite valores negativos como parámetros.
// Devuelve una parte de la cadena original, comenzando desde el índice indicado (obligatorio) hasta el índice antes del final especificado (opcional).

console.log('------------ Método .substring() ---------')
console.log(`Substring desde el índice 24: "${description.substring(24)}" `) // Devuelve "n string"
console.log(`Substring desde el índice 10 hasta 20: "${description.substring(10, 20)}" `) // Devuelve "e metodos"
console.log(`Substring con parámetros negativos: "${description.substring(-10, -8)}" `) // No se deberían usar valores negativos, no se devuelve nada.


// 📌 concat()-. hace la union de cadenas de texto
const producto = 'Monitor 20 pulgadas ';
const precio = '30 USD ';

console.log('------------ Método .concat() ---------')
// Concatenamos los dos strings usando el método .concat()
console.log(`${producto.concat(precio)}`); // Devuelve "Monitor 20 pulgadas 30 USD "

// También podemos concatenar un string directamente a la variable
console.log(`${producto.concat('en descuento')}`); // Devuelve "Monitor 20 pulgadas en descuento"




console.log('------------ Método .replace() ---------')

// 📌  replace(string, new substring) reemplaza en la cadena el texto especificado en el primer parámetro con el texto indicado en el segundo parámetro.
const word = 'visita la página web en google';

// En el primer parámetro se coloca el string que se va a reemplazar y en el segundo parámetro el que va a reemplazar.
console.log(word.replace('google', 'explorer')); // Devuelve "visita la página web en explorer"
console.log(word.replace('visita la página web en google', 'averiguar')); // Devuelve "averiguar"
// Si se asigna otro texto que no esté en la cadena o si se deja vacío el parámetro, no se realiza ningún reemplazo.
console.log(word.replace()); // Devuelve "visita la página web en google"
console.log(word.replace('el resto')); // Devuelve "visita la página web en google"
console.log('----------------------------------------------')












