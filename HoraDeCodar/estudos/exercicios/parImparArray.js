let arr = [1, 2, 3, 4, 5, 6, 7, 8]
let semPares = []


const teste = (users) => {
    users.forEach((arr) => {

        arr.push(9)

        
        for (num; num <= 50; num++) {

            if (num % 2 == 0){
                console.log(`${num} é par`)
            } else {
                console.log(`${num} é impar`)
            }
        
        }

    });
}
teste(arr)
console.log(arr)


