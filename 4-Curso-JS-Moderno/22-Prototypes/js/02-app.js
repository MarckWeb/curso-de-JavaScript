
function Cliente2 (nombre,saldo) {
    this.nombre = nombre;
    this.saldo = saldo;
}

const dani2 = new Cliente2('Dani', 500);

function formatearCliente(cliente) {
    const {nombre, saldo} = cliente;
    return `El Cliente ${nombre} tiene un saldo de ${saldo}`;
}
console.log(formatearCliente(dani2));

function formatearEmpresa(empresa) {
    const {nombre, saldo, categoria} = empresa;
    return `La Empresa ${nombre} tiene un saldo de ${saldo} y se dedica a ${categoria}`;
}

function Empresa (nombre,saldo,categoria) {
    this.nombre = nombre;
    this.saldo = saldo;
    this.categoria = categoria;
}

const CCJ = new Empresa('CCJ', 5000,'Cursos en linea')
console.log(formatearEmpresa(CCJ));