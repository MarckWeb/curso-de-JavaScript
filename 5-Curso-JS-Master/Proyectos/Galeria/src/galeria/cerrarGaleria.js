const galeria = document.getElementById('galeria');

//cuando se de click se cirra la galeria
const cerrarGaleria = () => {
	// Agregamos un overflow hidden al body.
	//devolvemso el scroll quitado al body
	document.body.style.overflow = '';

	// Agregamos la clase active a la galeria.
	//eliminamos a clase que le permitia abrir
	galeria.classList.remove('galeria--active');
};

//la funcion la utilizamos en otro documento en esta caso en evento galeria
export default cerrarGaleria;
