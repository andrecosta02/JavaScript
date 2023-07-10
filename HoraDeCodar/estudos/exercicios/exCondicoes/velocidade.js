let velocidadeRegistrada = 133

let velocidadeMax = 80

let calc = ((100 * velocidadeRegistrada) / velocidadeMax) - 100

if (velocidadeRegistrada > velocidadeMax) {
    console.log(`Sua velocidade foi de ${velocidadeRegistrada}Km/h, ${calc.toFixed(1)}% acima do permitido, você foi multado!!!`)
} else {
    console.log(`Sua velocidade foi de ${velocidadeRegistrada}Km/h, você não foi multado`)
}
