// Crear Prototypes

function Cliente (nombre,saldo) {
    this.nombre = nombre;
    this.saldo = saldo;
}
Cliente.prototype.tipoCliente = function () {
    //console.log(this.saldo);
    let tipo;

    if(this.saldo > 10000) {
        tipo ='Gold';
    } else if(this.saldo > 5000){
        tipo = 'Patinium';
    } else{
        tipo = 'Normal';
    }
    return tipo;
}

Cliente.prototype.nombreClienteSaldo = function () {
    return`Nombre: ${this.nombre}, Saldo: ${this.saldo}, TipoCliente: ${this.tipoCliente()}`
}

Cliente.prototype.retiraSaldo = function(retira) {
    this.saldo -= retira
}


// Istanciarlo
const pedro = new Cliente ('Pedro', 6000);
console.log(pedro);
console.log(pedro.tipoCliente());
console.log(pedro.nombreClienteSaldo());
pedro.retiraSaldo(1000);
console.log(pedro.nombreClienteSaldo());

console.log(pedro);
