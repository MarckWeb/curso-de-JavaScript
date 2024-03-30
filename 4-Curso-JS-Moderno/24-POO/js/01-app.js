// PROGRAMACION ORIENTADA A OBJECTOS  //

// class declaration
class Cliente {
    constructor(nombre,saldo){
        this.nombre=nombre;
        this.saldo=saldo;
    }

    mostrarInformacion(){
        return `Cliente: ${this.nombre}, tu saldo es de ${this.saldo}`;
    }

    static bienvenida(){
        return `Bienvendio al cajero`
    }
}

const dani = new Cliente('Dani',500);
console.log(dani.mostrarInformacion());
console.log(dani);
console.log(Cliente.bienvenida()); // mostrar static no hace falta instanciar-lo
//console.log(dani.bienvenida()); da error que no es una funcion

// class expresion
const Cliente2 = class{
    constructor(nombre,saldo){
        this.nombre=nombre;
        this.saldo=saldo;
    }
    mostrarInformacion(){
        return `Cliente: ${this.nombre}, tu saldo es de ${this.saldo}`;
    }
}
const dani2 = new Cliente2('Dani',500);
console.log(dani2.mostrarInformacion());
console.log(dani2);