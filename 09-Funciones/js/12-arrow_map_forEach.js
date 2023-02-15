const carrito = [
    { nombre: 'Monitor 20 Pulgadas', precio: 500},
    { nombre: 'Televisión 50 Pulgadas', precio: 700},
    { nombre: 'Tablet ', precio: 300},
    { nombre: 'Audifonos', precio: 200},
    { nombre: 'Teclado', precio: 50},
    { nombre: 'Celular', precio: 500},
]


//! MAP, crea un array
// Arrow sin corchetes
const nuevoArray = carrito.map( (item) => 
    `Articulo: ${item.nombre} Precio: ${item.precio}`
);
// Arrow con corchetes (return)
const nuevoArray2 = carrito.map( (item) => {
    return `Articulo: ${item.nombre} Precio: ${item.precio}`
})


//!forEach, no crea arrays
const nuevoArray3 = carrito.forEach( (producto) => {
    return  `Articulo: ${ producto.nombre } Precio: ${producto.precio} `;
 })

console.log(nuevoArray);
console.log(nuevoArray2);
console.log(`Resultado del forEach: `,nuevoArray3);
