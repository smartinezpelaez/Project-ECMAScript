//Uso del set y del add

const list = new Set();

list.add('item 1');
list.add('item 2').add('item 3').add('item 4');

console.log(list);


//No permite que se repitan los numeros
const array = [1,1,2,2,3,4,5,6,7,7,8,9];
const sinRepetidos =[... new Set(array)]
console.log(sinRepetidos);
