// leemos elementos html
const h1 = document.querySelector('h1')
const input1 = document.getElementById('calculo1')
const input2 = document.getElementById('calculo2')
const btn = document.getElementById('btnCalcular')
const p = document.getElementById('result')

// Una mejor prácticas sería quitar el evento de html y añadirlo desde js usando
// addEventListenner. Esta función recibe: (1) un evento especifico a "escuchar" y 
// (2) el nombre descriptivo de la funcion que debe llamar dicho evento.
btn.addEventListener('click', btnOnClick) 
// Notemos que btnOnclick no lleva parentesis (), esto se debe a que los () ocacionarían
// que js ejecutara una función ¿ya ejecutada?.

function btnOnClick(){
    concatenacion = input1.value + input2.value
    p.innerText = 'Resultado: ' + concatenacion
}