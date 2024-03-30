// while se ejecuta siempre que sea verdadera


let i = 1; // iniciar el while

while (i < 10) { // condicion

    console.log(`Numero ${i}`);

    i++; // incremento
}
/*

Podemos hacer fizzbuzz con while

while (i < 100) {

    if (i % 15 === 0) { // (i % 3 === 0 && i % 5 === 0) tambien funciona
        console.log(`${i} FIZZBUZZZZ!!!!!!`);
    } else if (i % 5 === 0) {
        console.log(`${i} buzz`);
    } else if (i % 3 === 0) {
        console.log(`${i} fizz`);
    }

    i++;    
}
*/

// ejercicio par inpar con while

while (i < 100){
    if(i % 2 === 0){
        console.log(`${i} es par`);
    } else {
        console.log(`${i} es inpar`);
    }

    i++;
}