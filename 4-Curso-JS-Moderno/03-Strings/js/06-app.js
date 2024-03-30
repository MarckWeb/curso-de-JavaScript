const producto ="monitor 20 pulgadas"

//.repeat para repetir cadenas 
//si le pasamos un 2,4 dentro de repeat javascrip lo redondea a numero entero
const texto = 'En promocion'.repeat(3);
console.log(texto);
console.log(`${producto} ${texto} !!!`);


// split, dividir un string

const actividad = " Estoy aprendiendo javascrip moderno";
console.log(actividad.split(" ")); // lo separa en cada espacio

const hobbies = 'leer, caminar, escuchar musica, escribir'
console.log(hobbies.split(", "));
// 0:"leer"  1:"caminar"  2:"escuchar musica"  3:"escribir"

const tweet = "aprendiendo javaScript  #JSModernoConJuan"
console.log(tweet.split('#'))
// 0: "aprendiendo javaScript"
// 1: "JSModernoConJuan"