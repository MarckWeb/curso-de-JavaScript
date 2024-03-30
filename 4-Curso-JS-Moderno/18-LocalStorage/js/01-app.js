// Local stroage // solo gurada Strings , no podemos guardar objetos,arrays...

// Almacenamiento local ( perdura aun que cerremos ordenador )
localStorage.setItem('nombre','Dani');


// Passar objecto a localStorage
const producto = {
    nombre: "Ordenador",
    precio: 600
}
const productoString = JSON.stringify( producto ); // convertimos objecto a un string asi lo podemos passar por LocalStorage
console.log(productoString);
localStorage.setItem('producto', productoString);
//setItem= añadimos ('nombre', lo que queremos añadir)

// Passar Array a localStorage

const meses = ['enero', 'febrero', 'marzo'];

localStorage.setItem('meses', JSON.stringify(meses));
//setItem= añadimos ('nombre', lo que queremos añadir stringifyandolo directamente)

// Almacenamiento Session ( perdura mientras tengamos session abierta )
sessionStorage.setItem('nombre','Paula');