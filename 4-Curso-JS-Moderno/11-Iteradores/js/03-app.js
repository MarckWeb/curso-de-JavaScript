// FIZZ BUZZ - 100 numeros
// queremos multiples de 3 y de 5 y que los que sean sean de los 2 diga fizzbuzz
// 3 6 9 12...  fizz
// 5 10 15 20... buzz
// 15 30 45... fizzbuzz


for ( let i = 1; i < 100; i++){
    if( i % 15 === 0){ // (i % 3 === 0 && i % 5 === 0) tambien funciona
        console.log(`${i} FIZZBUZZZZ!!!!!!`);
    }else if (i % 5 === 0){
        console.log(`${i} buzz`);
    }else if (i % 3 === 0){
        console.log(`${i} fizz`);
    }   
}
