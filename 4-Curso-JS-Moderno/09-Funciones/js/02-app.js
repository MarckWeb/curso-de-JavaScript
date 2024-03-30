// Declaracion de Funcion(function declaretion)
sumar();
function sumar() {
    console.log( 2 + 2 );
}


//Expresion de funcion (function expression)
sumar2();
const sumar2 = function() {
    console.log( 3 + 3 );
}


// sumar se ejecutara ya que al hacer el hosting primero interpreta y despues ejectua
// 1ra vuelta lee y en sumar lee la funcion pero en suma2 lee solo la variable por eso 
// al hacer la 2da vuelta ejecuta la funcion sumar y nos da resultado pero en sumar2 
// solo ejecuta const sumar2 y da error a la llamada de sumar2 porque solo tiene dentro
//la variable no la variable con la funcion
