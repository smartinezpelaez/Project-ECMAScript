const entries = new Map([["name", "steven"], ["age", 34]]);
console.log(entries);
console.log(Object.fromEntries(entries));

const arrayEntries = [
    [ 'name', 'Andres' ],
    [ 'email', 'andres@correo.com' ],
    [ 'age', 23 ]
  ] 
  
  const usuario = Object.fromEntries(arrayEntries) 
  
  console.log(usuario)