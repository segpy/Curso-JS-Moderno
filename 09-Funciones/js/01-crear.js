//! Crear funciones

// Metodo 1 (Function Declaration)
function sumar(a=10, b=20) {
    console.log(a + b);
}
sumar(100, 250); // se manda llamar por su nombre seguido del parentesis()


// Metodo 2 (Function Expression)
const sumar2 = (a= 10, b=20) => {
    console.log(a + b);
}
sumar2(113, 200); // se manda llamar de la misma forma
sumar2()


