function parimpar(n) {
    if (n%2==0){
        return "par"
    } else{
        return "ímpar"
    }
}
var res = parimpar(4)
console.log(`É ${res}!`)

//ou

console.log(parimpar(5))