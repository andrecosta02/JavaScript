function tabuada(){
    var num = parseInt(document.getElementById("num").value)
    var resposta = document.getElementById('resposta')
    var number = document.getElementById('vcdigitou')
    var mtlp = parseInt(document.getElementById("mtlp").value);
    var tabuada=''
          
    if (num.length == 0){
        alert('[ERRO] Verifique os Dados!!!')
    }

    for(var count=0; count<=mtlp ; count++)
    tabuada += num+" x "+count+" = "+
        num*count+"<br />";
            
    resposta.innerHTML = tabuada;
            
    var vcdigitou = document.querySelector('div#vcdigitou')
    vcdigitou.innerHTML = `Você digitou: ${num}`
    }