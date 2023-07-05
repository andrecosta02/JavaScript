let idade = 17

let cnh = false

if (idade >= 18 && cnh == true){
    console.log(`Você tem ${idade} anos e tem CNH, pode dirigir`)
} else if (idade >= 18 && cnh == false) {
    console.log(`Você tem ${idade} anos, mas não tem CNH, então não pode dirigir`)
} else {
    console.log(`Vocé tem ${idade} anos, e ainda não pode dirigir`)
}