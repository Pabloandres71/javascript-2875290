const container = document.querySelector('.container')
const buscador = document.querySelector("#buscador")
const textoBusqueda = document.querySelector("#textoBusqueda")
const listaGenero = document.querySelector("#listaGenero")
const genero = document.querySelector("#Genero")



function mostrarResults (videoJuegos){
videoJuegos.forEach(element => {
let card = document.createElement('div')

card.innerHTML =
`   <div class="card">
        <img src='${element.img}' alt="Imagen de la tarjeta" class="card-imagen">
        <div class="card-contenido">
            <h2 class="card-titulo">${element.nombre}</h2>
            <p class="card-descripcion">${element.año}</p>
            <p class="card-descripcion">${element.genero}</p>
            <p class="card-descripcion">${element.creador}</p>
            <p class="card-descripcion">${element.edad_recomendada}</p>
        </div>
    </div>
`
contendor.appendChild(card);
})

}

mostrarResults(videoJuegos)

function filtrar (e){
    e.preventDefault()
    container.innerHTML = ""

    let filtro = videoJuegos
  
    if(listaGenero.value !== "All"){
     filtro = filtro.filter(videoJuegos => videoJuegos.listaGenero.toLowerCase() == listaGenero.value.toLowerCase());

    }
    
     if(genero.value !== "All"){
        filtro = filtro.filter(videoJuegos => videoJuegos.genero.toLowerCase() == genero.value.toLowerCase());
   
       } 

    if(textoBusqueda.value){
      filtro = filtro.filter(videoJuegos => videoJuegos.nombre.toLowerCase().includes(textoBusqueda.value.toLowerCase()));
    }

    mostrarResults(filtro) 
}

console.log(videoJuegos)

buscador.addEventListener("submit", filtrar)
 

