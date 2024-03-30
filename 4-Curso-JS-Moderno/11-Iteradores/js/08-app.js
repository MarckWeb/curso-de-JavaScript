// for in itera sobre valores de objectos

const coches = {
    modelo: 'Ford',
    año: 1998,
    motor: '1.5tdi'
}

for (let propiedad in coches){
    console.log(propiedad,`${coches [propiedad]}`);
}
// propiedad nos pasa las llaves del objeto: modelo, año y motor
// `${coches [propiedad]}`no pasa los valores de objeto Ford, 1998 y 1.5tdi

for ( let[patata, valor] of Object.entries(coches) ){
    console.log(patata,valor);
}

// le assignamos palabra para llaves y palabra para valores y con el Object.entries(coches)
// nos itera el array de objecto sacando tanto llave como valor