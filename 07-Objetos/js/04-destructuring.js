// Veamos como asignar variables hacia un objeto


const producto = {
    nombre: "Monitor 20 pulgadas", // La , es importante, sin ella tendriamos un error
    precio: 30,
    disponible: true, // el último elemento puede o no tener la ,
}

//const nombre = producto.nombre
// !Object destructuring
const { nombre } = producto;

// si deseas extraer más variables;
const { precio } = producto;

console.log(nombre)
console.log(precio)

// Ambas al tiempo
// const {nombre, precio} = producto;