let num = [59, 4, 1, 87 ]
//num[0] = 5
//num[9] = 1
num.push(5)
num.push(1)
num.push(15)
num.sort()
console.log (`O vetor é ${num}`)

//console.log (num[1])
num.sort()
for (var pos = 0; pos<num.length; pos++){
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}

