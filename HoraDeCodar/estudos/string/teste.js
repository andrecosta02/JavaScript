let pessoa = {
    "nome": "André",
    "idade": 28,
    "profissao": "Programador",
    "hobbies": ["Video Game", "Leitura", "Correr"]
}

let pessoaTexto = JSON.stringify(pessoa)

console.log(pessoaTexto)

let pessoaJSON = JSON.parse(pessoaTexto)

console.log(pessoaJSON)