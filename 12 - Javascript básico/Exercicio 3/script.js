
function verif() {

    let nome = prompt('Digite seu nome')
    let idade = prompt('Digite sua idade')

    if (nome == 'Murilo Coleone') {
        
        document.querySelector('#mensagem1').innerHTML = (`Olá ${nome}, as informações validadas com sucesso. Seja bem vindo. `)
   
    } else {
        document.querySelector('#mensagem1').innerHTML = ("Olá. ")
 
    }

        if (idade >= 18) {
            document.querySelector('#mensagem2').innerHTML = ('Acesso permitido. ')
    }   else if (idade === '16') {
            document.querySelector('#mensagem2').innerHTML = (`você tem ${idade} anos e não pode acessar! `)
    }   else{
            document.querySelector('#mensagem2').innerHTML = (`com ${idade} anos, você ainda não pode acessar! `)
        }
}

