// document.QuerySelector devuelve un maximo de un elemento, el primero siempre

const card = document.querySelector('.card');
console.log(card);

// podemos tener selectores especificos como en CSS
const info = document.querySelector('.premium .info');
console.log(info);

// seleccionar el 2do card de hospedaje
const segundoCard = document.querySelector('section.hospedaje .card:nth-child(2)');
console.log(segundoCard);

// Seleccionar el formulario
const form = document.querySelector('#formulario');
console.log(form);

// Seleccinar elemtento por etiqueta HTML
const nav = document.querySelector('nav');
console.log(nav);