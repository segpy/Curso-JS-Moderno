const producto = "Monitor de 20 pulgadas Monitor";
const producto2 = new String('Monitor de 20 pulgadas');

//! Buscar texto

// .indexOf Buscar la primera coincidencia: index
console.log(`indexOf: ${producto.indexOf("Monitor")}`);

// .includes Verificar si existe una palabra: boolean
console.log(`includes 1: ${producto.includes("Monitor")}`);
console.log(`includes 2: ${producto.includes("monitor")}`);

// .charAt Buscar el carácter en una posición: char
console.log(`charAt: ${producto.charAt(0)}`);

// .startsWith Verificar si empieza con: boolean
console.log(`startsWith: ${producto.startsWith("Monitor")}`);

// .endsWith Verificar si termina con: boolean
console.log(`endsWith: ${producto.endsWith("Monitor")}`);



// ?Usando regex
// .match Buscar coincidencias: array
console.log('Match: ',producto.match(/Monitor/g));

// .search Buscar primera coincidencia: index
console.log('Search: ',producto.search(/Monitor/g));