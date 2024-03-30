
iniciarApp();

function iniciarApp (){
    console.log('Iniciando app..')

    segundaFuncion();
}

function segundaFuncion(){
    console.log('Desde la segunda funcion');
    usuarioAutenticado('Dani');
}



function usuarioAutenticado(usuario){
    console.log('Autenticando usuario...espera..');
    console.log(`Usuario autenticado exsitosamente: ${usuario}`);
}

// Iniciando app..
// Desde la segunda funcion

// 1ro ejecuta la primera funcion y una vez ejecutada, ejectua la 2da que 
// esta dentro de la primera funcion
// Despues ejecuta la 3ra funcion porque una vez ejecuto la segunda  ejectua la 
// tercera ya que la llamamos dentro de la segunda