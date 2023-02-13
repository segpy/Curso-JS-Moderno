// Los objetos son la pieza principal en JavaScript, en lugar de crear diferentes variables:

const nombreProducto = "Monitor 20 Pulgadas";
const precio = 30;
const disponible = true;

//!Crear un objeto
// Object Literal
const producto = {
    nombre: "Monitor 20 pulgadas", // La , es importante, sin ella tendriamos un error
    precio: 30,
    disponible: true, // el último elemento puede o no tener la ,
}

// Object Constructor
function Producto(nombre, precio) {
    this.nombre = nombre
    this.precio = precio
    this.disponible = true
}
const producto2 = new Producto('Tablet', 150)

console.log(producto);
console.log(producto2);