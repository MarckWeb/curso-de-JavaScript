// Heredar classes 
// para heredar atributos del constructor padre utilizamos super()

class Cliente3 {
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

//Herencia

class Empresa extends Cliente3{
    constructor(nombre, saldo, telefono, categoria){
        super(nombre,saldo);// coge a la class Cliente3 lo que ya tiene
        this.telefono=telefono;
        this.categoria=categoria;
    }

    static bienvenida(){// reescribir un metodo de la class padre basta con nombrarlo igual que en class padre
        return `Bienvendio al cajero de tu empresa`
    }
}

const dani3 = new Cliente3('Dani',500);
const empresa = new Empresa('Lavanderia con carlus', 6000, 638988938, 'lavanderia');
console.log(empresa);
console.log(empresa.mostrarInformacion());

console.log(Cliente.bienvenida());
console.log(Empresa.bienvenida());