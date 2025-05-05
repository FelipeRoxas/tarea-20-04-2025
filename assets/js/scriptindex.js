function validar(){
    let eNombre = document.getElementById("nombre")
    let vNombre = eNombre.value
    let eErrorNombre = document.getElementById("errorNombre")
    let eApellido = document.getElementById("apellido")
    let vApellido = eApellido.value
    let eErrorApellido = document.getElementById("errorApellido")
    if (vNombre.length < 3){
        console.log("pocos caracteres")
        eErrorNombre.innerText = "el nombre debe tener al menos 3 caracteres"
        eNombre.style.backgroundColor = "red"
        eNombre.style.color = "white"
    }
    else{
    console.log("Todo bien")
    eErrorNombre.innerText = ""
    eNombre.style.backgroundColor = "green"
    }
    if (vApellido.length < 3){
        console.log("pocos caracteres")
        eErrorApellido.innerText = "el nombre debe tener al menos 3 caracteres"
        eApellido.style.background = "red"
        eApellido.style.color = "yellow"
    }
    else{
        console.log("Todo Correcto")
        eErrorApellido.innerText = ""
        eApellido.style.backgroundColor = "green"
    }
    if (vNombre.length < 3 && vApellido.length < 3){
        alert("el nombre debe tener al menos 3 caracteres")

    }
    
}

// def validar():
//     asdasd