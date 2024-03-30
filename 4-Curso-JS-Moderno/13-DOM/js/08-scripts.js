//  TRAVERSING in the DOM
// recorrer los diferentes nodos o elementos de nuestro HTML

//-----TRAVERSING del padre al hijo--------
const nav8 = document.querySelector('.navegacion');

console.log(nav8);
console.log(nav8.childNodes); // los espacios en blanco son conciderados elementos
console.log(nav8.children); // lista solo elementos reales
console.log(nav8.lastElementChild);// Nos trae el ultimo elemento de componente .navegacion
console.log(nav8.firstElementChild);// Nos trae el primer elemento del componente .navegacion


console.log(nav8.children[0]);
console.log(nav8.children[1].nodeName);
console.log(nav8.children[1].nodeType);

const card8 = document.querySelector('.card');
console.log(card8.children[1].children[1].textContent);
// dentro de .card vemos su hijo que esta en posicion 1
// dentro de este hijo accedemos a su hijo que esta en posicion 1
// En la posicion 1 del ultimo hijo traemos el texto que contiene

card8.children[1].children[1].textContent = "Nuevo heading desde traversing the DOM";
// asi modificamos el texto que hemos encontrado anteriormente
console.log(card8.children[1].children[1].textContent);

// ----CAMBIAR IMAGEN-------
console.log(card8.children[0]);
// revisarmos card8.children para ver sus hijos
//localizamos img en posicion 0 
card8.children[0].src = 'img/hacer2.jpg';

//-----TRAVERSING del hijo al padre------
console.log(card8.parentElement);// trae el padre del elemento
console.log(card8.parentElement.parentElement); // padre del padre 
// podemos añdir tantos parentElement como padres tenga el elemento de inicio


//----TRAVERSING entre hermanos------

console.log(card8);
console.log(card8.nextElementSibling);// nos trae el siguiente elemento dentro del contenedor (hermano)
console.log(card8.nextElementSibling.nextElementSibling);// nos trae el hermano siguiente del hermano

const ultimoCard = document.querySelector('.card:nth-child(4)');
console.log(ultimoCard);
console.log(ultimoCard.previousElementSibling);// nos trae el hermano anterior al que hemos buscado en (ultimoCard)