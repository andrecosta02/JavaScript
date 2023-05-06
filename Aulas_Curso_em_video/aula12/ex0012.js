var agora = new Date()
var hours = agora.getHours()
var minutes = agora.getMinutes()
    console.log(`Agora são exatamente: ${hours}:${minutes}`)
    //console.log(`Agora são exatamente: ${minutes} minutos.`)
  if (hours <= 05){
    console.log(`Boa Madrugada!`)
} else if(hours <= 12){
    console.log(`Bom Dia!`)
} else if (hours <= 18){
    console.log(`Boa Tarde!`)
} else if(hours <= 24){
    console.log(`Boa Noite!`)
}