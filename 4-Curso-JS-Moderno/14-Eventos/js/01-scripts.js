// EVENTOS EN JAVASCRIPT
// se ejectuta codigo interior del Event cuando sucede algo

console.log(1);

document.addEventListener('DOMContentLoaded', () =>{
    console.log(2);
})

console.log(3);
//DOMContentLoaded es un evento que se ejecuta una vez es descargodo el HTML i de alli empieza a ejecutar el codigo
// en consola nos aparece 1,3,2 porque DOMContentLoaded espera que todo este cargado para ejecutar
// Por eso primero hace 1 y 3 y en cuanto esta ejecutado todo nos pinta el 2