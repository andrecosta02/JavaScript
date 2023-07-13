let num = [1,2,3,4,5]
let cont = 1

for(let i = 0; i < num.length; i++){
    console.log(num[i])

    cont *= num[i]
}

console.log(cont)