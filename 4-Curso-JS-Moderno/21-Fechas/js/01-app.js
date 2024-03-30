// Date Fecha 
// Son objetos


const diaHoy = new Date();

let valor;

valor = diaHoy;

valor = diaHoy.getFullYear(); // año actual
valor = diaHoy.getMonth() // mes acutal
valor = diaHoy.getMinutes() // minutos acutales
valor = diaHoy.getHours()  // hora actual
valor = diaHoy.getTime() // milisegundos desde 1 enero 1970

console.log(valor);