// leemos elementos html
const h1 = document.querySelector('h1')
const input1 = document.getElementById('calculo1')
const input2 = document.getElementById('calculo2')
const btn = document.getElementById('btnCalcular')
const p = document.getElementById('result')

// si colocamos los input y el boton dentro de un formulario html, magicamente 
// el ultimo botón dentro del form sera tipo "submit", es decir, al presionarlo 
// se enviara el formulario y se recargara la página. Esto dejaría inservible 
// nuestro proyecto al no poder visualizar resultado.

// para corregir lo anterior debemos recibir un evento en nuestra funcion y especificar 
// con preventDefault que este evento se ejecute diferente a lo predeterminado.
btn.addEventListener('click', btnOnClick)

function btnOnClick(event){
    // console.log({event})
    event.preventDefault()
    concatenacion = input1.value + input2.value
    p.innerText = 'Resultado: ' + concatenacion
}

// otra opción para mostrar el resultado sería escuchando otro evento:
// const form = document.querySelector('form')
// form.addEventListener('submit', btnOnClick)

// function btnOnClick(event){
//     console.log({event})
//     event.preventDefault()
//     concatenacion = input1.value + input2.value
//     p.innerText = 'Resultado: ' + concatenacion
// }

// una forma más sencilla de lidiar con este problema sería forzar el tipo del botón
// desde html usando la propiedad type="button".