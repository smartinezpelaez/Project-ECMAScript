/*try {
  // Manejar el código
} catch (err) {
  // Se utiliza el parámetro `err`
}*/

//forma de manejo de errores tradicionales
try {
    hello();
} catch (error) {
    console.log(error);
}

//nueva forma
try {
    anotherFunction();
} catch {
    console.log('Esto es un error');
}