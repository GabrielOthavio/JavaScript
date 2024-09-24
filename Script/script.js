// Criar referencias aos elementos que vou manipular

const frm = document.querySelector("form");
const resp = document.querySelector("h2");


frm.addEventListener("submit", (e) =>{
    e.preventDefault();
    /*
    const number1 = frm.idCad1.value;
    const number2 = frm.idCad2.value;
    const number3 = frm.idCad3.value;
    const number4 = frm.idCad4.value;

    const number5 = Number(number1);
    const number6 = Number(number2);
    const number7 = Number(number3);
    const number8 = Number(number4);

    var resultado = number5 + number6 + number7 + number8;

    var calculo = resultado/4;

    resp.innerText = `Olá ${"o resultado é: " + resultado + "\n o resultado da media é: " + calculo}`*/

    const nome = (frm.idNome.value);
    const tempo = Number(frm.idTempo.value);
    const minutos = tempo % 60;
    const hora = tempo * 60;
    console.log(minutos)
    console.log(hora) 
});