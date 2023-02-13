// Veamos un par de funciones para convertir a números

const numero1 = "20";
const numero2 = "20.2";
const numero3 = "Uno";
const numero4 = 20;

console.log(numero1);

// !Casting

//*Str to Int
// parseInt    Convertir de String a Número : number
console.log(Number.parseInt(numero1)); 
console.log(Number.parseInt(numero3)); 
// parseFloat  Convertir de String a numero con decimales: number
console.log(Number.parseFloat(numero2)); 

//*Int to Str
// .toString    Convertir String a numero : String
console.log(numero4.toString());

// !Methods

// .isInteger Revisar si un número es entero : boolean
console.log(Number.isInteger(numero4) );
console.log(Number.isInteger(numero3) );