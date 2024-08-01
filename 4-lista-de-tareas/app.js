var inputTarea = document.getElementById("tarea");
var btn = document.getElementById("agregar");
var listado = document.getElementById("lista");

btn.onclick = function() {
        if (inputTarea.value == "") {
        return;
    }

    var elemento = inputTarea.value;
    var li = document.createElement("li");

    li.textContent = elemento;
    listado.appendChild(li);

    var btnEliminar = document.createElement("span");
    btnEliminar.textContent = "X";
    li.appendChild(btnEliminar);

    btnEliminar.onclick = function() {
        li.remove();
        total--;
        cantidad.innerHTML = total;
    }

    inputTarea.value = "";

}