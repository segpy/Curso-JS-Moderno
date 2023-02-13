"use strict";


const producto = {
    nombre: "Monitor 20 pulgadas",
    precio: 30,
    disponible: true
}

console.log(producto);


//! Object Methods
// .freeze  Objeto en modo [ReadOnly]
Object.freeze( producto );
// .isFrozen Verificar si el objeto esta en modo Read Only
console.log('Is frozzen',Object.isFrozen(producto) );


// No se puede Agregar, Actualizar o Eliminar
//producto.disponible = false;

// producto.imagen = "imagen.jpg";

// delete producto.nombre;


console.log(producto);
