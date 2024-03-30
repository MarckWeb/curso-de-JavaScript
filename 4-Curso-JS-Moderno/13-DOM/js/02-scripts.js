// Seleccionar elementos por su classe, 

const header = document.getElementsByClassName('header');
console.log(header);

const hero = document.getElementsByClassName('hero');
console.log(hero);


// si las classes exsiten mas de una vez
const contenedores = document.getElementsByClassName('contenedor');
console.log(contenedores);

// si una classe no exsiste
const noExsiste = document.getElementsByClassName('no-exsist');
console.log(noExsiste);