const producto = 'Monitor de 20 pulgadas';
const precio = '30 USD';

const newString = producto + precio

//! Concatenar Strings

// Operador +
console.log(newString);

// .concat Concatenar Strings: string
console.log(producto.concat(precio));

// Template Strings
//? Usar para mostrar arrays, objetos, etc.
console.log(producto, precio);


// Concatenar variables ES6
console.log(`El producto ${producto} tiene un precio de ${precio}`);