const cachorro = {
    raca: "SRD",
    uivar: function(){
        console.log("Auuuuu")
    },
    rosnar: function(){
        console.log("Grrrr")
    },
    setRaca: function(raca){
        this.raca = raca
    },
    getRaca: function(){
        return "A raça é " + this.raca
    }
}


console.log(cachorro.raca)
console.log(cachorro.getRaca())
cachorro.rosnar()

cachorro.setRaca("Pastor Alemão")
console.log(cachorro.raca)


console.log(cachorro.getRaca())
