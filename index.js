//console.log("Olá, mundo!")
//Exercicio 1
// const estudante = {
//     nome: "Maria",
//     sobrenome: "Dev",
//     curso: "Ciências da Computação",
//     periodoLetivo: 5,
//     enad: true
// }

// console.log(estudante.nome, estudante["sobrenome"], estudante)

// estudante.periodoLetivo = 6;
// estudante.enad = false;
// console.log(estudante.periodoLetivo, estudante["enad"])

//Exercicio 2

function verificarExtensao() {
    //https://cdn.folhape.com.br/img/pc/1100/1/dn_arquivo/2023/02/carnaval-do-recife-1.jpg
    //console.log("Alguém apertou o botão")
    const input = document.getElementById("input-link")
    const div = document.getElementById("conteudo")
    //console.log(input.value)
    //const verficacao = input.value.includes(".jpg")
    //console.log(verficacao)
    const valueInput = input.value
    if (valueInput.includes(".jpg") || valueInput.includes(".png")) {
        div.innerHTML += `<img src="${valueInput}" alt= "imagem-usuario"></img>`
    } else {
        div.innerHTML += "<p style='color:red'>Formato não suportado</p>"
    }

}