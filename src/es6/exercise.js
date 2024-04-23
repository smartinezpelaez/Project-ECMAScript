//Para recordar, en este caso el import se hace con { } porque no se hizo el export default getData en el archivo api.js. 
//Si se hubiera hecho, simplemente sería, import getData from "./api.js";import { getData } from "./api.js"

import  { getData } from "./api.js"
export async function solution() {   
    const data = await getData(); 
    console.log(data);
  }