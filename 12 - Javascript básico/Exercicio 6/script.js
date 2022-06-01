
let listaAtores = [

    { 
        nome: 'Keanu Reeves',
        personagem: 'Neo',
        filme: 'The Matrix',
    },

    { 
        nome: 'David Prowse',
        personagem: 'Darth Vader',
        filme: 'Star Wars Episódios IV-VI',
    },

    { 
        nome: 'Bruce Wayne',
        personagem: 'Batman',
        filme: 'Batman - I Início',
    },

]

let resultado =''

for (let lista of listaAtores) {
    resultado += `    

        <div class='box'> 
            <h1> ${lista.nome} </h1>
            
            <h2> interpreta o personagem ${lista.personagem} no filme ${lista.filme} </h2>
        </div>
    
    `
} 

document.querySelector('#flex').innerHTML = resultado
