// Crear HTML desde el JavaScript

const enlace = document.createElement('a');
enlace.textContent = 'Vender' // Agregamos texto
enlace.href = '/Vender'
enlace.classList.add('vender-class')

const enlace2 = document.createElement('a');
enlace2.textContent = 'Registro'// Agregamos texto
enlace2.href = '/Registro'// Agregamos href
enlace2.target ="_blank";
enlace2.setAttribute('data-enlace','nuevo-enlace'); // resteamos attribute
enlace2.classList.add('registro-class') // añadimos una class
enlace2.onclick = clickFunction; // le damos funcion onclick

console.log(enlace);
console.log(enlace2);

// crear funcion al hacer click salga alert
function clickFunction(){
    alert('Diste click en Registro')
}



// Seleccionar donde queremos que esten nuestro nueva a ( enlace )

const nav10 = document.querySelector('.navegacion');
console.log(nav10.children);
nav10.insertBefore(enlace,nav10.children[0]);// insertamos antes de posicion 0
//    insetar antes(lo que insertamos, donde lo insertamos)
nav10.appendChild(enlace2);// insertamos en ultima posicion



// ----------CREAR UN CARD DE FORMA DINAMICA-------

// creamos los parrafos
const parrafo1= document.createElement('P');
parrafo1.textContent = 'Concierto';
parrafo1.classList.add ('categoria', 'concierto');

const parrafo2= document.createElement('P');
parrafo2.textContent ='Concierto Rock';
parrafo2.classList.add ('titulo');

const parrafo3= document.createElement('P');
parrafo3.textContent ='800$ por presona';
parrafo3.classList.add('precio');

//creamos div con la classe
const info10 = document.createElement('div');
info10.classList.add ('info');
info10.appendChild(parrafo1)
info10.appendChild(parrafo2)
info10.appendChild(parrafo3)

// crear la imagen
const img10 = document.createElement('img');
img10.src ='img/hacer2.jpg';

// crear el card
const card10 = document.createElement('div');
card10.classList.add('card');

// asignar la imagen
card10.appendChild(img10)

// asignar la ing
card10.appendChild(info10)

console.log(parrafo1);// vemos estructura parrafo 1 
console.log(parrafo2);// vemos estructura parrafo 2 
console.log(parrafo3);// vemos estructura parrafo 3
console.log(info10);// vemos estructura div con  de todo los 3 parrafos
console.log(img10); // vemos imagen creada
console.log(card10); // vemos info10 + imagen ( card entera creada )

// insertar en HTML
const contenedor10 = document.querySelector('.hacer .contenedor-cards');
contenedor10.appendChild(card10);
// contenedor10.insertBefore(card10, contenedor.children[0]) 
//    elemento card10 lo inserta antes de la poscion 0 del contenedor 