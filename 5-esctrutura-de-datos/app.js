const container = document.querySelector('.contenedor')

videoJuegos.forEach( element => {
    let card = document.createElement('div');
    card.innerHTML =
`
<div class="card">
        <img src="${element.image}">
        <div class="card-content">
            <h2 class="label">${element.nombre}</h2>
            <p><span class="label">${element.año}</span> 2017</p>
            <p><span class="label">${element.genero}</span> Aventura</p>
            <p><span class="label">${element.creador}</span> Nintendo</p>
            <p><span class="label">${element.edad_recomendada}</span> E 10+</p>
        </div>
    </div>
    
`
container.appendChild(card);
})
 
//array.forEach(function(element){})<h1>${element.nombre}</h1><p>${element.año}</p>
    
