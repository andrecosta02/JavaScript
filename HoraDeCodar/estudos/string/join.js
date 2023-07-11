// Com o split ele separa a frase em vários arrays, e o join, junta esses arrays e adiciona um caractere desejado no meio de cada um.

let frase = "Testando o método Join"

let palavras = frase.split(" ")

let novaFrase = palavras.join("_")

console.log(novaFrase)



console.log(frase.split(" ").join("_"))