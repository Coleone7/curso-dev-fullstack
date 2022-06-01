let nome = prompt('Digite seu nome')
let inputIdade = prompt('Digite sua idade')
let idade = parseInt(inputIdade)


if (nome == 'Murilo Coleone') {
    

        if (idade === 27) {
            document.write(`Olá ${nome} `)
            document.write('informações validadas com sucesso. Seja bem vindo.')
        }
        else {
        documento.write('sua idade não corresponde ao informado. Por favor, reacrregue a página e informe a idade corretamente.')
        }

} else {
    document.write("Olá.")
}



//     if  (idade == 27, nome =Muri= 'Murilo Coleone') {
//     document.write(',informações validadas com sucesso. Seja bem vindo.')
// }   else if (idade !== 27, nome === 'Murilo Coleone') {
//     document.write('sua idade não corresponde ao informado. Porfavor, recarregue a página e informe a idade corretamente.')
// }
    if (idade >= 18) {
    document.write('Acesso permitido.')
}   else if (idade === '16') {
    document.write(`você tem ${idade} anos e não pode acessar!`)
}   else{
    document.write(`com ${idade} anos, você ainda não pode acessar!`)
}

