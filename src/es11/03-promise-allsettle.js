/*El método Promise.all sirve para manejar varias promesas al mismo tiempo.
 Recibe como argumento un array de promesas*/

 const promise1 = new Promise((resolve, reject)=> reject("Reject"));
 const promise2 = new Promise((resolve, reject)=> resolve("resolve"));
 const promise3 = new Promise((resolve, reject)=> resolve("Resolve 2")); 

 Promise.allSettled([promise1, promise2, promise3])
    .then(response => console.log(response));