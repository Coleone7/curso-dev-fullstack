let clientes = [
    {
        nome: 'murilo',
        idade: 27,
        linguagens: ['javascript', 'python', 'php']
    },

    {
        nome: 'fulano',
        idade: 30,
        linguagens: ['c#', 'c++', 'c' ]
    },

    {
        nome: 'ciclano',
        idade: 32,
        linguagens: ['go', 'closure', 'r' ]
    }

]


// for (let contador=0; contador < clientes.length; contador++){
//     console.log(clientes[contador].nome) 
// }



let htmlClientes = ''

for(let cliente of clientes){

    let listaLinguagens = ''

    for (let linguagens of cliente.linguagens){
        listaLinguagens += `<li>${linguagens}</li>`
    }

    htmlClientes += `
        <li>
            <b>Nome:</b> ${cliente.nome} <br>
            <b>Idade:</b> ${cliente.idade} <br>
            <b>Linguagem:</b> <br>
            <ul>
                ${listaLinguagens}
            </ul>
        <li>
    
    `
}

document.querySelector('#listaClientes').innerHTML = htmlClientes