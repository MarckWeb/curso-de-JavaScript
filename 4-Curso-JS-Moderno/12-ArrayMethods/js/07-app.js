//.concat unir dos arrays creando un arrey nuevo

const meses1 = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];
const mes2 = ['Agosto','Septiembre'];
const mes3 =['Octubre','Noviembre','Diciembre'];

const meses3 = meses1.concat(mes2,mes3);
console.log(meses3);


//.spread operator

const res = [...meses1, ...mes2, ...mes3,'otro mes'];
console.log(res);

