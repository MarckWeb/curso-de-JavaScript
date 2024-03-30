// EVENTOS scroll con mouse

// numero de veces que hace scroll
window.addEventListener('scroll' ,() => {
    console.log('scrolling....');
})

// pixeles que nos hemos movido desde el principio del scroll
window.addEventListener('scroll' ,() => {
    const scrollpixeles = window.scrollY;
    console.log(scrollpixeles);
})

// para encontrar ubicacion exacte de un elemento saber la distancia que lo tenemos
window.addEventListener('scroll' ,() => {
    const premium = document.querySelector('.premium');
    const ubicacion = premium.getBoundingClientRect();

    if(ubicacion.top < 100){
        console.log('elemento ya visible');
    } else {
        console.log('Aun no visible');
    }
})