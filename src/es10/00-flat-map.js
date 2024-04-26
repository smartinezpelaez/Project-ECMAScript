/*El aplanamiento consiste en transformar un array de arrays a una sola dimensión. 
Los métodos flat y flatMap permitirán realizar el aplanamiento.*/

/*El método flat devuelve un array donde los sub-arrays han sido propagados hasta una profundidad especificada.
Este método es inmutable, es decir, retorna un nuevo array con los cambios y no cambia el array original.*/

const array = [1,1,2,3,4, [1,3,5,6 ,[1,2,4]]];
console.log(array.flat());

const array1 = [1,2,[3,4],5,6]
const result = array1.flat() 
console.log(result)// [1,2,3,4,5,6]

const array2 = [1, 2, [3, 4, [5, 6]]];
const result2 = array2.flat() 
console.log(result2)// [1, 2, 3, 4, [5, 6]]

const array3 = [1, 2, [3, 4, [5, 6]]]
const result3 = array3.flat(2) 
console.log(result3)// [1, 2, 3, 4, 5, 6]

const array4 = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]]
const result4 = array4.flat(Infinity) 
console.log(result4)// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

/*El método flatMap es una combinación de los métodos map y flat. Primero realiza la iteración de los elementos del array (como si fuera map), 
y después los aplana en una sola profundidad (como si fuera flat).*/

const arrayMap = [1,2,3,4,5];
console.log(arrayMap.flatMap(v=>[v,v*2]));

const strings = ["Nunca pares", "de Aprender"]
strings.map(string => string.split(" ")) 
console.log(strings);
// [ [ 'Nunca', 'pares' ], [ 'de', 'Aprender' ] ]
strings.flatMap(string => string.split(" ")) 
// [ 'Nunca', 'pares', 'de', 'Aprender' ]
console.log(strings);

const numbers = [1,2, 3, 4]
numbers.map(number => [number * 2]) 
console.log(numbers);
// [[2], [4], [6], [8]]
numbers.flatMap(number => [number *2]) 
// [2, 4, 6, 8]
console.log(numbers);

// Cuidado, primero hace el map y luego el flat
const numbers2 = [1,[2,3], 4, 5]
numbers2.flatMap(number => [number *2]) 
// [ 2, NaN, 8, 10 ]
// * Recuerda: NaN = No a Number
console.log(numbers2);



