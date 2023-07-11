function verificaTipoDeDado(dado) {

    if (typeof dado === "number"){
        console.log(`O dado ${dado} é um number`)
    } else if (typeof dado === "boolean") {
        console.log(`O dado ${dado} é um boolean`)
    } else {
        console.log(`O dado ${dado} é uma string`)

    }
}

verificaTipoDeDado("oi")