function validar(){
    let eNombre = document.getElementById("nombre")
    let vNombre = eNombre.value
    let eErrorNombre = document.getElementById("errorNombre")
    console.log(eNombre)
    console.log(vNombre)
    console.log(vNombre.length)
    if (vNombre.length < 3){
        console.log("pasa validacion, guarda en la bd")
        alert("el nombre debe tener al menos 3 caracteres")
        eErrorNombre.innerText = "el nombre debe tener al menos 3 caracteres"
        eNombre.style.backgroundColor = "Red"
    }
    else{
    console.log("Todo bien")
    eErrorNombre.innerText = ""
    eNombre.style.backgroundColor = "green"
    }
}
// def validar():
//     asdasd