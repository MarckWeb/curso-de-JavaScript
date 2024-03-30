//   MomentJS

const diaHoy2 = new Date();

moment.locale('es');

console.log(moment().format('MMMM DD YYYY h:mm:ss a'));

// M numero de mes que estamos ej: 10
// MMM mes escrito reducido ej: oct.
// MMMM mes escrito entero ej: octubre
// D dia que estamos ej: 3
// DD dia que estamos ej: 03
// YY año final ej: 23
// YYYY año completo
// H hora ej: 11
// h:mm hora y minutos ej: 11:11
// h:mm:ss hora minutos i segundos 11:12:14
// a: añade am o pm ej: am

console.log(moment().format('LLL',diaHoy2)); 
// formato lo sacamos de web MomentJS //

console.log(moment().add(3,'days').calendar());
// formato para que salga una fecha dentro de 3 dias
// ideal para una ficha final de entrega, ofertas, cupon etc...
