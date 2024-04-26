//Funciones asincronicas: La función asíncrona se crea mediante la palabra reservada async y retorna una promesa.

const fnAsync = () =>{
    return new Promise((resolve, reject) =>{
        (true)
            ? setTimeout(()=> resolve('Async!!'),5000)
            :reject(new Error('Error!'))

    });
}

const anotherFunction = async () =>{
    const somethimg = await fnAsync();
    console.log(somethimg);
    console.log('Hola!')
}

console.log('Before');
anotherFunction()
console.log('After');