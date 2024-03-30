// Eliminar elementos localStorage

localStorage.removeItem('nombre');

// actualizar un registro en LocalStorage
// 1-primero nos traemos lo que queremos acutalizar, parseando
// 2-lo actualizamos array.push
// 3-lo devolvemos a localStorage stringifyandolo 

/* 1 */const mesesArray3 = JSON.parse( localStorage.getItem('meses') );
console.log(mesesArray3);
/* 2 */ mesesArray3.push('Abril');
console.log(mesesArray3);
/* 3 */localStorage.setItem('meses', JSON.stringify(mesesArray3));

// limpiar localStorage entero

localStorage.clear(); // limpia todo el localStorage