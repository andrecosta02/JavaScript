let cachorro = {
    nome: "Shark",
    patas: 4,
    peso: 5.6,
    latir: function() {
        console.log("Au Au")
    }
}

cachorro.nome = "Geek"

console.log(`O cachorro de nome ${cachorro.nome} tem ${cachorro.patas} patas e pesa ${cachorro.peso}Kg e ele faz:`)

cachorro.latir()
// [] = Array
// {} = Objeto