let formulario = document.querySelector('#formCadastro')

formulario.onsubmit = function(evento){
    // evento.preventDefault()
    
    let inputNome = document.forms['formCadastro']['nome']

    if(!inputNome.value){
        evento.preventDefault()
        inputNome.classList.add('inputError')
        let span = inputNome.nextSibling.nextSibling
        span.innerText = 'Digite o nome corretamente.'

    } else{
        inputNome.classList.remove('inputError')
        let span = inputNome.nextSibling.nextSibling
        span.innerText = ''
    }

    let inputEmail = document.forms['formCadastro']['email']
    
    if(!inputEmail.value){
        evento.preventDefault()
        inputEmail.classList.add('inputError')
        let span = inputEmail.nextSibling.nextSibling
        span.innerText = 'Digite o email corretamente.'

    } else{
        inputEmail.classList.remove('inputError')
        let span = inputEmail.nextSibling.nextSibling
        span.innerText = ''
    }

    let inputCidade = document.forms['formCadastro']['cidade']
    
    if(!inputCidade.value){
        evento.preventDefault()
        inputCidade.classList.add('inputError')
        let span = inputCidade.nextSibling.nextSibling
        span.innerText = 'Selecione a cidade corretamente.'

    } else{
        inputCidade.classList.remove('inputError')
        let span = inputCidade.nextSibling.nextSibling
        span.innerText = ''
    }


}