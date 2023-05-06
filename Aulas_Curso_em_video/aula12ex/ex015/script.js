function verificar(){
    //alert('teste')
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano){
        alert('[ERRO] Verifique os Dados!!!')
    } else {
        var fsex = document.getElementsByName ('radsex')
        var idade = ano - Number(fano.value)
        res.innerHTML = `Idade: ${idade}`
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked){
            gênero = 'homem'
            if (idade >=0 && idade < 10){
                //criança
                gênero = 'um menino'
                img.setAttribute('src', 'foto-bebe-m.jpg')
            } else if (idade < 21){
                //Jovem
                gênero = 'um jovem'
                img.setAttribute('src', 'foto-jovem-m.jpg')
            } else if (idade < 50){
                //Adulto
                gênero = 'um adulto'
                img.setAttribute('src', 'foto-adulto-m.jpg')
            } else {
                //Idoso
                gênero = 'um idoso'
                img.setAttribute('src', 'foto-idoso-m.jpg')
            }
        } else if (fsex[1].checked){
            gênero = 'mulher'
            if (idade >=0 && idade < 10){
                //criança
                gênero = 'uma menina'
                img.setAttribute('src', 'foto-bebe-f.jpg')
            } else if (idade < 21){
                //Jovem
                gênero = 'uma jovem'
                img.setAttribute('src', 'foto-jovem-f.jpg')
            } else if (idade < 50){
                //Adulto
                gênero = 'uma adulta'
                img.setAttribute('src', 'foto-adulto-f.jpg')
            } else {
                //Idoso
                gênero = 'uma idosa'
                img.setAttribute('src', 'foto-idoso-f.jpg')
            }
        }
        res.innerHTML = `Detectamos ${gênero} de ${idade} anos`
        res.appendChild(img)
    }
}