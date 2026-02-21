const botaoVerdeDeslocarCima = document.getElementById("deslocar-cima");
botaoVerdeDeslocarCima.addEventListener("click", deslocarCima);

const botaoVerdeDeslocarDireita = document.getElementById("deslocar-direita");
botaoVerdeDeslocarDireita.addEventListener("click", deslocarDireita);

const botaoVerdeDeslocarBaixo = document.getElementById("deslocar-baixo");
botaoVerdeDeslocarBaixo.addEventListener("click", deslocarBaixo);

const botaoVerdeDeslocarEsquerda = document.getElementById("deslocar-esquerda");
botaoVerdeDeslocarEsquerda.addEventListener("click", deslocarEsquerda);

const inputDeslocamento = document.getElementById("deslocamento");

document.addEventListener("keydown", function (event) {
    if (event.key === "ArrowUp") {
        deslocarCima();
    } else if (event.key === "ArrowDown") {
        deslocarBaixo();
    } else if (event.key === "ArrowLeft") {
        deslocarEsquerda();
    } else if (event.key === "ArrowRight") {
        deslocarDireita();
    }
})

const divCaixaVerde = document.getElementsByClassName("caixa verde")[0];

function deslocarCima() {
    const distancia = parseInt(inputDeslocamento.value);
    const computedStyle = window.getComputedStyle(divCaixaVerde);
    const topAtual = parseInt(computedStyle.getPropertyValue("top"));
    // const topNovo = topAtual - 10;
    const topNovo = topAtual - distancia;
    divCaixaVerde.style.top = `${topNovo}px`;
}
function deslocarDireita() {
    const distancia = parseInt(inputDeslocamento.value);
    const computedStyle = window.getComputedStyle(divCaixaVerde);
    const leftAtual = parseInt(computedStyle.getPropertyValue("left"));
    // const leftNovo = leftAtual + 10;
    const leftNovo = leftAtual + distancia;
    divCaixaVerde.style.left = `${leftNovo}px`;
}

function deslocarBaixo() {
    const distancia = parseInt(inputDeslocamento.value);
    const computedStyle = window.getComputedStyle(divCaixaVerde);
    const topAtual = parseInt(computedStyle.getPropertyValue("top"));
    // const topNovo = topAtual + 10;
    const topNovo = topAtual + distancia;
    divCaixaVerde.style.top = `${topNovo}px`;
}

function deslocarEsquerda() {
    const deslocamento = parseInt(inputDeslocamento.value);
    const computedStyle = window.getComputedStyle(divCaixaVerde);
    const leftAtual = parseInt(computedStyle.getPropertyValue("left"));
    // const leftNovo = leftAtual - 10;
    const leftNovo = leftAtual - deslocamento;
    divCaixaVerde.style.left = `${leftNovo}px`;
}