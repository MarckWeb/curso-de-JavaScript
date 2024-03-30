// eventos en JS

const btnFlotante = document.querySelector('.btn-flotante');
const footer = document.querySelector('.footer');

btnFlotante.addEventListener('click',mostrarOcultarFooter)

function mostrarOcultarFooter (){
    if (footer.classList.contains('activo')) {
        footer.classList.remove('activo')
        btnFlotante.classList.remove('activo')
        this.textContent = 'Idioma y moneda' // this = a btnFlotante en este caso
    } else{
        footer.classList.add('activo');
        btnFlotante.classList.add('activo')
        this.textContent = 'X Cerrar'
    }
    console.log('diste click en el boton');
}

// final  DOM