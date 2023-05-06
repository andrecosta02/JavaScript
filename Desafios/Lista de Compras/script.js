
let DivQuantityTotal = document.getElementById('DivQuantityTotal')
let DivPriceTotal = document.getElementById('DivPriceTotal')
let ShoppingBag = document.getElementById('ShoppingBag')
let conta = 0
let Checker = 0
let Calc = 1

// setTimeout(() => {
//     console.log('oi')
// }, 5000)

const list = [{
        id: 1,
        Product: "Banana",
        Emoji: "🍌",
        Price: 2,
        Quantity: 1,
        Unit: "Palmas",
        QttLower: "",
        QttSum: "",
    },
    {
        id: 2,
        Product: "Abacaxi",
        Emoji: "🍍",
        Price: 2.5,
        Quantity: 2,
        Unit: "Unidades",
        QttLower: "",
        QttSum: "",
    },
    {
        id: 3,
        Product: "Pera",
        Emoji: "🍐",
        Price: 5,
        Quantity: 3,
        Unit: "Quilos",
        QttLower: "",
        QttSum: "",
    },
    {
        id: 3,
        Product: "Laranja",
        Emoji: "🍊",
        Price: 3,
        Quantity: 3,
        Unit: "Quilos",
        QttLower: "",
        QttSum: "",
    },
    {
        id: 4,
        Product: "Uva",
        Emoji: "🍇",
        Price: 3,
        Quantity: 3,
        Unit: "Caixas",
        QttLower: "",
        QttSum: "",
    },
    {
        id: 5,
        Product: "Morango",
        Emoji: "🍓",
        Price: 10,
        Quantity: 1,
        Unit: "Bandejas",
    },

    /*{
        Product: "",
        Emoji: "",
        Price: 0,
        Quantity: 0,
        Unit: "",
    },*/
];

//list[2].Price = 100
//list[0].Product = "OIIII"

//Soma da Quantidade
const QuantitySum = list.reduce(
    (QuantityTotal, user) => (QuantityTotal += user.Quantity),
    0
)



//Soma dos preços
const SumPrices = list.reduce(
    (PriceTotal, user) => (PriceTotal += user.Price),
    0
)

const ValueFull = (users) => {
    users.forEach((list) => {
        conta += list.Quantity * list.Price
    });
}
ValueFull(list)

//Mostra os resultados
DivQuantityTotal.innerText += (`Quantidade total de produtos: ${QuantitySum}`)
DivPriceTotal.innerText += (`Valor total da compra: R$ ${conta}`)

const Formatter = Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    maximumFractionDigits: 2,
})

//Mostra todos os Produtos, valores e cria os botões
const ShowProdutcNames = (users) => {
    users.forEach((list) => {

        console.log(Calc)


        ShoppingBag.innerHTML += (`

        ${list.Product} ${list.Emoji}:
        <input type="button" value="-" id="1" style="cursor: pointer;" onclick="Lower${list.Product}()">
        ${list.Quantity} ${list.Unit}
        <input type="button" value="+" id="1" style="cursor: pointer;" onclick="Sum${list.Product}()">
        ${Formatter.format(list.Price)}
        <br>
        <hr style="width: 500px;">

        `)

        Calc++




    });
}
ShowProdutcNames(list)

console.log(Calc)



if (Checker == 0) {
    for (var i = 1; i <= Calc; i++) {

        console.log('OI')
        Checker = 1
    }
}



const changeThemeBtn = document.querySelector("#change-theme")

// Toggle dark mode
function toggleDarkMode() {
  document.body.classList.toggle("dark");
}

// Load light or dark mode
function loadTheme() {
  const darkMode = localStorage.getItem("dark");

  if (darkMode) {
    toggleDarkMode();
  }
}

loadTheme();

changeThemeBtn.addEventListener("change", function () {
  toggleDarkMode();

  // Save or remove dark mode from localStorage
  localStorage.removeItem("dark");

  if (document.body.classList.contains("dark")) {
    localStorage.setItem("dark", 1);
  }
});


// console.log(list)
// console.log(SumPrices)
// console.log(QuantitySum)