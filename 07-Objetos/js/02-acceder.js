// Veamos como acceder a las propiedades de un objeto:

const producto = {
    nombre: "Monitor 20 pulgadas", // La , es importante, sin ella tendriamos un error
    precio: 30,
    disponible: true, // el último elemento puede o no tener la ,
}


console.log(producto);
//! Acceder
// Sintaxis de punto

console.log(producto.nombre);
console.log(producto.precio);
console.log(producto.disponible);

// Otro metodo, similar a Python
console.log(producto['nombre']);



//!Agregar o Eliminar variables
// Añadir propiedades nuevas a un objeto...
producto.imagen = "image.jpg";


// Finalmente para eliminar una propiedad se utiliza delete
delete producto.nombre;

console.log(producto);