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



console.log("-------------------")


//Conversão de JSON em String, e vice-versa

// JSON -> String

let cadastro1 = {
    "nome": "André",
    "idade": 20,
    "profissao":"Programador",
    "hobbies": ["Vídeo Game", "Leitura", "Correr"]
}


console.log(cadastro1)
console.log(JSON.stringify(cadastro1))


console.log("-------------------")



// String -> JSON

// let cadastro2 = {
//     nome: 'André',
//     idade: 20,
//     profissao: 'Programador',
//     hobbies: [ 'Vídeo Game', 'Leitura', 'Correr' ]
//   }


// console.log(cadastro2)
// console.log(JSON.stringify(cadastro2),JSON.parse(cadastro2))