var array = [1, 5, 99, 7, 3, 166, 0, 4189, 11, 6]
//var array = []
var n = document.getElementById('num')
let resArray = document.getElementById('resArray')
let res = document.getElementById('res')
var TextStart = 'Aqui a sua resposta...'

//Falta Ex: 06, 07, 08...

function CalcularArray() {
    var i = Number(n.value)
    array.push(i)
    resArray.innerHTML = (`${array}`)
    document.getElementById('num').value = ''; // Limpa o campo de texto
    n.focus()
}

function Resultado() {
    //var soma = 0
    for (var pos in array) {
        array.sort((a, b) => a - b)

        res.innerHTML = ('')
        //Mostra o Array atual:
        resArray.innerHTML = (`${array}`)

        //Mostra a quantidade de elementos no Array
        var totalArray = n.length
        res.innerHTML += (`<br>A quantidade de elementos no Array é: ${totalArray}`)

        //Mostra o Array ordenado
        res.innerHTML += (`<br>O Array ordenado é: ${array}<br>`)


        //Ex01 - Mostra o Array ordenado e invertido
        res.innerHTML += (`O Array invertido é: ${array.slice(0).reverse()}<br>`)


        //Ex03 - Mostra os números pares e os números ímpares
        var impar = []
        var par = []
        var j = 0
            k = 0
        for (i = 0; i < 20; i++) {
            if (array[i] % 2 == 0) {
                par[j] = array[i]
                j++

                
            } else {
                impar[k] = array[i]
                k++
            }
        }
        res.innerHTML += (`Os pares são: ${par}<br>`)
        res.innerHTML += (`Os ímpares são: ${impar}<br>`)


        //Ex02 - Eleva ao quadrado todos os números pares
        var ParAoQuadrado = par.map(function (item) {
            return Math.pow(item, 2); //retorna o item original elevado ao quadrado
        });
        res.innerHTML += (`O quadrado dos pares é: ${ParAoQuadrado}`)


        //Ex04 - Mostra o maior número do Array
        var NumMaxArray = Math.max(...array)
        res.innerHTML += (`<br>O maior número do Array é: ${NumMaxArray}`)


        //Ex05 - Mostra a quantidade de Elementos em um Array
        res.innerHTML += (`<br>A quantidade de elementos do Array é: ${array.length}<br>`)
        

        //res.innerHTML += (`<strong>Resultado: </strong>A posição do valor ${array[pos]} é ${pos}`)
    }
}



function Clean() {
    array = []
    //array = [1, 2, 9, 4, 5, 10, 7, 8, 3, 6]
    //array.length = 0
    resArray.innerHTML = (TextStart)
    res.innerHTML = ('')
    document.getElementById('num').value = ''; // Limpa o campo de texto
}

function darkMode() {
    var element = document.body;
    element.classList.toggle("dark-mode");

}