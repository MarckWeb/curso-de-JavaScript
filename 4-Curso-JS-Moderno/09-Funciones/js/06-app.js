
// para que no marque undefined en caso de no tener argumentos entrados


function saludar(nombre ='desconocido',apellido = ''){ 
    console.log(`hola${nombre} ${apellido}`);

}
saludar('Dani','Campdelacreu'); // hola Dani Campdelacreu
saludar('Dani');// hola Dani
saludar(); // hola desconocido


