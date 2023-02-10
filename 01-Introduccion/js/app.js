const nombre = prompt('Cual es tu nombre?')

// Toma el nombre y lo muestra en el HTML
document.querySelector('.contenido').innerHTML = `${nombre} esta aprendiendo JavaScript Moderno`

if (!nombre) {
  console.error('No ingresaste tu nombre')
}

const notes = [
  {
    id: 3,
    title: 'Tarea 3'
  }
]

console.log(notes[0].title)
