/* 

string
number
boolean
array
object
undefined
null

*/

//string
let nome = 'Murilo' 
// console.log(nome)

//string - concatenada
let sobrenome = 'Coleone'
// console.log(nome+' '+sobrenome)

//string literal
// console.log(`${nome} ${sobrenome}`)

console.log(nome, sobrenome)

//number
let idade = 27
console.log(idade)
console.log(idade+10)


//number - float
let porcentagem = 10.2
console.log(porcentagem+'%')

//boolean (true ou false)

let maiorDeIdade = true
console.log(maiorDeIdade)

let menorDeIdade = false
console.log(menorDeIdade)

//array

let habilidades = ['Javascript', 'PHP' , 'Python']
console.log(habilidades)

console.log(habilidades.length)

console.log(habilidades[0])
console.log(habilidades[1])
console.log(habilidades[2])

//object
let pessoa = {
    nome: 'murilo',
    sobrenome: 'coleone',
    idade: 27,
    habilidades: ['c++', 'c#', 'python']
}

console.log(pessoa)
console.log(pessoa.nome)
console.log(pessoa.habilidades[1])

//undefined

let endereco
console.log(endereco)


// null 
let cidade = null

console.log(cidade)