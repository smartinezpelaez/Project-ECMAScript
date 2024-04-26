/*El nuevo dato primitivo bigint permite manejar números enteros muy grandes. Existen dos formas de crear un bigint:
 el número entero seguido de n o mediante la función BigInt*/

 const aBigNumber = 8975487845566645444455n;
 console.log(aBigNumber);
 console.log('*********');
 const anotherBigNumber = BigInt(8975487845566645444455);
 console.log(anotherBigNumber);