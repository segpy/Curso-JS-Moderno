//! Function in objects
const reproductor = {
    reproducir: function(id) {
        console.log(`Reproduciendo canción id ${id}`);
    },
    pausar: function() {
        console.log('pausando...');
    },
    borrar: function(id) {
        console.log(`Borrando canción con id: ${id}`)
    },
    crearPlaylist: function(nombre) {
        console.log(`Creando la Playlist ${nombre}`);
    },
    reproducirPlaylist: function(nombre) {
        console.log(`Reproduciendo la Playlist ${nombre}`)
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

