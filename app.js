const pelota = document.querySelector('#circulo');
const btnMover = document.querySelector('#btnMover');
const busquedad = document.querySelector('#box');
const regresar = document.querySelector('#volver');
let e = 0;
//2. funciones
function mover() {

    if (e == 0) {
        pelota.style.marginLeft = '1590px';
        pelota.style.transitionDuration = '.5s';
        e = 1;
    } else {
        pelota.style.marginLeft = '0px';
        pelota.style.transitionDuration = '.5s';
        e = 0;
    }
}
const miInput = document.getElementById('boton');

function cambiarColor() {
    console.log(busquedad.value);
    pelota.style.backgroundColor = busquedad.value;
}
function devolver() {
    pelota.style.backgroundColor = '#232323';
    pelota.style.transitionDuration = '.5s';
    e = 0;

}


//3. Eventos

btnMover.addEventListener('click', mover);
btnMover.addEventListener('click', cambiarColor);


