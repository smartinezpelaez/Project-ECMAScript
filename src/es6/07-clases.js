//Clases usos

//declarando una clase
//--class user{};
//instancia de una clase
//--const newUser = new user();

//declarando una clase
class user{
    //declarando un Metodo
    greeting(){
        return 'Hello';
    }
};

//Instanciando la clase
const gndx = new user();
console.log(gndx.greeting());

//El constructor sirve para inicializar elementos de lamisma clae 
class user{
    //constructor
    constructor(){
        console.log('Nuevo Usuario');
    }
    greeting(){
        return 'Hello';
    }
}
const steven = new user();

// hace referencia al elemento padre que lo contiene:  this 

class user{
    //constructor con this
    constructor(name){
        this.name = name;
    }
    //metodo
    speak(){
        return 'Hellow'
    }
    greeting(){
        return `${this.speak()} ${this.name}`;
    }
}

const thiago = new user('Thiago');
console.log(thiago.greeting());

//Usos de setters and getters

class user{
    //constructor
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    //metodos
    speak(){
        return 'Hellow'
    }
    greeting(){
        return `${this.speak()} ${this.name}`;
    }

    get uAge(){
        return this.age;
    }
    set uAge(n){
        this.age = n;
    }
}
const bebeloper1 = new user ('Steven', 39);
console.log(bebeloper1.uAge);
console.log(bebeloper1.uAge=20);