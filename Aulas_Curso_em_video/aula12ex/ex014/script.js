function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var msg2 = window.document.getElementById('msg2')

    var data = new Date()
    var hora = data.getHours()
    var minuto = data.getMinutes()
    msg.innerHTML = `Agora são ${hora}:${minuto} horas.`


    if (hora < 12){
        img.src = 'manha.jpg'
        document.body.style.background = '#e2cd9f'
        msg2.innerHTML = 'Bom dia!!!'
    } else if (hora < 18){
        img.src = 'tarde.jpg'
        document.body.style.background = '#5e59f0'
        msg2.innerHTML = 'Boa Tarde!!!'
    } else {
        img.src = 'noite.jpg'
        document.body.style.background = '#171547'
        msg2.innerHTML = 'Boa Noite!!!'
    }
}
