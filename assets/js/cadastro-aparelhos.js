let nextId = 1;
let linhaEditando = "";
let valorEmEstoque = 0;

const botaoSalvar = document.getElementById("botao-salvar");
botaoSalvar.addEventListener("click", salvar);

const tabela = document.getElementById("aparelhos");
const mensagemAlert = document.getElementById("mensagem-alert");

const campoMarca = document.getElementById("marca");
const campoModelo = document.getElementById("modelo");
const campoValor = document.getElementById("valor");
campoQuantidadeEmEstoque = document.getElementById("quantidade-em-estoque");

function salvar() {
    let marca = campoMarca.value.trim();
    let modelo = campoModelo.value.trim();
    let valor = parseFloat(campoValor.value);
    let quantidadeEmEstoque = parseInt(campoQuantidadeEmEstoque.value);

    valorEmEstoque = valor * quantidadeEmEstoque;

    if (!marca || !modelo || isNaN(valor) || isNaN(quantidadeEmEstoque)) {
        mensagemAlert.innerHTML = "Preenche todos os campos com cuidado!";
    }

    if (linhaEditando) {
        linhaEditando.children[1].innerText = marca;
        linhaEditando.children[2].innerText = modelo;
        linhaEditando.children[3].innerText = "R$" + valor.toFixed(2);
        linhaEditando.children[4].innerText = quantidadeEmEstoque;
        linhaEditando.children[5].innerText = "R$" + valorEmEstoque.toFixed(2);

        linhaEditando = "";

    } else {

        criarLinhas(nextId, marca, modelo, valor, quantidadeEmEstoque);
        nextId += 1;
    }
    campoMarca.value = "";
    campoModelo.value = "";
    campoValor.value = "";
    campoQuantidadeEmEstoque.value = "";

    campoMarca.focus();
}



function criarLinhas(nextId, marca, modelo, valor, quantidadeEmEstoque) {
    let linha = `  <tr>
                    <td>${nextId}</td>
                    <td>${marca}</td>
                    <td>${modelo}</td>
                    <td>R$ ${valor}</td>
                    <td>${quantidadeEmEstoque}</td>
                    <td>R$ ${valorEmEstoque.toFixed(2)}</td>
                    <td>
                        <button onclick="editar(this)">Editar</button>
                        <button onclick="excluir(this)">Excluir</button>
                    </td>
                </tr>`;
    tabela.insertAdjacentHTML("beforeend", linha);

}

function excluir(botao) {
    let linha = botao.parentNode.parentNode;
    linha.remove();
}

function editar(botao) {
    let linha = botao.parentNode.parentNode;

    campoMarca.value = linha.children[1].innerText;
    campoModelo.value = linha.children[2].innerText;
    campoValor.value = linha.children[3].innerText.replace("R$", "");
    campoQuantidadeEmEstoque.value = linha.children[4].innerText;

    linhaEditando = linha;
}