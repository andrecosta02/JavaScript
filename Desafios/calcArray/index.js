let nums = [4,0,7,10,5]
let cont = 0
let sum = 0
let nulo = 0
let sumPares = 0

for (let i = 0; i < nums.length; i++) {
    
    sum += nums[i]

    if (nums[i] == 0) {
        nulo++
    }

    if (nums[i] % 2 == 0) {
        sumPares += nums[i]
    }

    if (nums[i] / 5 == 0) {
        
    }

}

console.log(sum)
console.log(sum / nums.length)
console.log(nulo)
console.log(sumPares)