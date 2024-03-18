# JAVASCRIPT

Uno de los conceptos fundamentales en JavaScript, como en cualquier otro lenguaje de programación, es el concepto de tipos de datos. Los tipos de datos hacen referencia a las diferentes formas en que se pueden representar y manipular valores dentro de un programa.

En JavaScript, hay varios tipos de datos, que pueden agruparse en dos categorías: primitivos y objetos.

## Tipos de datos primitivos

Los tipos de datos primitivos son los bloques de construcción básicos que se utilizan para construir estructuras de datos más complejas. Son inmutables, lo que significa que una vez que se crea un valor, no puede modificarse. En JavaScript, hay seis tipos de datos primitivos:

### Number

Representa números enteros o de punto flotante. Por ejemplo:

```js
var edad = 30;
var pi = 3.14159;
```

## String

Representa secuencias de caracteres, como texto. Los strings pueden estar entre comillas simples o dobles. Por ejemplo:

```js
var saludo = "Hola, mundo!";
var nombre = "Juan";
```

### Boolean

Representa valores de verdad, es decir, verdadero (true) o falso (false). Por ejemplo:

```js
var esMayorDeEdad = true;
var tieneLicenciaDeConducir = false;
```

### undefined

Un tipo de datos especial que indica la ausencia de un valor. La variable que no tiene ningún valor asignado tendrá el valor undefined. Por ejemplo:

```js
var variableSinValor;
console.log(variableSinValor); // Imprime "undefined"
```

### null

Otro tipo de datos especial que representa la ausencia intencional de un valor. A diferencia de undefined, debe asignarse explícitamente. Por ejemplo:

```js
var objetoInexistente = null;
console.log(objetoInexistente); // Imprime "null"
```

### Symbol

Representa un identificador único e inmutable, útil para crear propiedades únicas en objetos. Por ejemplo:

```js
var simbolo = Symbol("miSimbolo");
var objeto = {};
objeto[simbolo] = "Valor único";
console.log(objeto[simbolo]); // Imprime "Valor único"
```

## Tipos de datos objeto

Los tipos de datos objeto son estructuras de datos más complejas que pueden contener otros valores. En JavaScript, hay varios tipos de objetos, incluyendo:

### Object

El tipo de datos base para todos los objetos en JavaScript. Se utiliza para crear estructuras de datos que contienen múltiples valores. Por ejemplo:

```js
var persona = {
  nombre: "Juan",
  edad: 30,
  saludar: function () {
    console.log("Hola, mi nombre es " + this.nombre);
  },
};

persona.saludar(); // Imprime "Hola, mi nombre es Juan"
```

## Array

Un tipo de objeto especial que representa una lista de valores. Los elementos de un array se pueden acceder mediante índices basados en cero. Por ejemplo:

```js
var frutas = ["manzana", "plátano", "cereza"];
console.log(frutas[0]); // Imprime "manzana"
```

## Function

Un tipo de objeto que representa una función, que es un bloque de código que se puede invocar para realizar algún tipo de cálculo o acción. Por ejemplo:

```js
function suma(a, b) {
  return a + b;
}

console.log(suma(2, 3)); // Imprime 5
```

## Date, RegExp y otros tipos de datos objeto

Además de los objetos mencionados anteriormente, JavaScript también soporta otros tipos de datos objeto, como Date para manejar fechas y horas, y _RegExp_ para trabajar con expresiones regulares.

En resumen, el concepto de tipos de datos en JavaScript es fundamental para trabajar con valores en programas y aplicaciones. Los tipos de datos primitivos como _number_, _string_, _boolean_, _undefined_, _null_ y _Symbol_ representan valores simples e inmutables, mientras que los tipos de datos objeto como _object_, _array_, _function_, _Date_ y \_RegExp \_permiten crear estructuras de datos más complejas y flexibles.
