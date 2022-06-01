let idade = prompt('digite sua idade')

if (idade >= 18) {
    document.write('ok, vocé é maior de idade')
} else if (idade === '16') {
    document.write(`você tem ${idade} anos e não pode acessar!`)
} else{
    document.write(`com ${idade} anos, você ainda não pode acessar!`)
}

