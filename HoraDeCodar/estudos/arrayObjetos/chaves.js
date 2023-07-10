let carro = {
    marca: "VW",
    modelo: "Gol",
    motor: 2.0,
}

let adicionais = {
    arCondicionados: true,
    vidroEletrico: true,
    turbo: false,
}

console.log(carro)

Object.assign(carro, adicionais)

console.log(carro)


//Utilizado para verificar as choaves de um objeto
console.log(Object.keys(carro))


/*
let carro = {
    marca: "VW",
    modelo: "Gol",
    motor: 2.0,
}

carro é o nome do objeto
marca é uma das chaves do objeto
VW é o valor da chave MARCA do objeto CARRO
*/