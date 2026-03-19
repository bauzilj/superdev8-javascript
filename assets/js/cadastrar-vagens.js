let proximoCodigo = 1;
let linhaEditando = "";
let valorArrecadado = 0;


const botaoSalvar = document.getElementById("botao-salvar");
botaoSalvar.addEventListener("click", salvar);

const campoDestino = document.getElementById("destino");
const campoDistanciaEmKilometro = document.getElementById("distancia-em-kilometro");
const campoQuantidadeDePassageiros = document.getElementById("quantidade-de-passageiros");
const campoValorDaPassagem = document.getElementById("valor-da-passagem");
const tabela = document.getElementById("viagens");

function salvar() {

    let destino = campoDestino.value.trim();
    let distanciaEmKilometro = parseFloat(campoDistanciaEmKilometro.value);
    let quantidadeDePassageiros = parseInt(campoQuantidadeDePassageiros.value);
    let valorDaPassagem = parseFloat(campoValorDaPassagem.value);
    
    let mensagemAlert = document.getElementById("mensagem-alert");


    valorArrecadado = quantidadeDePassageiros * valorDaPassagem;

    if(!destino || isNaN(distanciaEmKilometro) || isNaN(quantidadeDePassageiros) || isNaN(valorDaPassagem)){
        mensagemAlert.innerHTML = "Preenche todos os campos com cuidado!"
        return;
    }

    if(linhaEditando){
        linhaEditando.children[1].innerText = destino;
        linhaEditando.children[2].innerText = distanciaEmKilometro;
        linhaEditando.children[3].innerText = quantidadeDePassageiros;
        linhaEditando.children[4].innerText ="R$" + valorDaPassagem.toFixed(2);
        linhaEditando.children[5].innerText ="R$" + valorArrecadado.toFixed(2);

        linhaEditando = "";
    }else{
        criarLinha(proximoCodigo, destino, distanciaEmKilometro, quantidadeDePassageiros, valorDaPassagem);
        proximoCodigo += 1;
    }
    campoDestino.value = "";
    campoDistanciaEmKilometro.value = "";
    campoQuantidadeDePassageiros.value = "";
    campoValorDaPassagem.value = "";

    campoDestino.focus();

}

function criarLinha(proximoCodigo, destino, distanciaEmKilometro, quantidadeDePassageiros, valorDaPassagem) {
    let linha = `<tr>
                    <td>${proximoCodigo}</td>
                    <td>${destino}</td>
                    <td>${distanciaEmKilometro}</td>
                    <td>${quantidadeDePassageiros}</td>
                    <td>R$ ${valorDaPassagem}</td>
                    <td>R$ ${valorArrecadado}</td>
                    <td>
                        <button class="btn-editar" onclick="edit(this)">Editar</button>
                        <button class="btn-excluir" onclick="excluir(this)">Excluir</button>
                    </td>
                </tr>`;
    tabela.insertAdjacentHTML("beforeend", linha);
}

function edit(botao){
    let linha = botao.parentNode.parentNode;
     
    campoDestino.value = linha.children[1].innerText;
    campoDistanciaEmKilometro.value = linha.children[2].innerText;
    campoQuantidadeDePassageiros.value = linha.children[3].innerText;
    campoValorDaPassagem.value = linha.children[4].innerText.replace("R$","");

    linhaEditando = linha;
}

function excluir(botao){
    let linha = botao.parentNode.parentNode;
    linha.remove();
}