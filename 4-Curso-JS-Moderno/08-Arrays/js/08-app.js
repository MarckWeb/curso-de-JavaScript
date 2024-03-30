const producto ={
    nombre:"Monitor 20 pulgadas",
    precio:300,
    disponible :true,
}
// Distructuring
const{nombre} = producto;
console.log(nombre);


// Distructuring con arrays

const num =[10,20,30,40];

const [ primero, , ...tercero] = num;

console.log(primero);//10
console.log(tercero);// 30 y 40