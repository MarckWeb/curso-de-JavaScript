const num1 = 20;
const num2 ="20";
const num3 = 30;

// revisar si dos numeros son iguals

console.log(num1 == num3); //false
console.log(num1 == num2); //true porque no es estricto solo se fija en el valor y no en el type

// compardor estricto

console.log(num1 === num2); //false porque tiene que ser igual a valor y type dato uno es numero y otro es estring
console.log(typeof num1); // numero
console.log(typeof num2); //string
console.log(num1 === paresInt(num2)); //converitmos el dos a numero


// diferente

const password1 ="admin";
const password2 ="Admin";

console.log(password1 != password2);// true
console.log(num1 != num2);// false solo valor
console.log(num1 !== num2);// true porque valor y type
console.log(num1 !== parseInt(num2)); // false porque lo convertimos a numero
