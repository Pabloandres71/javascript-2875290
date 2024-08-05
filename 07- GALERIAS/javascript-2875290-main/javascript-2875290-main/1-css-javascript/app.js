const contenedor = document.querySelector('.container');
const solGuia = document.querySelector('.guia');
const sol = document.querySelector('.sol');
const nubeUno = document.querySelector('.uno');
const nubeDos = document.querySelector('.dos');
const nubeTres = document.querySelector('.tres');
const nubeCuatro = document.querySelector('.cuatro');


function moverSol() {
    sol.style.animationName = 'move'
    sol.style.animationDuration = '3s'
    sol.style.animationIterationCount = 'infinite'
    solGuia.style.animationName = 'move'
    solGuia.style.animationDuration = '3s'
    solGuia.style.animationIterationCount = 'infinite'


    console.log('Ejecutando')
}
function moverNubes1() {
    nubeUno.style.animationName = 'nube'
    nubeUno.style.animationDuration = '6s'
    nubeUno.style.animationIterationCount = 'infinite'
    nubeDos.style.animationName = 'nube'
    nubeDos.style.animationDuration = '4s'
    nubeDos.style.animationIterationCount = 'infinite'

}
function moverNubes2() {
    nubeTres.style.animationName = 'nube2'
    nubeTres.style.animationDuration = '6s'
    nubeTres.style.animationIterationCount = 'infinite'
    nubeCuatro.style.animationName = 'nube2'
    nubeCuatro.style.animationDuration = '8s'
    nubeCuatro.style.animationIterationCount = 'infinite'
}
function noche (){
    if (e == 0) {
        contenedor.style.backgroundColor = 'white';
        e = 1;
    } else {
        contenedor.style.backgroundColor = 'blue';
        e = 0;
    }
}


sol.addEventListener('click', moverSol);
solGuia.addEventListener('click', moverSol);
nubeUno.addEventListener('click', moverNubes1);
nubeDos.addEventListener('click', moverNubes1);
nubeTres.addEventListener('click', moverNubes2);
nubeCuatro.addEventListener('click', moverNubes2);
contenedor.addEventListener('click',noche);

// Profe la noche da cuando uno le da abajo de las montañas ...
// Eso me falto me cuadrarlo ...


