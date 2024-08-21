const container = document.querySelector('.container')
const buscador = document.querySelector("#buscador")
const textoBusqueda = document.querySelector("#textoBusqueda")
const edadRecomendada = document.querySelector("#edadRecomendada")
const listaAños = document.querySelector("#listaAños")



function mostrarResults(videoJuegos) {
    videoJuegos.forEach(Element => {
        let card = document.createElement('div')

        card.innerHTML =
            `
            <div class="card">
            <div class="card-contenido">
            <h2 class="card-titulo">${Element.nombre}</h2>
            <p class="card-descripcion">${Element.año}</p>
            <p class="card-descripcion">${Element.genero}</p>
            <p class="card-descripcion">${Element.creador}</p>
            <p class="card-descripcion">${Element.edad}</p>
            <img src='${Element.imagen}' alt="Imagen de la tarjeta" class="card-imagen">
        
  `
        container.appendChild(card);
    })

}

mostrarResults(videoJuegos)

function filtrar(e) {
    e.preventDefault()
    container.innerHTML = ""

    let filtro = videoJuegos

    if (edadRecomendada.value !== "All") {
        filtro = filtro.filter(videoJuegos => videoJuegos.edad.toLowerCase() == edadRecomendada.value.toLowerCase());
    } 
    else (listaAños.value !== "All")
    {
        filtro = filtro.filter(videoJuegos => videoJuegos.año.toLowerCase() == listaAños.value.toLowerCase());
    }

    if (textoBusqueda.value) {
        filtro = filtro.filter(videoJuegos => videoJuegos.nombre.toLowerCase().includes(textoBusqueda.value.toLowerCase()));
    }

    mostrarResults(filtro)
}

console.log(videoJuegos)

buscador.addEventListener("submit", filtrar)