// Se pueden modificar o agregar valores aunque use const

const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio'];

//! Agregar manual
meses[0] = 'Nuevo Mes'
// También se puede añadir al final
meses[6] = 'Ultimo Mes'
console.log(meses);


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

//! Agregar con metodos [Forma imperativa]
// .push        Agregar un elemento al final del arreglo: array
carrito.push(producto);
carrito.push(producto2);
// .unshift     Agregar un elemento al principio del arreglo: array
carrito.unshift(producto3);

console.log(carrito);