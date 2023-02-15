// Veamos un capitulo Sobre operadores, previamente ya vimos que existen operadores de suma, resta, multiplicación, pero existen unos muy útiles de compraración

const numero1 = 20;
const numero2 = "20";
const numero3 = 30;

// ! Mayor >
console.log( numero1 > numero3 );
console.log( numero3 > numero1 );


// ! Menor <
console.log(numero3 < numero1);

// ! Igual ==
console.log('20 == 30: ',numero1 == numero3);
console.log('20 == "20": ',numero1 == numero2);
console.log('20 == 20: ',numero1 == parseInt(numero2));

// ! Estrictametne igual ===
console.log('20 === "20": ',numero1 === numero2 );


// ! Diferente  !=

console.log('20 != 30: ',numero1 != numero3);
console.log('20 != "20": ',numero1 != numero2);
console.log('20 !== "20": ',numero1 !== numero2);

// ! And &&
console.log('OR: true || false', true || false);
// ! OR ||
console.log('AND: true && true', true && true);


// ! Typeof
console.log('Tipo de 20: ', typeof numero1 );
console.log('Tipo de "20": ', typeof numero2 );






