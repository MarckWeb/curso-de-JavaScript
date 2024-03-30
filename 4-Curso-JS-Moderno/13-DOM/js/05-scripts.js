// querySelectorAll nos devuelve todo los elementos

const cardAll = document.querySelectorAll('.card');
console.log(cardAll);

// podemos tener selectores especificos como en CSS
const infoAll = document.querySelectorAll('.premium .info');
console.log(infoAll);

// seleccionar el 2do card de hospedaje
const segundoCardAll = document.querySelectorAll('section.hospedaje .card:nth-child(2)');
console.log(segundoCardAll);

// Seleccionar el formulario
const formAll = document.querySelectorAll('#formulario');
console.log(formAll);

// Seleccinar elemtento por etiqueta HTML
const navAll = document.querySelectorAll('nav');
console.log(navAll);

// si no exsite nos devuelve el NodeList vacio
const exsiteNo = document.querySelectorAll('no-exsist');
console.log(exsiteNo);