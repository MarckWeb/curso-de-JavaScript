// acceder y modificar un texto

const encabezado = document.querySelector('.contenido-hero h1');
console.log(encabezado);

console.log(encabezado.innerText);// nos trae el texto, pero no lo trae si lo tenemso oculto en el CSS con visibility: hidden; 
console.log(encabezado.textContent);// nos trae el texto aun que este oculto en CSS
console.log(encabezado.innerHTML);// nos trea el HTML

//Chain seleccionar directo diferentes elementos
const encabezado2 = document.querySelector('.contenido-hero h1').textContent;
console.log(encabezado2);

// modificar texto de H1 directo en el document
document.querySelector('.contenido-hero h1').textContent = 'Nuevo heading';

// modificar con una nueva variable
const nuevoHeading = 'Este es el nuevo H1 de mi Web';
document.querySelector('.contenido-hero h1').textContent = nuevoHeading;


// modificar imagen

const imagen = document.querySelector('.card img');
imagen.src = 'img/hacer2.jpg';