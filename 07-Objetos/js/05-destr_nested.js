// Veamos como hacer destructuring de un objeto que esta dentro de otro objeto..

const producto = {
    nombre: "Monitor 20 pulgadas",
    precio: 30,
    disponible: true,
    informacion : {
        peso: '1kg',
        medida: '1m',
        newobj : {
            test: 'message',
            attr: 25,
        }
    }
}


const { nombre, informacion} = producto;
//! Destructuring nested objects
const { informacion: { peso, medida, newobj: { test, attr } } } = producto;
// const { newobj: { test, attr } } = informacion


console.log(nombre)
console.log(informacion)
console.log(peso)
console.log(medida)
// console.log('Newobj:',newobj)
console.log(test)