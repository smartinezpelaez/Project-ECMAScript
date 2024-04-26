/*El objeto global proporciona funciones y variables propias e integradas en el lenguaje o el entorno. Dependiendo la plataforma, este objeto global tendrá un nombre diferente.

En el navegador el objeto global es window, para Node.js es global, y así para cada entorno. Sin embargo, en Node.js no podrás acceder a window, ni en el navegador podrás acceder a global.

Para estandarizar el objeto global se creó globalThis, un objeto compatible para cualquier plataforma*/


console.log(window); // del lado del navegador
console.log(global); // del lado de node
console.log(selft); // del lado de un webworker

console.log(globalThis); //Expone la info segun sea el contexto donde sea ejecutado
