// !Null y Undefined

// veamos un ejemplo de undefined.
let numero;

console.log(numero); // undefined
console.log(typeof numero)


// En el caso de null es más bien asignarlo
let numero2 = null;
console.log(numero2); // null
console.log(typeof numero2);



// Comparando null y undefined
console.log (numero == numero2); //true

// Para ver la comparacion real llega a ser muy  util el comparador estricto
console.log(numero === numero2); //false