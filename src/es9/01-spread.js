/*Las propiedades de propagación consisten en expandir las propiedades de un objeto utilizando el 
spread operator. Sirve para crear nuevos objetos a partir de otros.*/


const user = {username: 'gdx', age: 34, country: 'CO'};
console.log(user);
const{username, ...values} = user;
console.log(username);
console.log(values);