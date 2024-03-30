
const producto ={
    nombre:"Monitor 20 pulgadas",
    precio:300,
    disponible :true,
}

const medidas ={
    peso:'1kg',
    medida:'1m'
}

//----UNIR DOS OBJETOS----//

console.log(producto)
console.log(medidas)

const resultado = Object.assign(producto,medidas); 

//Spread Operator o Rest Operator

const resultado2 ={...producto,...medidas} // esta es la mas utilizada

console.log (resultado) // los dos objetos unidos
console.log (resultado2) // los dos objetos unidos

