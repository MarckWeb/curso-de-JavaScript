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
console.log(producto)

console.log(producto.informacion)// 1kg, 1 metro
console.log(producto.informacion.fabricacion.pais);