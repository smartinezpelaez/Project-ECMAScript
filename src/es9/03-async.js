/*Los generados asíncronos son semejantes a los generadores que ya conoces, pero combinando sintáxis de promesas*/

async function* anotherGenerator(){
    yield await Promise.resolve(1);
    yield await Promise.resolve(2);
    yield await Promise.resolve(3);
}
console.log('Begin');

const other = anotherGenerator();
other.next().then(response => console.log(response.value));
other.next().then(response => console.log(response.value));
other.next().then(response => console.log(response.value));

console.log('End');

/*for await es un ciclo repetitivo que se maneja asíncronamente. 
El ciclo siempre debe estar dentro de una función con async.*/

async function arrayOfNames(array){
    for await (let value of array){
        console.log(value);
    }
}
console.log('Begin');
const names = arrayOfNames(['steven','valeria','thiago','vanessa']);

console.log('End');
