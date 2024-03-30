// obtener datos LocalStorage getItem

const nombre = localStorage.getItem('nombre');
console.log(nombre);
// si le pedimos que traiga valor que no esta en local nos dice Nul

// obtener objeto
const productoJSON = localStorage.getItem('producto');
console.log(JSON.parse(productoJSON) );// nos trae de string a Objeto

// obtener array
const meses2 = localStorage.getItem('meses');
const mesesArray = JSON.parse(meses2);
console.log(mesesArray);