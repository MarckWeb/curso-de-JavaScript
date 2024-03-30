/* 
	📌 Break
	La sentencia break nos sirve para salir de bloques de tipo Switch.
	Pero tambien nos sirve para forzar la salida de un ciclo.
*/

// Lista de nombres que empieza por la A
const nombres = ['Arturo', 'Andres', 'Alejandro', 'Roberto', 'Adrian', 'Antonio', 'Angel'];

// Comprobamos que todos los nombres empiecen por A
for (let i = 1; i < nombres.length; i++) {
	// console.log(nombres[i][0]); // Accedemos a la primera letra de cada nombre.
	// console.log();

	// Detectamos si alguna letra es diferente a A
	if (nombres[i][0] !== 'A') {
		// Cortamos la ejecución del ciclo
		console.log('ALTO! Hay un nombre que no empieza por la letra A');
		// console.log(nombres[i] + ' no empieza por la letra A');
		break;
	}

	console.log(nombres[i]);
}

/* 
	📌 Continue
	La sentencia continue nos sirve para saltar a la siguiente iteración.
*/

const invitados = ['Carlos', 'Christian', 'Christoher', 'Jorge', 'Estefania', 'Erika', 'Manuel'];
// Recorremos el arreglo de invitados
console.log('Lista de personas aceptadas:');
for (let i = 0; i < invitados.length; i++) {
	// Detectamos si hay algun invitado que no queremos
	if (invitados[i] === 'Jorge') {
		continue;
	}

	console.log(invitados[i]);
}
