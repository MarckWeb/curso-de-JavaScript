// callbacks //

const paises1 = ['francia', 'España','Portugal','Austrialia', 'Inglaterra'];

function nuevoPais(pais1, callback) {
    setTimeout(() => {
        paises1.push(pais1);
        callback();
    }, 2000);
}
function mostrarPaises(){
    setTimeout(() => {
        paises1.forEach(pais1 => {
            console.log(pais1);
        })
    },1000);
}

mostrarPaises();
nuevoPais('Alemania', mostrarPaises);
