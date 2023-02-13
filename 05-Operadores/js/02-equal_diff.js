
const numero1 = 20;
const numero2 = "20";
const numero3 = 30;


// Revisar si 2 valores son iguales o diferentes
console.log('20 == 30: ',numero1 == numero3);
console.log('20 == "20": ',numero1 == numero2);
console.log('20 == 20: ',numero1 == parseInt(numero2));


// Typeof
console.log('Tipo de 20: ', typeof numero1 );
console.log('Tipo de "20": ', typeof numero2 );

// Operador estricto (revisa valor y tipo de dato)
console.log('20 === "20": ',numero1 === numero2 );

// Diferente a 

console.log('20 != 30: ',numero1 != numero3);
console.log('20 != "20": ',numero1 != numero2);
console.log('20 !== "20": ',numero1 !== numero2);