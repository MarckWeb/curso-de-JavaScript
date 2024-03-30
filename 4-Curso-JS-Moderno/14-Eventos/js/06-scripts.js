// Event bubbling
// stopPropagation

const cardDiv = document.querySelector('.card');
const infoDiv = document.querySelector('.info');
const tituloDiv = document.querySelector('.titulo');

cardDiv.addEventListener('click', e =>{
    e.stopPropagation()// detiene la propagacion del efecto bubbling
    console.log('click en card');
});

infoDiv.addEventListener('click', e =>{
    e.stopPropagation()
    console.log('click en info');
});

tituloDiv.addEventListener('click', e =>{
    e.stopPropagation()
    console.log('click en titulo');
});

