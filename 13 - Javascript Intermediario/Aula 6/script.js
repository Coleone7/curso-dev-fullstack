

let quadrado = document.querySelector('.quadrado')

// function minhaFuncao(){
//     console.log('Executou')
// }

// quadrado.onclick = minhaFuncao

// quadrado.onmousemove = minhaFuncao

// quadrado.onmouseenter = minhaFuncao

// quadrado.onmouseout = minhaFuncao


////////////

// function minhaFuncao(evento){
//     console.log(evento.target.innerWidth)
// }

// quadrado.onclick = minhaFuncao


// window.addEventListener('resize', minhaFuncao)


////////////////////

function minhaFuncao(evento){
    console.log(evento)
}

window.addEventListener('keypress', minhaFuncao)