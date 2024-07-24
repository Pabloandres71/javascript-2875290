
const inputTarea = document.querySelector('#tarea');
const btnCrear = document.querySelector('#agregar');
const listado = document.querySelector('#lista');
const btnEliminar = document.querySelector('span');


function colocar() {

    const tarea = document.createElement('div');
    tarea.innerText = inputTarea.value;
    tarea.classList.add('tarea');
   

    listado.appendChild(tarea);

    console.log(tarea)
}

function eliminar (){
   
    btnEliminar.textContent = "X";
    listado.appendChild(btnEliminar);

    btnEliminar.onclick = function(){
        listado.remove();
        total--;
        cantidad.innerHTML = total;
    }
}
btnCrear.addEventListener('click',colocar);
btnEliminar.addEventListener ('click',eliminar);