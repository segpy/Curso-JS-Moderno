// En este video estaremos viendo Object.keys y object.values y entries, estos son más conocidos como iteradores de objetos, 

const producto = {
    nombre: "Monitor 20 pulgadas",
    precio: 30,
    disponible: true
}

//! Object Methods
// .keys        Llaves del objeto: array
console.log(Object.keys(producto))
// .values      Valores del objeto: array
console.log(Object.values(producto)); 
// .entries     Clave/Valor: array
console.log(Object.entries(producto)); 