
// MAPS
// Listas ordenadas en llave - valor, donde el tipo y el valor pueden ser cualquier tipo, a diferencia de un objeto puede tener la llave de cualquier tipo de dato...

// y en cuanto a performance los maps tienen mejor performance que los objetos, son especialmente diseñados para agregar o quitar elementos así como recorrer, también cuando son muy grandes tienen mejor performance que un objeto

let cliente3 = new Map();

cliente3.set('nombre', 'Karen');
cliente3.set('tipo', 'Premium');
cliente3.set('saldo', 3000);

console.log(cliente3);

// acceder a los valores
console.log(cliente3.get('nombre'));
console.log(cliente3.get('tipo'));
console.log(cliente3.get('saldo'));


// Métodos al MAP
// Tamaño del MAP
console.log(cliente3.size);

// Contiene un valor
console.log(cliente3.has('tipo'));
console.log(cliente3.get('tipo'));

// Borrar
cliente3.delete('nombre');
console.log(cliente3.has('nombre'));
console.log(cliente3.get('nombre'));
console.log(cliente3.size);

// Borrar el map
cliente3.clear();
console.log(cliente3);

// También se puede inicializar un map con diferentes valores...
const paciente = new Map([['nombre', 'paciente'], ['cuarto', 'no definido']]);

paciente.set('nombre', 'Antonio');
// paciente.set('cuarto', 400);

console.log(paciente);


// Foreach a un map
cliente3.forEach((datos, index) => {
    // console.log(datos);
    console.log(`${index}: ${datos}`);
});

