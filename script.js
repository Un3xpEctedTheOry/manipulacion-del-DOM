// leemos elementos html
const h1 = document.querySelector('h1')
const input1 = document.getElementById('calculo1')
const input2 = document.getElementById('calculo2')
const btn = document.getElementById('btnCalcular')
const p = document.getElementById('result')

// podemos "escuchar" eventos de elementos html usando js, esto se hace agregando
// atributos como onClick (para button) u onChange (para input). Escribir js dentro 
// de html es una mala práctica, por eso, "escuchar" los eventos se realiza usando 
// funciones, por ejemplo:
function btnOnClick(){
    concatenacion = input1.value + input2.value
    p.innerText = 'Resultado: ' + concatenacion
}

// aunque el ejemplo anterior parece lo más adecuada, añadir eventos en html ocasiona
// archivos caóticos, por lo que, una mejor práctica sería... (ver la siguiente clase).