// leemos elementos html con querySelector
const h1 = document.querySelector('h1')
const p = document.querySelector('p')
const pClass = document.querySelector('.parrafito')
const pID = document.querySelector('#pid')
const input = document.querySelector('input')

// innerHTML permite modificar directamente archivos html
// esto es peligroso y se recomienda, en vez, usar innerText
h1.innerHTML = 'Patito <br>Feo' // inserta un salto de linea
h1.innerText = 'Patito <br>Feo' // inserta solo texto

// la manera mas comun de modificar atributos html es con:
// (1) getAttribute, donde obtenemos su valor desde HTML
// (2) setAttribute, con el insertamos un atributo y su valor
console.log(h1.getAttribute('class'))

h1.setAttribute('class', 'rojo')
console.log(h1.getAttribute('class'))

// hablando especificamente de clases podemos usar classList
// para agregar o remover valores:
h1.classList.add('azul')
console.log(h1.getAttribute('class'))

h1.classList.remove('rojo')
console.log(h1.getAttribute('class'))

// existen otras funciones de classList como toggle y contains

// si el atributo ya existe podemos modificarlo así:
input.value = '456'
console.log(input.value)

// para crear elementos html desde 0 usamos:
const img = document.createElement('img')
img.setAttribute('src', 'https://images.pexels.com/photos/416160/pexels-photo-416160.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')

// para visualizar el elemento anterior lo insertamos en un
// elemento previamente creado en nuestro html
pID.append(img)

// reto: remover el texto de pid y mostrar la imagen
pID.innerText = ''
pID.appendChild(img)