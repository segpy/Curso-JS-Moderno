const producto = '      Monitor de 20 pulgadas ';

console.log(producto);
console.log(producto.length);

//! Eliminar espacios en blanco

// .trim Eliminar espacios en blanco: string
// .trimStart del inicio
// .trimEnd del final
console.log(producto.trimStart());
console.log(producto.trimStart().length);

// Cadenas de métodos
console.log(producto.trimStart().trimEnd());
console.log(producto.trimStart().trimEnd().length);

console.log(producto.trim());
console.log(producto.trim().length);