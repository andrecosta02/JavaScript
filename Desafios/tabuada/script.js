    function Calcular() {
        var txtn = document.querySelector("input#txtnumber")
        var valor = txtn.value
        var numero = Number(valor)
        var mltplcor = 0
        
        var vcdigitou = document.querySelector('div#vcdigitou')
        vcdigitou.innerHTML = `Você digitou: ${numero}`
        
        var res00 = document.querySelector('div#res00')
        var sum = Number(numero * mltplcor)
        res00.innerHTML = (`${numero} x 0${mltplcor} = ${sum}`)
        mltplcor++

        var res01 = document.querySelector('div#res01')
        var sum = Number(numero * mltplcor)
        res01.innerHTML = (`${numero} x 0${mltplcor} = ${sum}`)
        mltplcor++

        var res02 = document.querySelector('div#res02')
        var sum = Number(numero * mltplcor)
        res02.innerHTML = (`${numero} x 0${mltplcor} = ${sum}`)
        mltplcor++
        
        var res03 = document.querySelector('div#res03')
        var sum = Number(numero * mltplcor)
        res03.innerHTML = (`${numero} x 0${mltplcor} = ${sum}`)
        mltplcor++

        var res04 = document.querySelector('div#res04')
        var sum = Number(numero * mltplcor)
        res04.innerHTML = (`${numero} x 0${mltplcor} = ${sum}`)
        mltplcor++

        var res05 = document.querySelector('div#res05')
        var sum = Number(numero * mltplcor)
        res05.innerHTML = (`${numero} x 0${mltplcor} = ${sum}`)
        mltplcor++

        var res06 = document.querySelector('div#res06')
        var sum = Number(numero * mltplcor)
        res06.innerHTML = (`${numero} x 0${mltplcor} = ${sum}`)
        mltplcor++

        var res07 = document.querySelector('div#res07')
        var sum = Number(numero * mltplcor)
        res07.innerHTML = (`${numero} x 0${mltplcor} = ${sum}`)
        mltplcor++

        var res08 = document.querySelector('div#res08')
        var sum = Number(numero * mltplcor)
        res08.innerHTML = (`${numero} x 0${mltplcor} = ${sum}`)
        mltplcor++

        var res09 = document.querySelector('div#res09')
        var sum = Number(numero * mltplcor)
        res09.innerHTML = (`${numero} x 0${mltplcor} = ${sum}`)
        mltplcor++

        var res10 = document.querySelector('div#res10')
        var sum = Number(numero * mltplcor)
        res10.innerHTML = (`${numero} x ${mltplcor} = ${sum}`)
        mltplcor++
    }
