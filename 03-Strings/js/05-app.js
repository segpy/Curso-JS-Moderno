const producto = 'Monitor de 20 pulgadas';

//! Reemplazar y cortar texto

// .replace Reemplazar texto: string
console.log(`Replace: ${producto}`);
console.log(producto.replace('pulgadas', '"'));
console.log(producto.replace('Monitor', 'Monitor Curvo'));
console.log('')

// .slice Cortar texto: string
console.log(`Slice: ${producto}`);
console.log(producto.slice(0, 10));
console.log(`Slice vacío: ${producto.slice(2, 1)}`);
console.log('')

// .substring Cortar texto: string
console.log(`Substring: ${producto}`);
console.log(producto.substring(0, 10));
console.log(producto.substring(2, 1));
console.log('')

// .substr Cortar una longitud de texto: string
console.log(`Substr: ${producto}`);
console.log(producto.substr(5, 2));

const nombre = 'Juan';
console.log(`Nombre: ${nombre}`);
console.log(nombre.substring(0, 1));
console.log(nombre.substring(1, 0));
console.log(nombre.charAt(0));

