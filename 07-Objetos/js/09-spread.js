
const producto = {
    nombre: "Monitor 20 pulgadas",
    precio: 30,
    disponible: true
}


const medidas = {
    peso: '1 kg',
    medida: '1 metro'
}


//! Spread operator

const resultado = { 
    ...producto, 
    0:'mymessage', 
    ...medidas};

console.log(resultado);