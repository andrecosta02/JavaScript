//RECURSIVIDADE
function fatorial(n){
    if (n == 1) {
        return 1
    } else {
        return n * fatorial(n-1)
    }
}
var teste = 5

//let c = teste
console.log(fatorial(`${teste}`))

