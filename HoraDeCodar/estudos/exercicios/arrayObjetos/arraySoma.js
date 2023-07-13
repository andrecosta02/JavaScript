let arr1 = [1,2]
let arr2 = [1,2,3,4]
let cont = 0

for (let i = 0; i < arr1.length; i++){

    cont += arr1[i]
    console.log(arr1[i])

}
console.log(`O tamanho do array1 é ${arr1.length}`)

for (let i = 0; i < arr2.length; i++){

    cont += arr2[i]
    console.log(arr2[i])

}
console.log(`O tamanho do array2 é ${arr2.length}`)



console.log(cont)