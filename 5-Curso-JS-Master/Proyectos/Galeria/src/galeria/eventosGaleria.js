/**
 * Archivo que se encarga de administrar los eventos de la galeria.
 */

import slideClick from './slideClick';
import cerrarGaleria from './cerrarGaleria';
import carousel from './carousel';
import { cargarAnteriorSiguiente } from './cargarImagen';

const galeria = document.getElementById('galeria');

// Agregamos event listener a la galeria a todo el container
galeria.addEventListener('click', (e) => {
	e.preventDefault();

	//a o que le hagas click busca eleemento mas ceracno de abajo arriba que se aun boton
	//seleciconara solo botnes dentro del container y null en los dema
	const boton = e.target.closest('button');

	// - - - CERRAR GALERIA
	// Accedemos al boton mas cercano. Esto para evitar obtener el svg o path.
	// Si tiene un dataset y un accion y es igual a cerrar-galeria, cerramos la galeria.
	//si no tiene un data set sigue preguntando no pasa nada dice el (?)
	//(bonto.dataset.accion === 'cerrar-galeria')
	if (boton?.dataset?.accion === 'cerrar-galeria' || e.target?.dataset?.accion === 'cerrar-galeria') {
		cerrarGaleria();
	}

	// - - - SIGUIENTE IMAGEN
	if (boton?.dataset?.accion === 'siguiente-imagen') {
		cargarAnteriorSiguiente('siguiente');
	}

	// - - - ANTERIOR IMAGEN
	if (boton?.dataset?.accion === 'anterior-imagen') {
		cargarAnteriorSiguiente('anterior');
	}

	// - - - CAROUSEL SLIDE CLICK
	// Comprobamos si el elemento tiene un data set y se llama idFoto.
	if (e.target?.dataset?.idFoto) {
		slideClick(e);
	}

	// - - - CAROUSEL ADELANTE
	// Comprobamos que el elemento clickeado sea un boton y tenga el data-action="siguiente-slide"
	if (boton && boton?.dataset.accion === 'siguiente-slide') {
		carousel('adelante');
	}

	// - - - CAROUSEL ATRAS
	// Comprobamos que el elemento clickeado sea un boton y tenga el data-action="anterior-slide"
	if (boton && boton?.dataset.accion === 'anterior-slide') {
		carousel('atras');
	}
});
