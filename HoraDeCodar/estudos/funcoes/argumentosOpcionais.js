function nomeComIdade(nome, idade) {

    if (idade === undefined) {
        console.log(`O seu nome é ${nome}`)
    } else {
        console.log(`O seu nome é ${nome}, e você tem ${idade} anos`)
    }
}

nomeComIdade("André")
nomeComIdade("André", 20)




console.log("")




function soma(a,b) {

    if(a === undefined || b === undefined) {
        console.log("Falta um dos valores para multiplicar")
    } else {
        console.log(`A resultado é ${a * b}`)
    }
}

soma(1)
soma(5,6)
