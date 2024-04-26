/*Cómo utilizar el método at
La utilidad más importante de este método es para manejar índices negativos. Algo que no se puede con la notación de corchetes*/

const array = ["one", "two","three","four","five", "six"];
console.log(array[array.length - 1]);
console.log(array.at(-1));

const nombres = ["Andres", "Valeria", "Ana", "Ramiro", "Richard"]

nombres.at(-1) // "Richard"
console.log(nombres);
nombres[-1] // undefined
console.log(nombres);
nombres.at(-3) // "Ana"
console.log(nombres);
nombres[nombres.length -1] // "Richard"
console.log(nombres);