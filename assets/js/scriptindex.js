let personas = []
function validar(){
    let eNombre = document.getElementById("nombre")
    let vNombre = eNombre.value
    let eErrorNombre = document.getElementById("errorNombre")
    let eApellido = document.getElementById("apellido")
    let vApellido = eApellido.value
    let eErrorApellido = document.getElementById("errorApellido")
    let fnombre =  validarLargoMinimo(eNombre,vNombre,eErrorNombre)
    let fapellido = validarLargoMinimo(eApellido,vApellido,eErrorApellido)
    if(fnombre == "exito" && fapellido == "exito"){
        let p = {
            nombre:vNombre,
            apellido:vApellido
        }
        personas.push(p)
        console.log(personas)
        eNombre.value = ""
        eApellido.value = ""
        cargarDatos()
    }

    
}

function validarLargoMinimo(elemento,valor,eError){
    if(valor.length < 3){
        console.log("Pocos caracteres")
        alert("Debes ingresar mas de 3 caracteres")
        eError.innerText = "debes ingresar mas de 3 caracteres"
        elemento.style.backgroundColor = "red"
        elemento.style.color = "white"
        return "falla"
    }else{
        console.log("Todo bien")
        eError.innerText = ""
        eError.style.backgroundColor = "green"
        return "exito"
    }
}
function cargarDatos(){
    console.log("Cargandooooo.....")
    let mapPersonas = personas.map((p,index)=>{
        return "<tr><td>"+p.nombre+
                "</td></th>"+p.apellido+
                "</td><tr><button type='button' value='"+index+"'>Eliminar</button></td></tr>"
    })
    let tablaPersonas = document.getElementById("tablaPersonas")
    let strTablaPersonas = mapPersonas.join("")
    tablaPersonas.innerHTML = strTablaPersonas
    console.log(mapPersonas)
}


// def validar():
//     asdasd