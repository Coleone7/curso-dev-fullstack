
// for(let contador = 0; contador<=10; contador++){
//     document.write(`hello world ${contador} | `)
// }

let opcoes 

for (let contador = 1900; contador <= 2022; contador++) {
    opcoes += `<option>${contador}</option>`
}

document.querySelector('#ano').innerHTML = opcoes

let opcoes2

for (let contador2 = 2022; contador2 >= 1900; contador2--) {
    opcoes2 += `<option>${contador2}</option>`
}

document.querySelector('#ano2').innerHTML = opcoes2


let clientes = ['thiago', 'rafael','fulano', 'ciclano' ]


let lista = ""

for (let contador3 = 0; contador3<=clientes.length-1; contador3++) {
    lista += `<li> ${clientes[contador3]}</li>`
}

document.querySelector('#listaClientes').innerHTML = lista


