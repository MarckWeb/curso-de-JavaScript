// Heredar Prototypes

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


function Persona(nombre,saldo,telefono) {
    Cliente.call(this, nombre, saldo); // passamos nombre y saldo de la funcion Cliente asi heredamos propiedades ya utilizadas
    this.telefono = telefono;
}

// clonar antes de instanciar
Persona.prototype = Object.create (Cliente.prototype);
// pasamos todo el prototype de cliente a persona asi le pasamos las funciones que tenemos en Cliente

Persona.prototype.constructor = Cliente;
// Asi no perdemos la funcion constructora al pasar el prototype anterior

//Instanciarlo
const dani4 = new Persona('Dani', 6000,456354738);
console.log(dani4);
console.log(dani4.nombreClienteSaldo());
// este resultado  lo conseguimos gracias al heredar prototype de Cliente que sino no estarian las funciones defindidas en Persona

Persona.prototype.mostartTelefono = function () {
    return`El telefono es ${this.telefono}`
}
console.log(dani4.mostartTelefono());