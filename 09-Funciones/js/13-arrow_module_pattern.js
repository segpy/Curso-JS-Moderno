//! Arrow functions en métodos de propiedad

const reproductor = {
    cancion: '',
    reproducir: id => console.log(`Reproduciendo canción id ${id}`),
    pausar: () => console.log('pausando...'),
    borrar: id => console.log(`Borrando canción con id: ${id}`),
    crearPlaylist: nombre =>  console.log(`Creando la Playlist ${nombre}`),
    reproducirPlaylist: nombre =>  console.log(`Reproduciendo la Playlist ${nombre}`),

    // También existen los Set y Get

    set nuevaCancion(cancion) {
        this.cancion = cancion;
        console.log(`Añadiendo ${cancion}`)
    },
    get obtenerCancion() {
        console.log(`${this.cancion}`)
    }
}
reproductor.reproducir(30);
reproductor.pausar();

// Tambien los métodos pueden quedarse por fuera
// reproductor.borrar = function(id) {
    
// }
reproductor.borrar(20);
reproductor.crearPlaylist('Heavy Metal');
reproductor.reproducirPlaylist('Heavy Metal');


// Probando set y get se utilizando de la siguiente forma
reproductor.nuevaCancion = 'Enter Sandman';
reproductor.obtenerCancion;


//! Module Pattern
const counter = (() => {
    let count = 0;
    const print = (message) => {
        console.log(message+'---'+count);
    }

    //return an object
    return {
        get: () => { return count;},
        set: (value) => { 
            count = value;
            print('After setting: ')
        },
        increment: () => {
            count++;
            print('After increment: ')
        },
        reset: ()=>{
            print('Before reset: ')
            count=0;
            print('After reset: ')
        }
    }
})();
counter.increment()
counter.increment()
counter.increment()
counter.get()
counter.set(10)
counter.get()