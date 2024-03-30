// Switch case

const metodoPago = 'efectivo';

switch (metodoPago) {
    case 'efectivo':
         pagar(); 
        break;
    case 'cheque' :
        console.log(`pagaste con ${metodoPago}`); 
        break; 
    case 'tajeta' :
        console.log(`pagaste con ${tarjeta}`);
        break;
    default:
        console.log(' Aun no has selccionado un metodo de pago o metodo no soportado');    
}


function pagar () {
    console.log('pagando....');
}