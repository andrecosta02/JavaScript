// Utilizado para alterar o caminho até chegar em um objeto, exemplo abaixo, ao invés de utilizar console.log(obj.motor), passa a se usar console.log(vMotor), por que no const, foi dado um "alias" ao indice.

let obj = {
    rodas: 4,
    portas: 4,
    tetoSolar:true,
    motor: "2.0"
}

const {rodas: vRodas, portas: vPortas, tetoSolar: vTetoSolar, motor: vMotor} = obj

console.log(vMotor)