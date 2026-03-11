const botaoConversor = document.getElementById("botao-conversao");
botaoConversor.addEventListener("click", convert);

const campoMoeda = document.getElementById("moeda-select");
const campoReal = document.getElementById("campo-real");


function convert() {
    const real = campoReal.value
    const moeda = campoMoeda.value
    let result = 0;

    if (moeda === "USD") {
        result = real * 0.1907 

    } else if (moeda === "EUR") {
        result = real * 0.1641

    } else if (moeda === "GBP") {
        result = real * 0.1422

    } else if (moeda === "CAD") {
        result = real * 0.2589

    } else if (moeda === "JPY") {
        result = real * 30.08

    } else if (moeda === "ARS") {
        result = real * 270.75

    } else if (moeda === "CHF") {
        result = real * 0.1481

    } else if (moeda === "CNY") {
        result = real * 1.37
    }
   

    const tagLi = document.createElement("li");

    tagLi.innerHTML = result.toFixed(2);

    const tagUl = document.getElementById("resultados");
    tagUl.appendChild(tagLi);

}
