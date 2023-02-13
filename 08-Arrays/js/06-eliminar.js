const carrito = [];

const producto = {
    nombre: 'Monitor 20 Pulgadas', 
    precio: 500
}

const producto2 = {
    nombre: 'Celular', 
    precio: 500
}
// carrito.push(producto)
carrito.splice(carrito.length, 0, producto, producto2)
const producto3 =  { 
    nombre: 'Teclado', 
    precio: 50
}
// carrito.unshift(producto3)
carrito.splice(0,0,producto3)

//! Eliminar elementos
// .pop     Eliminar el ultimo elemento: array
// carrito.pop();

// .shift   Elimina el primer elemento: array
// carrito.shift();


// .splice  Elimina o Agrega elementos en el index: array
//?Agregando
carrito.splice(1,0,producto,producto); // 
//?Eliminando
carrito.splice(1,1)



console.log(carrito);