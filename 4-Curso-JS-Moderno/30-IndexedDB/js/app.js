// IndexedDB //

/* 
- Api en JS para almacenar grandes datos
- Almacenar String, booleanos, inlcuso archivos
- No tiene limites, + de 50mb pide permiso pero puede
- Soporta las ultimas versiones de navegadores
- BBDD base datos completa, van a estar visbles en una pestaña en el navegador, Cuidado con passwords...
- 
*/

let DB;
document.addEventListener('DOMContentLoaded', () => {
    crmDB();

    setTimeout (()=> {
        crearCliente();
    }, 5000) 
})

function crmDB() {
    // crear bbdd version 1.0
    let crmDB = window.indexedDB.open('crm', 1);

    // si hay error
    crmDB.onerror = function() {
        console.log('Hubo un error al crear BBDD');
    }

    // si se creo bien
    crmDB.onsuccess = function () {
        console.log('Base de datos Creada correctamente');
        DB = crmDB.result;
    }
    // configuracion de la BBDD
    crmDB.onupgradeneeded = function (e){
        const db = e.target.result;
        
        const objectStore = db.createObjectStore ('crm', {
            keyPath: 'crm',
            autoIncrement: true,
        });

        // definir columnas (esquema bbdd)

        objectStore.createIndex('nombre','nombre', { unique : false });
        objectStore.createIndex('email','email', { unique : true });
        objectStore.createIndex('telefono','telefono', {unique : false});

        console.log('columnas creadas');
    }
}

function crearCliente() {
    let transaction = DB.transaction(['crm'], 'readwrite');

    transaction.oncomplete = function() {
        console.log('Transaccion completada');
    }

    transaction.onerror =function(){
        console.log('Hubo un error');
    }

    const objectStore = transaction.objectStore('crm');
    const nuevoClliente = {
        telefono: 4564534,
        nombre: 'Dani',
        correo: 'correo@correo.com'
    }

    const peticion = objectStore.add(nuevoClliente);
    console.log(peticion);
}

// Abrimos consola, escribimos window.indexDB y nos da todos los metodos que hay en indesDB