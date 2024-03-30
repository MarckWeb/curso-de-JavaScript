function sumar(a,b){
  return a + b;  
}

const resultado = sumar(2,3); // resultado tiene el valor de la funcion

console.log(resultado)

// ejemplo mas avanzado

let total = 0;

function agregarCarrito (precio) {
    return total += precio;
}

function calcularImpuesto (total){
    return total * 1.15;
}
total= agregarCarrito(300)
total= agregarCarrito(100)
total= agregarCarrito(600)

const totalPagar = calcularImpuesto(total);

console.log(`El total a pagar es de ${totalPagar}`);
console.log(total);