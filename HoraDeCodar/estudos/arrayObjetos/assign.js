let carro = {
    portas: 2,
    portasMalas: "200L",
    motor: 2.0
}

let adicioais = {
    tetoSolar: true,
    arCondiciona: true
}

console.log(carro)

Object.assign(carro, adicioais)

console.log(carro)