let calculadora = {
    soma: function(a,b) {
        return a + b
    },

    subtracao: function(a,b){
        return a - b
    },

    multiplicacao: function(a,b) {
        return a * b
    },

    divisao: function(a,b){
        return a / b
    }
}

let a = 10
let b = 5

console.log(calculadora.soma(a,b))
console.log(calculadora.subtracao(a,b))
console.log(calculadora.multiplicacao(a,b))
console.log(calculadora.divisao(a,b))
