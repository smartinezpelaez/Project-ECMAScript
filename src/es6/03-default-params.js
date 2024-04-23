function newUser(name, age, country){
    var name = name || 'Steven';
    var age = age || 39;
    var country = country || 'COL';
    console.log (name,age,country);
}
newUser();
newUser('Vane', 41, 'ECU');

//nueva forma de agregar parametros

function newAdmin(name ='Thiago', age = 8, country = 'ARG'){
    console.log(name,age,country);
}

newAdmin();
newAdmin('Valeria', 16, 'ESP');