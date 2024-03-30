const meses =['Enero', 'Febrero','Marxo','Abril','Mayo','junio'];
console.table(meses);

// cuanto mide el array
console.log(meses.length); // el numero de elementos

for(let i =0; i < meses.length; i++ ){
    console.log(i); //1,2,3,4,5,6 pinta el numero de posiciones
}
for(let i =0; i < meses.length; i++ ){
    console.log(meses[i]); //pinta de mesese la posicion de i en cada vuelta   
}
