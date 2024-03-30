class Cliente4 {

    #nombre;// asi lo hacemos privado y solo lo podemos leer dede la classe 

    constructor(nombre,saldo){
        this.#nombre=nombre;
        this.saldo=saldo;
    }

    mostrarInformacion(){
        return `Cliente: ${this.#nombre}, tu saldo es de ${this.saldo}`;
    }

    static bienvenida(){
        return `Bienvendio al cajero`
    }
}

const dani4 = new Cliente4('Dani', 400);
//console.log(dani4.#nombre); error en consola
console.log(dani4.mostrarInformacion());
