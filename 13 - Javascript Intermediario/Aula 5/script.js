

let botaoTeste = document.querySelector('#botaoTeste')


//on click

// botaoTeste.onclick = function(){
//     alert('ok')
// }


//addEventListener e remove

    

    function cliqueBotao(){
        alert(`mensagem 1 contador = ${contador}`)
    }
    
    function removeBotao(){
        botaoTeste.removeEventListener('click', cliqueBotao)
        
    }

    let contador = 1

    botaoTeste.addEventListener('click',cliqueBotao)

    botaoTeste.addEventListener('click',function(){
        contador ++
        alert('ok 2. teste de inserção de evento em cadeia e remoção do primeiro evento em seguida. quando o contador for maior que 5, a mensagem 1 deve sumir. tente novamente.')
        if (contador >5) {
            removeBotao()
        }
        
    })

    
