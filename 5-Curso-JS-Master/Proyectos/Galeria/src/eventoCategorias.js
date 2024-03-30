/**
 * Archivo que se encarga del evento de las categorias.
 */

import dataFotos from './data/fotos';
import { cargarImagen } from './galeria/cargarImagen';

const contenedorCategorias = document.getElementById('categorias');
const galeria = document.getElementById('galeria');
let categoriaActiva;

// Agregamos el event listener a las categorias.
contenedorCategorias.addEventListener('click', (e) => {
	//como tiene enlaces, previene por defecto
	e.preventDefault();

	// Comprobamos que lo que se le hace click contenga el data-categoria.
	if (e.target.closest('a')) {
		//obtenemos al eleento que le dimos click y u busca un enlace cercano con closest(a)
		//para que muestre los eurapa fot sde ahi u no otros
		categoriaActiva = e.target.closest('a').dataset.categoria;
		galeria.dataset.categoria = categoriaActiva;

		// Obtenemos las fotos que corresponden a la categoria
		const fotos = dataFotos.fotos[categoriaActiva];

		//despues de hacer click primero deja en blanco para que no se concatene con el anterior seleccionado
		const carousel = galeria.querySelector('.galeria__carousel-slides');

		// Reiniciamos el carousel
		carousel.innerHTML = '';

		// Agregamos un overflow hidden al body.
		//para eliminar el scroll del body
		document.body.style.overflow = 'hidden';

		// Agregamos la clase active a la galeria.
		galeria.classList.add('galeria--active');

		// Tomamos la informacion de la primera imagen de la categoria y la cargamos en el DOM.
		const { id, nombre, ruta, descripcion } = fotos[0];
		//enviando datos al la funcion cargarImagen()//desetructurras
		cargarImagen(id, nombre, ruta, descripcion);

		// Por cada foto agregamos un slide al carousel.
		for (let i = 0; i < fotos.length; i++) {
			const slide = `
				<a href="#" class="galeria__carousel-slide">
					<img class="galeria__carousel-image" src="${fotos[i].ruta}" alt="" data-id-foto="${fotos[i].id}" />
				</a>
			`;

			carousel.innerHTML += slide;
		}

		// Agregamos la clase active al primer elemento.
		galeria.querySelector('.galeria__carousel-slide').classList.add('galeria__carousel-slide--active');
	}
});
