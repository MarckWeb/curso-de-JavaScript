// como eliminar elementos del DOM con JS

const primerEnlace = document.querySelector('a');
console.log(primerEnlace);

// eliminar elemento desde Js directamente por si mismo
primerEnlace.remove();

// elimiar elemento desde el padre

const nav9 = document.querySelector('.navegacion')

console.log(nav9.children); // para identificar y ver posicion el elemento que queremos elimanar 

nav9.removeChild(nav9.children[1]); // eliminamos registro desde el padre

