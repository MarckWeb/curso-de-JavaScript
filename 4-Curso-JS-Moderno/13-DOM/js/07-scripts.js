
// Cambiar estilos con JS
// diferencia en CSS background-color y en JS backgroundColor
const encabezado1 = document.querySelector('h1');

encabezado1.style.backgroundColor = 'red'; 
encabezado1.style.fontFamily ='Arial'
encabezado1.style.textTransform = 'uppercase'


// Añadir/Eliminar una nueva class con JS
const card7 = document.querySelector('.card');
card7.classList.add('nueva-clase','segunda-clase');
card7.classList.remove('nueva-clase');
console.log(card7.classList);