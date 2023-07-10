let pessoa1 = {
    nome: "Andre"
}

let pessoa2 = pessoa1

console.log(pessoa2)

let pessoa3 = {
    nome: "Andre"
}


console.log(pessoa2 == pessoa1)
console.log(pessoa2 == pessoa3)

pessoa1.nome = "Dre"

console.log(pessoa1)
console.log(pessoa2)