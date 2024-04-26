/*El encadenamiento opcional u optional chaining (?.) detiene la evaluación del objeto cuando el valor es undefined o null antes del (?.),
 retornando undefined sin detener el programa por un error.*/

const users = {
    steven: {
        country: 'CO'
    },
    Vane: {
        country: 'BR'
    }
};

console.log(users.Vane.country);
console.log(users?.bebeloper?.country);