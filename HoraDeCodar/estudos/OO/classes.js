// let cachorro = {
//     raca: "SRD",
// }

// let pastoAlemao = Object.create(cachorro)

// pastoAlemao.raca = "Pastor Alemão"

// console.log(pastoAlemao.raca)

let cachorro = {
    patas: 4,
    raca: "SDR",
    latir: function() {
        console.log("Au Au")
    }
}

let labrador = Object.create(cachorro)

labrador.latir()

labrador.raca = "Labrador"

console.log(labrador)