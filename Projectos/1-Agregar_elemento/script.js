
let botonAdd = document.getElementById("add");
let cajaAdd = document.getElementById("list-elements")

let contador = 0
let itemsA = ''
botonAdd.addEventListener("click", ()=>{
     itemsA += `<a class="active" href="#">ELEMENTO ${contador ++} </a>` 
     cajaAdd.innerHTML=itemsA
    
})