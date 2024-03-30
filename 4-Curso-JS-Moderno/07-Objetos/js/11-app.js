
const producto ={
    nombre:"Monitor 20 pulgadas",
    precio:300,
    disponible :true,
    mostarInfo: function(){
        console.log(`el producto :${this.nombre} tiene un precio de:${this.precio}`)
    }
}  //this.nombre nos busca el nombre dentro de la funcion sino lo ponemos lo buscaria fuera

const producto2 ={
    nombre:"Tablet",
    precio:3000,
    disponible :true,
    mostarInfo: function(){
        console.log(`el producto :${this.nombre} tiene un precio de:${this.precio}`)
    }
}  
producto.mostarInfo(); // nos pinta lo que tenemos en el console.log dentro de la funcion ya que
                       // lamamos con el producto.mostraInfo()
producto2.mostrarInfo();   // el this hace que no se nos mezclen los valores que buscamos

