//15) Programa una función para convertir números de base binaria a decimal y viceversa, pe. miFuncion(100,2) devolverá 4 base 10.

const convertirBinarioDecimal = (numero, base) => {
    if(numero === undefined) return console.warn('No ingresaste un numero a convertir');

    if(typeof numero !== 'number') return console.error(`El valor "${numero}" NO es un numero`);

    if(base === undefined) return console.warn('No ingresaste la base')

    if(typeof base !== 'number') return console.error(`El valor "${base}", NO es un numero`)

    if(base === 2){
        //paseInt =metodo que combierte de binario a decimal
        return console.info(`${numero} base ${base} = ${parseInt(numero, base)} base 10`)
    }
}

// convertirBinarioDecimal()
//  convertirBinarioDecimal(100, 2)





// 16) Programa una función que devuelva el monto final después de aplicar un descuento a una cantidad dada, pe. miFuncion(1000, 20) devolverá 800.

const montoFinal = (monto, descuento) => {
    if(monto === undefined) return console.warn('El monto no puede ser 0')
    if(typeof monto !== 'number') return console.log(`El valor ${monto} NO es un numero`)

    if(monto === 0) return console.warn('El monto no puede ser 0')

    if(Math.sign(monto) === -1) return console.error('el monto no puede ser negativo')

    if(descuento === undefined) return console.warn('El monto no puede ser 0')

    if(typeof descuento !== 'number') return console.log(`El valor ${descuento} NO es un numero`)

    if(descuento === 0) return console.warn('El monto no puede ser 0')

    if(Math.sign(descuento) === -1) return console.error('el monto no puede ser negativo')

    return console.info(`${monto} - ${descuento}% = ${(monto - (monto * descuento)/100)}`)
}

// montoFinal()
// montoFinal(1000, 20)

// 17) Programa una función que dada una fecha válida determine cuantos años han pasado hasta el día de hoy, pe. miFuncion(new Date(1984,4,23)) devolverá 35 años (en 2020).
const calcularAnyos = (fecha) => {
    if(fecha !== 'number') return console.warn('ingresa numeros')
    if(fecha === undefined) return console.warn('No ingresaste fecha')
    if(!fecha instanceof Date) return console.error ('El valor que ingresaste no es una fecha valida')

    let hoyMenosFecha = new Date().getTime() - fecha.getTime(),
        anyosEnMS = 1000 * 60 * 60 * 365,
        anyosHumanos = Math.floor(hoyMenosFecha/anyosEnMS);
    
    return (Math.sign(anyosHumanos) === -1)
        ?console.info(`Faltan ${Math.abs(anyosHumanos)} años para el ${fecha.getFullYear()}.`)
        :(Math.sign(anyosHumanos) === 1)
            ?console.info(`han pasado"${anyosHumanos}" años desde ${fecha.getFullYear()}.`)
            :console.info(`Estamos en el año actual ${fecha.getFullYear()}`)

}

calcularAnyos()
calcularAnyos(new Date(1995, 5, 5))
calcularAnyos('hla')




// 18) Programa una función que dada una cadena de texto cuente el número de vocales y consonantes, pe. miFuncion("Hola Mundo") devuelva Vocales: 4, Consonantes: 5.

const contarLetras = (cadena) => {
    if(!cadena) return console.warn('No ingresaste una cadena de tetxo')

    if(typeof cadena !== 'string') return console.error(`El valor ingresado ${cadena}, No es un texto`);

    //el for of = para recorrer cualquier elementp que sea iterable, texto, array, etc.
    let vocales = 0,
        consonantes = 0
    cadena = cadena.toLocaleLowerCase();
    for (let letra of cadena) {
        if(/[aeiouAEIUO]/.test(letra)) vocales++

        if(/[bcdfghjklmnpqrstvwxyz]/.test(letra)) consonantes++; 
    }
    return console.info({
        cadena,
        vocales,
        consonantes
    })
}

// contarLetras()
// contarLetras(525522)
// contarLetras('Hola Mundo')





// 19) Programa una función que valide que un texto sea un nombre válido, pe. miFuncion("Jonathan MirCha") devolverá verdadero.


const validarNombre = (nombre) =>{
    if(!nombre) return console.warn('No ingresaste un nombre');

    if(typeof nombre !== 'string') return console.error(`El valor ${nombre} NO es un texto`);
    //metod test() evalua si se cumple la condicion de regExp
    let regExp = /^[A-Za-zÑñÁáÉéÓóÚú\s]+$/g.test(nombre);

    return(regExp)
        ?console.info(`"${nombre}", Es un nombre valido`)
        :console.info(`"${nombre}", NO es un nombre valido`);
}

// validarNombre()
// validarNombre(5522)
// validarNombre('askdhbejncla as')
// validarNombre("Jokin Barba")


// 20) Programa una función que valide que un texto sea un email válido, pe. miFuncion("jonmircha@gmail.com") devolverá verdadero.


const validarEmail = (email) => {
    if(!email) return console.warn('No ingresate un email')
    if(typeof email !== 'string') return console.error(`El valor ${email}, NO es una texto valido`)
    
    ///^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/
    let expReg = /[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})/i.test(email);

    return(expReg)
        ?console.info(`"${email}", Es un correo valido`)
        :console.info(`"${email}", Es un correo valido`)
}

// validarEmail()
// validarEmail(485214)
// validarEmail('hill')
// validarEmail('hola_98@skks.com')

//21) Programa una función que dado un array numérico devuelve otro array con los números elevados al cuadrado, pe. mi_funcion([1, 4, 5]) devolverá [1, 16, 25].
// 22) Programa una función que dado un array devuelva el número mas alto y el más bajo de dicho array, pe. miFuncion([1, 4, 5, 99, -60]) devolverá [99, -60].
// 23) Programa una función que dado un array de números devuelva un objeto con 2 arreglos en el primero almacena los números pares y en el segundo los impares, pe. miFuncion([1,2,3,4,5,6,7,8,9,0]) devolverá {pares: [2,4,6,8,0], impares: [1,3,5,7,9]}.
// 24) Programa una función que dado un arreglo de números devuelva un objeto con dos arreglos, el primero tendrá los numeros ordenados en forma ascendente y el segundo de forma descendiente, pe. miFuncion([7, 5,7,8,6]) devolverá { asc: [5,6,7,7,8], desc: [8,7,7,6,5] }.
// 25) Programa una función que dado un arreglo de elementos, elimine los duplicados, pe. miFuncion(["x", 10, "x", 2, "10", 10, true, true]) devolverá ["x", 10, 2, "10", true].
// 26) Programa una función que dado un arreglo de números obtenga el promedio, pe. promedio([9,8,7,6,5,4,3,2,1,0]) devolverá 4.5.
/*27) Programa una clase llamada Pelicula.

La clase recibirá un objeto al momento de instanciarse con los siguentes datos: id de la película en IMDB, titulo, director, año de estreno, país o países de origen, géneros y calificación en IMBD.
  - Todos los datos del objeto son obligatorios.
  - Valida que el id IMDB tenga 9 caracteres, los primeros 2 sean letras y los 
     7 restantes números.
  - Valida que el título no rebase los 100 caracteres.
  - Valida que el director no rebase los 50 caracteres.
  - Valida que el año de estreno sea un número entero de 4 dígitos.
  - Valida que el país o paises sea introducidos en forma de arreglo.
  - Valida que los géneros sean introducidos en forma de arreglo.
  - Valida que los géneros introducidos esten dentro de los géneros 
     aceptados*.
  - Crea un método estático que devuelva los géneros aceptados*.
  - Valida que la calificación sea un número entre 0 y 10 pudiendo ser 
    decimal de una posición.
  - Crea un método que devuelva toda la ficha técnica de la película.
  - Apartir de un arreglo con la información de 3 películas genera 3 
    instancias de la clase de forma automatizada e imprime la ficha técnica 
    de cada película.*/

    //* Géneros Aceptados: Action, Adult, Adventure, Animation, Biography, Comedy, Crime, Documentary ,Drama, Family, Fantasy, Film Noir, Game-Show, History, Horror, Musical, Music, Mystery, News, Reality-TV, Romance, Sci-Fi, Short, Sport, Talk-Show, Thriller, War, Western.