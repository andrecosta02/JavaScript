//var teste = {name: "André", anos: 20, sexo: "Homem"}

var nametxt = document.getElementById('nametxt')
var agetxt = document.getElementById('agetxt')
var sexotxt = document.getElementById('sexotxt')

let resArray = document.getElementById('resArray')

//teste.name = nametxt

// var oi = nametxt

var teste = {name: "", anos: "", sexo: ""}


nametxt.focus()


function Adicionar(){
    
var nametxt = document.getElementById('nametxt')
    resArray.innerHTML = (`Seu nome é ${nametxt}, você tem ${teste.anos} anos e é ${teste.sexo}`)
    
    document.getElementById('nametxt').value = ''; // Limpa o campo de texto
    document.getElementById('agetxt').value = ''; // Limpa o campo de texto
    document.getElementById('sexotxt').value = ''; // Limpa o campo de texto

    nametxt.focus()
}



