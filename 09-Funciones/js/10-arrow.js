
//! Arrow Function

//?Arrow con corchetes (return)
const aprendiendo2 = (mensaje= 'Fluido') => {
    return `Aprendiendo JavaScript ${mensaje}`;
}

//?Arrow sin corchetes
const aprendiendo3 = (mensaje) => `Mensaje sin corchetes ${mensaje}`


console.log(aprendiendo2());
console.log(aprendiendo3('en Arrow Function'));

