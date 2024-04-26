//Las expresiones regulares o RegEx (regular expresions) son patrones de búsqueda y manipulación de cadenas de caracteres increíblemente potente y 
//están presentes en todos los lenguajes de programación.

//En JavaScript se crea este patrón entre barras inclinadas (/patrón/) y se utiliza métodos para hacer coincidir la búsqueda.

const regex = /(\d{4})-(\d{2})-(\d{2})/;
const match = regex.exec('2024-04-23');

console.table(match);

const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/;
const match1 = regexData.exec('2018-04-20');
console.table(match1);