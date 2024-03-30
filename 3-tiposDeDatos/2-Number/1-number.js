let reultado;

//PI
resultado = Math.PI; // 3.141522563

//redondear
resultado = Math.round(2.8); //3
resultado = Math.round(2.2); //2
resultado = Math.round(2.5); //2

//redondear hacia arriba
resultado = Math.ceil(2.5); //3
resultado = Math.ceil(2.1); //3

// redondear hacia abajo
resultado = Math.floor(2.8); //2

//raiz cuadrada

resultado = Math.sqrt(144); //12

// valor absoluto 
resultado = Math.abs(-200); // 200 ignora el negativ

// Potencia
resultado = Math.pow(8, 3); //512  hace 8*8*8

//Minimo
resultado = Math.min(3, 5, 6, 12); // 3 pinta el numero mas bajo

//maximo
resultado = Math.max(3, 5, 8, 12); // 12 pinta el mayor

// aleatorio

resultado = Math.random(); // 0.3543534547 pocas veces da numeros enteros
resultado = Math.random() * 20; // 19,45645373 al multiplicarlo ya nos da numeros mayores

// aleatorio dentro de un rango....
resultado = Math.floor(Math.random() * 30); // resultado del 0 al 30 redondeado 



console.log(resultado)