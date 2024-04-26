/* export function* getId() {
    // Tu código aquí 👈
    let id = 0;
    while (true) { 
      yield id++;
    }
  }
  const myId = getId();
  console.log(myId.next().value);
  console.log(myId.next().value);
  console.log(myId.next().value);
  console.log(myId.next().value);
  console.log(myId.next().value); */


  export function* getId(){
    let newMichi=0 // Es una variable que sirve para llevar el contro de los nuevos ingresos
    let id = Math.random().toString(36).substring(5).toUpperCase();// Aquí se genera un número aleatorio alfanumérico
    while(true){
        yield `${newMichi +=1} ${id}`;// Aquí concateno mi número de control y los codigos que irán variando para evitar que existan Id´s duplicados
    }
  }

  const michiId = getId();
  console.log(michiId.next().value);
  console.log(michiId.next().value);
  console.log(michiId.next().value);
  console.log(michiId.next().value);
  
  