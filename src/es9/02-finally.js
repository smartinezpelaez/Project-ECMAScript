//El método finally para promesas consiste en ejecutar código después que una promesa haya sido ejecutada como resuelta o rechazada.

const anotherFunction = () =>{
    return new Promise((resolve, reject) => {
        if(true){
            resolve('Hey!!');
        }
        else{
            reject('Whooooops!');
        }
});
}

anotherFunction()
    .then(response => console.log(response))
    .catch(err => console.log(err))
    .finally(()=> console.log('Por fin finalizo'));