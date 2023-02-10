const producto = 'Monitor de 20 pulgadas ';

//! Repetir y dividir Strings

// .repeat Repetir texto
const texto = 'en Promoción '.repeat(2.4);
console.log(texto);
console.log(`${producto} ${texto}!!!`);


// .split Dividir un String
const actividad = 'Estoy aprendiendo JavaScript Moderno';
console.log(actividad.split(" "));

const hobbies = 'Leer, caminar, escuchar música, escribir, aprender a programar';
console.log(hobbies.split(", "));

const tweets = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae. #js #web #udemy';
const justHashtags = tweets.substring(tweets.indexOf("#"));
console.log(justHashtags.trim());
console.log(justHashtags.split("#"));