//Funcion Tradicional
function square1(num){
    return num * num;
} 

//Arrow Function con return
const square2 =  (num) =>{
    return num * num;
}

//Arrow function con retun implicito
const square3 = num => num * num;

square1(4);
square2(4);
square3(4);