function Cachorro(raca, patas, cor) {
    this.raca = raca
    this.atas = patas
    this.cor = cor
    this.uivar = function() {
        console.log("Auuuuu")
    }
}

let shihTzu = new Cachorro("Shih Tzu", 4, "Cinza")

console.log(shihTzu)
shihTzu.uivar()
