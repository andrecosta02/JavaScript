/*
includes - Realiza a pesquisa se certo dado já existe no array,
esse parametro pode ser combinado com uma variavel e um if, 
para realizar consulta em um array especifico

*/

let modelos = ["Golf", "Jetta", "UP", "Q8", "Gol Quadrado"]

console.log(modelos.includes("Jetta"))
console.log(modelos.includes("jetta"))


console.log(modelos.includes("320i"))


let nome = "Gol"
if (modelos.includes(nome)) {
    console.log(`O ${nome} existe no array`)
} else {
    console.log(`O ${nome} não existe no array`)
}