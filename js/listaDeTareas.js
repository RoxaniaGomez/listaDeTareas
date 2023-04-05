function agregarTarea() {
    var inputTarea = document.getElementById("tarea");
    var tarea = inputTarea.value;

    var li = document.createElement("li");
    li.appendChild(document.createTextNode(tarea));

    var botonEliminar = document.createElement("button");
    botonEliminar.appendChild(document.createTextNode("Eliminar"));
    botonEliminar.onclick = function () {
        li.parentNode.removeChild(li);
    };
    li.appendChild(botonEliminar);

    document.getElementById("listaTareas").appendChild(li);

    inputTarea.value = "";
}
