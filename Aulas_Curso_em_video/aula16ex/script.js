let num = document.querySelector('input#fnum')
let lista = document.querySelector('select#flista')
let res = document.querySelector('div#res')
let valores = []

/*
document.addEventListener("keypress", function(e){
    if (e.key === "Enter"){
        const btn = document.querySelector("#send")
        btn .click();
    }
});*/



function Darkmode() {
    var a = window.document.getElementById('teste')
    a.addEventListener('click', Darkmode)
    document.body.style.background = '#000000'
    //document.section.style.background = '#000000'
    a.style.background = '#06035e'
}




function isNumero(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}



function inLista(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

/*
//Adiciona um valor na lista
function Adicionar() {
    let num = document.getElementById('fnum')
    let tab = document.getElementById('flista')

    if(isNumero(num.value) && !inLista(num.value, valores)){
    window.alert(`Tudo Ok! `)
    let n = Number(num.value)
    c = 1
    tab.innerHTML = ''
    while (c <= 10){
        let item = document.createElement('option')
        item.text += `${n} foi adicionado`
        item.value += `tab${c}`
        tab.appendChild(item)
        c++
      
} else {
    window.alert('Confira o valor adicionado')

}}}*/


/*var rest = isNumero(5)
console.log(`É ${rest}!`)*/





//Insere no HTML os resultados
function Finalizar() {
    window.alert('Finalizou')

    var res = window.document.getElementById(resultado)
    var resposta = '<strong>5000</strong>'
    resultado.innerHTML = `Ao todo, temos ${resposta} cadastrados.<br>`
    resultado.innerHTML += `O maior valor informado foi ${resposta}.<br>`
    resultado.innerHTML += `O menor valor informado foi ${resposta}.<br>`
    resultado.innerHTML += `Somando todos os valores, temos ${resposta}.<br>`
    resultado.innerHTML += `A média dos valores digitados é ${resposta}.`
}




function Adicionar() {
    //alert('teste')
    let num = document.getElementById('fnum')
    let tab = document.getElementById('flista')
    if (num.value.length == 0) {
        window.alert('Preencha o campo!!!')
    } else {
        let n = Number(num.value)
        c = 1
        tab.innerHTML = ''
        let item = document.createElement('option')
        item.text += `${n} foi adicionado`
        item.value += `tab${c}`
        tab.appendChild(item)

    }
}