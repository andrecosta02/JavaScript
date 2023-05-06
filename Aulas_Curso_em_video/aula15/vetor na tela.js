let valores = [59, 4, 1, 87]

valores.sort() //Organiza o array em ordem crescente
/*for (var pos = 0; pos<valores.length; pos++){
    console.log (`{valores[pos]}`)
}
*/
for (var pos in valores){
    console.log(`O valor ${pos} é ${valores[pos]}`)
}

/*for (var pos in valores){
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}*/