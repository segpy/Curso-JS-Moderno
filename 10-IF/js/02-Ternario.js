
const autenticado = false;
const puedePagar = false

// !Ternario

console.log( autenticado  ? 'Si esta autenticado' : 'No esta autenticado');

// El OR y el && también se pueden utilizar en el ternario
console.log( autenticado && puedePagar ? 'Si esta autenticado' : 'No esta autenticado');

// Ternario anidado...
console.log( autenticado  ?  puedePagar ? 'Si puede pagar' : 'esta autenticado pero no puede pgar' : 'No esta autenticado');
