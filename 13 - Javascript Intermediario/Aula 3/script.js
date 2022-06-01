
//seletor por ID - seleciona um só
document.querySelector('#titulo').innerHTML = 'Exemplo'

//seletor por tag
document.querySelector('a').innerHTML = 'teste ancora'

//selecionando mais de um item ( com forEach)

let ancoras = document.querySelectorAll('a')

ancoras.forEach(function(elemento) {
    elemento.innerHTML = 'teste'
})


//selecionando mais de um item por classe 

let boxes = document.querySelectorAll('.box')

boxes.forEach(function(box, index){
    box.innerHTML = ('Box ' + (index + 1) )
})


