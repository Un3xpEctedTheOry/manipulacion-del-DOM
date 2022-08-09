// leemos elementos html con querySelector
const h1 = document.querySelector('h1')
const p = document.querySelector('p')
const pClass = document.querySelector('.parrafito')
const pID = document.querySelector('#pid')
const input = document.querySelector('input')

// notemos que querySelector recibe un string con formato CSS
// otra opción para leer elementos HTML serían usando:
// (1) const pClass = document.getElementsByClassName('parrafito')
// (2) const pID = document.getElementById('pid')

// si necesitamos mostrar varios elementos usando console.log()
// podemos colocarlos en un objeto {} para mostrar todos a la vez
console.log({h1, p, pClass, pID, input})

// podemos acceder desde js a los atributos html de nuestros elementos
console.log(input.value)