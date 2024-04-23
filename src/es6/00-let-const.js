
//Se utiliza para un alcance global
var lastName = 'Steven'; //Declara y asigna
lastName = 'Vanessa'; //Reasigna
console.log(lastName);

//Se utiliza para un alcance de bloque de codigo
let fruit = 'Apple';
fruit = 'Kiwi';
console.log(fruit);

//Se utiliza para declarar valores constantes
const animal = 'Dog';
animal = 'cat';
console.log(animal);

const fruits = () => {
    if (true){
        var fruit1 = 'Apple'; //fucntion scope
        let fruit2 = 'Kiwi'; //blockscope
        const fruit3 = 'Banana'; //blockscope
    }
    console.log(fruit1);
    console.log(fruit2);
    console.log(fruit3);
}

fruits();