function validar(){
    let eNombre = document.getElementById("nombre")
    let vNombre = eNombre.value
    let eErrorNombre = document.getElementById("errorNombre")
    let eApellido = document.getElementById("apellido")
    let vApellido = eApellido.value
    let eErrorApellido = document.getElementById("errorApellido")
    validarLargoMinimo(eNombre,vNombre,eErrorNombre)
    validarLargoMinimo(eApellido,vApellido,eErrorApellido)

    
}

function validarLargoMinimo(elemento,valor,eError){
    if(valor.length < 3){
        console.log("Pocos caracteres")
        alert("Debes ingresar mas de 3 caracteres")
        eError.innerText = "debes ingresar mas de 3 caracteres"
        elemento.style.backgroundColor = "red"
        elemento.style.color = "white"
    }else{
        console.log("Todo bien")
        eError.innerText = ""
        eError.style.backgroundColor = "green"
    }
}

// def validar():
//     asdasd