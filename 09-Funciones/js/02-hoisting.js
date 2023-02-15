//! Hoisting 

// Ademas de las muy notables diferencias en sintaxis, quiero mostrarte las diferencias entre ambas... si llamamos la función antes de declararla, el function declaration va a funcionar bien, mientras que el otro nos va a marcar un error..

sumar();
function sumar() {
    console.log(2 + 2);
}

sumar2();
const sumar2 = () => console.log( 3 + 3 );


// Eso pasa porque JavaScript se ejecuta en 2 vueltas - Eso se le conoce como Hoisting.

// Creacion: Registra todas las funciones y determina las variables, 
// Ejecucion: Paso encargado de ejecutar el codigo

// Por lo tanto el primer código funciona porque function se registra primero y después se ejecuta el código. el segundo no funciona porque si bien es una función no es declarada como tal, lo ve más bien como una variable...



// básicamente el codigo se ejecuta asi:
const sumar2;
sumar2(); // a estas alturas es undefined...
sumar2 = function() {
    console.log(3 + 3); // pero como ya habiamos llamado la función, se queda como undefined
}