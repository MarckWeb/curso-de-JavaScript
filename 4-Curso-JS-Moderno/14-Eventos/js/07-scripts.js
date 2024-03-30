// Event delegation


const cardDiv7 = document.querySelector('.card');

cardDiv7.addEventListener('click', e =>{
    console.log(e.target);// para saber a que le estamos dando click
    console.log(e.target.classList);// ver la classe
})

cardDiv7.addEventListener('click', e => {
    if(e.target.classList.contains('titulo')){
        console.log('Diste con el titulo')
    }
    if(e.target.classList.contains('precio')){
        console.log('Diste con el precio')
    }
    if(e.target.classList.contains('card')){
        console.log('Diste con el card')
    }
})
