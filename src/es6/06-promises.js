
//Sintaxis de las promesas
const promesa = () => {
    return new Promise((resolve, reject) => {
      if (true) {
        //true o false
        resolve("Se ha resuelto la promesa")
      } else {
        reject("Se ha rechazado la promesa")
      }
    })
  }
  
  promesa()
    .then(respuesta => console.log(respuesta)) //En caso que se ejecute resolve
    .catch(error => console.log(error)) //En caso que se ejecute reject
  

//Uso de las promesas

const anotherFunction = () =>{
    return new Promise((resolve, reject) => {
        if(false){
            resolve('Hey!!');
        }
        else{
            reject('Whooooops!');
        }
});
}

anotherFunction()
    .then(response => console.log(response))
    .catch(err => console.log(err));
