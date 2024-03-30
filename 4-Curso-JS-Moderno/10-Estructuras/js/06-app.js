//operador &

const usuario = true;
const puedePagar = true;


if (usuario && puedePagar) {
    console.log('si puedes comprar');

}else if(!puedePagar && !usuario){
        console.log('No puedes comprar'); 

} else if(!usuario){
    console.log('inicia sesion o saca cuenta');

}else if (!puedePagar){
    console.log('fondos insuficientes');
}
