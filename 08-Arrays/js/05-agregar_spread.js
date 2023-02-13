// Veamos como añadir un elemento a un arreglo utilizando el Spread Operator o Rest Operator...
const carrito = [];

// Añadir un elemento al carrito...
const producto = {
    nombre: 'Monitor 20 Pulgadas', 
    precio: 500
}

const producto2 = {
    nombre: 'Celular', 
    precio: 500
}
const producto3 =  { 
    nombre: 'Teclado', 
    precio: 50
}

//! Agregar valores [Forma declarativa]
// Imperativa: Modifica el objeto inicial
// Declarativa: No modifica el objeto inicial

let resultado = [...carrito, producto];
 resultado = [...resultado, producto2];

 // Para añadir al inicio...
 resultado = [producto3, ...resultado];

console.log(resultado);