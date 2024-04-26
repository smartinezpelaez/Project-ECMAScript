//Generator

function* iterate(array){
    for (const value of array) {
        yield value;
    }
}

const it = iterate(['Steven', 'Vanessa', 'Valeria', 'Thiago']);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);

