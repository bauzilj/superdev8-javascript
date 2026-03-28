let proximoId = 1;
let valorTotal = 0;
let linhaEditando = "";

const botaoAddicionar = document.getElementById("botao-add");
botaoAddicionar.addEventListener("click", addicionar);

const campoNomeProduto = document.getElementById("nome-produto");
const campoCategoria = document.getElementById("categoria");
const campoPreco = document.getElementById("preco");
const campoQtdEmEstoque = document.getElementById("qtdEmEstoque");


const tabela = document.getElementById("produtos");

let mensagemAlert = document.getElementById("mensagem-alert");

function addicionar() {
    let nomeProduto = campoNomeProduto.value.trim();
    let categoria = campoCategoria.value.trim();
    let preco = parseFloat(campoPreco.value);
    let qtdEmEstoque = parseInt(campoQtdEmEstoque.value);

    if (!nomeProduto || !categoria || isNaN(preco) || isNaN(qtdEmEstoque)) {
        mensagemAlert.innerHTML = "Preencha todos os campos corretamente!";
        return;
    }

    if (preco <= 0 || qtdEmEstoque <= 0) {
        mensagemAlert.innerHTML = "Valores inválidos!";
        return;
    }

    valorTotal = preco * qtdEmEstoque;

    if (linhaEditando) {
        linhaEditando.children[1].innerText = nomeProduto;
        linhaEditando.children[2].innerText = categoria;
        linhaEditando.children[3].innerText = "R$" + preco.toFixed(2);
        linhaEditando.children[4].innerText = qtdEmEstoque;
        linhaEditando.children[5].innerText = "R$" + valorTotal.toFixed(2);

        linhaEditando = "";
    } else {
        criarLinha(nomeProduto, categoria, preco, qtdEmEstoque, valorTotal, proximoId);
        proximoId = proximoId + 1;

    }
    campoNomeProduto.value = "";
    campoCategoria.value = "";
    campoPreco.value = "";
    campoQtdEmEstoque.value = "";

    campoNomeProduto.focus();
    mensagemAlert.innerHTML = "";
}

function criarLinha(nomeProduto, categoria, preco, qtdEmEstoque, valorTotal, proximoId) {
    const linha = `<tr class="hover:bg-slate-700 transition">
                    <td class="p-3">${proximoId}</td>
                    <td class="p-3">${nomeProduto}</td>
                    <td class="p-3">${categoria}</td>
                    <td class="p-3 text-green-400">R$ ${preco.toFixed(2)}</td>
                    <td class="p-3">${qtdEmEstoque}</td>
                    <td class="p-3">
                        <span class="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-xs">R$
                        ${valorTotal.toFixed(2)}
                        </span>
                    </td>
                     <td>
                        <button class= "btn-editar">Editar</button>
                        <button class= "btn-excluir">Excluir</button>
                    </td>
                </tr>`;


    //tabela.innerHTML = tabela.innerHTML + linha;
    tabela.insertAdjacentHTML("beforeend", linha);
}

tabela.addEventListener("click", function (event) {
    const botao = event.target;

    if (botao.classList.contains("btn-editar")) {
        editar(botao);
    }

    if (botao.classList.contains("btn-excluir")) {
        excluir(botao);
    }
});

function excluir(botao) {
    let linha = botao.parentNode.parentNode;
    linha.remove();
}

function editar(botao) {
    let linha = botao.parentNode.parentNode;

    campoNomeProduto.value = linha.children[1].innerText;
    campoCategoria.value = linha.children[2].innerText;
    campoPreco.value = linha.children[3].innerText.replace("R$", "").trim();
    campoQtdEmEstoque.value = linha.children[4].innerText;

    linhaEditando = linha;
}