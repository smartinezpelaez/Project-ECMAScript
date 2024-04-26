/*El operador nullish coalescing (??) consiste en evaluar una variable si es undefined o null para asignarle un valor.*/

const anotherNumber = null;
const validate = anotherNumber ?? 5;
console.log(validate);

const usuario1 = {}
const nombre1 = usuario1.name ?? "Andres"
console.log(usuario1);
console.log('******');
console.log(nombre1);


const usuario2 = {name: "Juan"}
const nombre2 = usuario2.name ?? "Andres"

console.log(usuario2);
console.log('******');
console.log(nombre2);




