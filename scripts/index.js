import Curso from './clases/Curso.js'
import Profesor from './clases/Profesor.js'
import Alumno from './clases/Alumno.js'
//Instanciando objetos de la clase curso
/**
const html = new Curso("Html desde cero", "https://edteam-media.s3.amazonaws.com/courses/small/26557907-0555-427e-a40c-6ff207f98d72.png", 10)
const css = new Curso("Css desde cero", "https://edteam-media.s3.amazonaws.com/courses/small/daa72e4e-c5d0-406e-9f6d-01e646bf719b.png", 8)
const javascript = new Curso("Java Script desde cero", "https://edteam-media.s3.amazonaws.com/courses/medium/61e5a210-8dab-412e-a6dc-802c070cc18c.jpg", 5)
 */

const elem = document.getElementById("cursos")

//Funcion que imprime un curso en el DOM
//Recibe un objeto de tipo curso
function mostrarCurso(curso) {
    const hijo = document.createElement("div")
    hijo.classList.add("card")
    hijo.innerHTML = `
    <div class="img-container s-ratio-16-9 s-radius-tr s-radius-tl">
    <img src="${curso.getPoster()}" alt = "${curso.getNombre()}"/>
    </div>
        <div class="card__data s-border s-radius-br s-radius-bl s-pxy-2">  
            <h3 class="t5 s-mb-2 s-center" >${curso.getNombre()}</h3>
            <div class="s-center">
                <span class="small"># de clases: ${curso.getClases()}</span>
            </div>
        </div>
    `
    elem.appendChild(hijo) 
}

/*
//Llamadas a la funcionmostar curso
mostrarCurso(html)
mostrarCurso(css)
mostrarCurso(javascript)
*/

const formulario = document.getElementById("formCursos")
formulario.addEventListener("submit", e => {
    e.preventDefault()
    const target = e.target
    const curso = new Curso(target.nombreCurso.value, target.posterCurso.value, target.clasesCurso.value)
    mostrarCurso(curso);
    formulario.reset()     
})

const profe = new Profesor("Raul", "Quiroga", "Raul@gmail.com",true, ["React", "Drupal"] )
//console.log(profe)

const alum1 = new Alumno("Kevin", "Aliaga", "kevin@gmail.com", true, ["React", "Drupal"])
console.log(alum1)

const html = new Curso("HTML desde cero", "miposter.png",17)

html.setInscritos([alum1])
