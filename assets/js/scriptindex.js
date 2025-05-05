function validar(){
    let eNombre = document.getElementById("nombre")
    let vNombre = eNombre.value
    console.log(eNombre)
    console.log(vNombre)
    console.log(vNombre.length)
    if (vNombre.length > 3){
        console.log("pasa validacion, guarda en la bd")
    }
    else{
    alert("el nombre debe tener al menos 3 caracteres")
    }
}
// def validar():
//     asdasd