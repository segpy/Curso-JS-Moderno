// Veamos como unir 2 objetos

const producto = {
    nombre: "Monitor 20 pulgadas",
    precio: 30,
    disponible: true
}


const medidas = {
    peso: '1 kg',
    medida: '1 metro'
}


//! Object Method
// .assign   Para unir dos objetos en uno solo

const resultado = Object.assign(producto, medidas);

console.log(resultado);
