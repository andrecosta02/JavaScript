function verificadorDeTexto(texto) {

    let tamanho = texto.length 

    if (tamanho > 10) {
        console.log(`Texto muito longo, ${tamanho} caracteres`)
    } else {
        console.log(`Texto dentro do limite, ${tamanho} caracteres`)
    }
}

verificadorDeTexto("Esse é um testeqaaaqaaaaaaaaaqq")
verificadorDeTexto("oi ")