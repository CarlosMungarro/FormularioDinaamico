function agregarFila() {
    let datos = [
        document.getElementById("nombre").value,
        document.getElementById("edad").value,
        document.getElementById("raza").value,
        document.getElementById("sexo").value,
        document.getElementById("color").value,
        document.getElementById("tamano").value,
        document.getElementById("peso").value,
        document.getElementById("vacunas").value,
        document.getElementById("dueno").value,
        document.getElementById("contacto").value
    ];
    
    if (datos.every(d => d)) {
        let table = document.getElementById("dataTable").getElementsByTagName('tbody')[0];
        let newRow = table.insertRow();

        datos.forEach(dato => newRow.insertCell().innerText = dato);
        let acciones = newRow.insertCell();

        let btnEditar = document.createElement("button");
        btnEditar.innerText = "Editar";
        btnEditar.onclick = function () { editarFila(newRow); };
        acciones.appendChild(btnEditar);

        let btnEliminar = document.createElement("button");
        btnEliminar.innerText = "Eliminar";
        btnEliminar.onclick = function () { table.deleteRow(newRow.rowIndex - 1); };
        acciones.appendChild(btnEliminar);

        document.getElementById("dataForm").reset();
    } else {
        alert("Por favor, completa todos los campos.");
    }
}

function editarFila(row) {
    let inputs = ["nombre", "edad", "raza", "sexo", "color", "tamano", "peso", "vacunas", "dueno", "contacto"];
    inputs.forEach((id, index) => document.getElementById(id).value = row.cells[index].innerText);
    row.parentNode.removeChild(row);
}