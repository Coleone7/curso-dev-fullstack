let inputNota1 = prompt('digite a primeira nota')

let inputNota2 = prompt('digite a segunda nota')

let nota1 = parseInt(inputNota1)
let nota2 = parseInt(inputNota2)

let media = ((nota1 + nota2)/2)
console.log(media)


let mediaMinima = 7


if (media>=mediaMinima) {
    document.write('ok, passou de ano')
} else if(media<mediaMinima) {
    document.write('Ops, não passou de ano!')
} 
document.write('<br>')

if (media>= mediaMinima && media === 10) {
    document.write('NOSSA! você gabaritou a prova! continue assim!')
} else if (media>= mediaMinima && media === 9) {
    document.write('Parabéns! sua nota foi Exelente.')
} else if (media>= mediaMinima && media <=8) {
    document.write('menor que 8 e maior que 7')
}

if (media<mediaMinima && media === 0) {
    document.write('tirou 0.')
} else if (media<mediaMinima && media === 6) {
    document.write('tirou 6, foi quase')
} 
else {
    document.write('tirou algo entre 1 e 5')
}
