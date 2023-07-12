/* 

Muito utilizado para troca de informações entre front-end e o back-end

São caracterizados por ter aspas duplas "" em seus índices e no seu dado

Não podendo conter comentários
*/
let pessoa = {
    "nome": "André",
    "idade": 20
}

console.log(pessoa.nome)
console.log(pessoa.idade)




//Conversão de JSON em String, e vice-versa

let cadastro = {
    "nome": "André",
    "idade": 20,
    "profissao":"Programador",
    "hobbies": ["Vídeo Game", "Leitura", "Correr"]
}


console.log(cadastro)
console.log(JSON.stringify(cadastro))
