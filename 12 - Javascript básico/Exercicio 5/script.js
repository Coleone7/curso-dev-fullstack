let inputTabuada = prompt('Digite qual tabuada você quer saber:')
let tabuada = parseInt(inputTabuada)

let resultado = ''

for ( let contador = 0; contador <= 10; contador++) {
resultado += (`${contador}` + ` x ${tabuada}` + " = " + (contador * tabuada) + "<br>")
}

// document.write(`${resultado}`)

document.querySelector('#mensagem1').innerHTML = resultado

