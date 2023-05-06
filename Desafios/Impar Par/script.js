// var num = document.getElementById('num')
// var res = document.getElementById('res')
// num.focus()
var nametxt = document.getElementById('nametxt')
let resArray = document.getElementById('resArray')


function Verificar(){
  // res.innerText += (`${num}`)

  //document.getElementById('num').value = ''; // Limpa o campo de texto
  var nametxt = document.getElementById('nametxt')
  resArray.innerHTML += (`<br> Seu nome é ${nametxt}`)
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