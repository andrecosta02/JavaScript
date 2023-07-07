// function lembrarsoma(x) {
//     return function(y) {
//         return x + y
//     }
// }

// let soma1 = lembrarsoma(2)

// console.log(soma1(5))

// let soma2 = lembrarsoma(2)

// console.log(soma2(9))



function contador(i) {
    let cont = i
    let somarContador = function() {
        console.log(cont)
        cont++
    }
    return somarContador
}

let meuContador = contador(5)
meuContador()
meuContador()

let meuContador2 = contador(50)
meuContador2()
meuContador2()