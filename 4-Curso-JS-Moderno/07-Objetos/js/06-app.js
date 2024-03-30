const producto ={
    nombre:"Monitor 20 pulgadas",
    precio:300,
    disponible :true,
    informacion:{
        medidas:{
            peso: '1kg',
            medida: '1 metro'
        },
    
        fabricacion:{
        pais:'China'

        }
    }
}

/*const{nombre, informacion :{fabricacion}} = producto

console.log(nombre)// Monitor
console.log(fabricacion) //china
console.log(informacion) // undifined */

const{nombre, informacion,informacion :{fabricacion}} = producto;
console.log(nombre)// Monitor
console.log(fabricacion) //china
console.log(informacion) // mediadas y fabricacion