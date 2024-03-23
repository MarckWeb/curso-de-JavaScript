const myForm = document.getElementById("form")

myForm.addEventListener("submit", (event)=>{
    //cancela que no se recargue la pagian y se envie
    event.preventDefault()
    let constructorForm = new FormData(myForm)
    //variable que contiene el objeto
    let createObjet = converterToobjet(constructorForm)
    console.log(createObjet)
    insertRowToTable(createObjet)
    saveInTheLocalstorage(createObjet)
    myForm.reset()

    // if(isValidForm(createObjet)){
    //     saveInTheLocalstorage(createObjet)
    //     insertRowToTable(createObjet)
    //     myForm.reset()
    // }else{
    //     //mostrar error
    // }
})

//aqui draw_category y siguienetes

//al documento le decimos que escuche cuando el dom esta cargado
document.addEventListener("DOMContentLoaded", ()=>{
    //antes de que la pagina se cargue ejecutame o traime del local lo que tiene en una variable 
    let arraySaveFromLocalstorage = JSON.parse(localStorage.getItem("listAlumns"))
    console.log(arraySaveFromLocalstorage)

    //devolvera un array de objetos con valores de l formulario.
    //si por cada iteracion haz una vez mas la funcion insertar
    arraySaveFromLocalstorage.forEach(element => {
        //console.log(element)
        insertRowToTable(element)
    });
})


//generar una funcion que asigne un id diferente para cada fila de la tabla que se va creando
function getNewProp(){
    //si no hay en el local storage asigna -1
    let lastFormId = localStorage.getItem("lastId") || '-1';
    //combertir lo que viene del local a codigo normal
    let newIdForForm = JSON.parse(lastFormId) + 1;
    //enviar el nuevo numero ID al local storage
    localStorage.setItem("lastId", JSON.stringify(newIdForForm))

    //la funcion retorna el id asignado
    console.log(newIdForForm)
    return newIdForForm;
}

//convierte los valores del formulario en objeto y los retorna a la variable createObjetj
function converterToobjet(constructorForm){
    let formName = constructorForm.get("name")
    let formLastname = constructorForm.get("lastname")
    let formCourse = constructorForm.get("course")
    let formState = constructorForm.get("typeState")
    let formId = getNewProp()
    console.log(formId)

    return{
        formId,
        formName,
        formLastname,
        formCourse,
        formState
    }
}

//inserta fila y celdas a la tabla con los datos del formulario
function insertRowToTable(createObjet){
    let boxTable = document.getElementById("site-table");
    let rowTable = boxTable.insertRow(-1);
    //a cada tr de la tabla colocar un id de los creados automatixos
    rowTable.setAttribute("data-id", createObjet.formId)
    let cellsData = rowTable.insertCell(0);
    cellsData.textContext = createObjet.formId
    //un ejemplo de que tambien se puede haber echo asi
    cellsData = rowTable.insertCell(1);
     //obtiene el valor del input name
    cellsData.textContent = createObjet.formName

    cellsData = rowTable.insertCell(2);
    cellsData.textContent = createObjet.formLastname
    cellsData = rowTable.insertCell(3);
    cellsData.textContent = createObjet.formCourse
    cellsData = rowTable.insertCell(4);
    cellsData.textContent = createObjet.formState

    //aumentar celda para eliminar la fila
    let inserDeleteCell = rowTable.insertCell(5)
    //crear boton
    let btnDelete = document.createElement("button");
    //insertar boton dentro de la celda 5
    inserDeleteCell.appendChild(btnDelete)
    //colocar nombre al boton
    btnDelete.textContent = 'eliminar' 

    btnDelete.addEventListener("click", (event)=>{
        //obtenemos el padre padre del boton agrra la fila
        let deleteRowTable = event.target.parentNode.parentNode;
        //obtenemos el id personalizado del tr su valor agrra
        let objtainObjetTr = deleteRowTable.getAttribute("data-id")
        //eliminamos la fila padre padre
        deleteRowTable.remove()
        deleteElementsOfLocal(objtainObjetTr )
    })
}


//eliminar elemento objetos del array
function deleteElementsOfLocal(objtainObjetTr){
    //obtener array del local
    let arrayObjetsLocal =JSON.parse(localStorage.getItem("listAlumns"))
    console.log(arrayObjetsLocal)
    //seleccionar el indice del array con findindex
     let arrayIndex = arrayObjetsLocal.findIndex(element => element.objtainObjetTr  === element.objtainObjetTr )
     //eliminar el indice con splice
     arrayObjetsLocal.splice(arrayIndex, 1)

     let arrayToLocal = JSON.stringify(arrayObjetsLocal)

     //envia al localstorage
     localStorage.setItem("listAlumns",(arrayToLocal))

}

//guardar en el local strorage datos del formulario
//pero sin antes traer y decirle si es null local hacer array ytodo esto para que se guarde en fila y en el array todos los objetos valores del formulario en el array

function saveInTheLocalstorage(createObjet){
    //si en el local no existe.. haz el array
    let arrayObjets =JSON.parse(localStorage.getItem("listAlumns")) || [];
    
    //agrega objeto al array
    arrayObjets.push(createObjet)

    //cambia a stringify para enviar al local
    let arrayToLocal = JSON.stringify(arrayObjets)

    //envia al localstorage
    localStorage.setItem("listAlumns",(arrayToLocal))
}


///al eliminar en loval storage no se elimina la tabla, porque aun no se a hecho en evneto eliminar
//-----------------------------

function draw_categoy(){
    //tener todos los datos de select en array
    let allCategory = [
        'market', 'idiomas'
    ]

    for(i = 0; i < allCategory.length; i++){
        //insertCategory(allCategory[i])
    }
}

function insertCategory(categoryName){
    //seleccionar el select
    const selectElement = document.getElementById("course")
    let htmlToInsert = `<option>${categoryName}</option>`
    //insertar options en html
    selectElement.insertAdjacentHTML("beforeen", htmlToInsert)
}

function isValidForm(transationob){
    let isValidFormVar = true;
    if(!varibale["transacciontype"]){
        alert("tu transaccion no es valido")
        isValidFormVar= false
    }

    if(!transaccion["description"]){
        alert("dedes colocar una opcion")
        isValidFormVar= false
    }

    //y con todo los ofrmularios
    //colocar arriba de todo

    return isValidFormVar
}
