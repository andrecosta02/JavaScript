let emprestimo = 1500
let juros = 20
let parcelasQtd = 12
let parcelasUnit
let res = emprestimo

console.log(`O valor solicitado foi R$${emprestimo}, será em ${parcelasQtd} parcelas, o juros é de ${juros}%.`)

res += ((emprestimo * juros) / 100)

parcelasQtd = res / 12

console.log(`Cada parcela sairá por R$${parcelasQtd}`)
