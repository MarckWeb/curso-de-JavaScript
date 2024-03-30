

const carrito =""; // array vacio para llenarlo

//Definir un producto

const producto ={
    nombre: "Monitor",
    precio: 400,
}

const producto2 ={
    nombre: "celular",
    precio: 800,
}

const producto3 ={
    nombre: "teclado",
    precio: 80,
}

let resultado;
resultado =[...carrito,producto];// añadimos a carrito el producto 

resultado =[...resultado,producto2];// añadimos a resultado el producto 2,
// quiere decir que ahora en resutado tenemos producto y producto2
resultado =[producto3,...resultado]// añadimos el producto 3 delante de resultado

console.table(resultado); // Orden del console.table = Teclado, Monitor y ultimo celular