

let nextId = 1;
let linhaEditando = "";

let valorTotalPedidos = 0;

const botaoSalvar = document.getElementById("botao-salvar");
botaoSalvar.addEventListener("click", salvar);

const campoNomeCliente = document.getElementById("nome-do-cliente");
const campoNomeLanche = document.getElementById("nome-do-lanche");
const campoQuantidade = document.getElementById("quantidade");
const campoValorUnitario = document.getElementById("valor-unitario");

const tabela = document.getElementById("pedidos");
let mensagemAlert = document.getElementById("alert");


function salvar() {
    let nomeCliente = campoNomeCliente.value.trim();
    let nomeLanche = campoNomeLanche.value.trim();
    let quantidade = parseInt(campoQuantidade.value.trim());
    let valorUnitario = parseFloat(campoValorUnitario.value.trim());

    valorTotalPedidos = valorUnitario * quantidade;

    if(!nomeCliente || !nomeLanche || isNaN(quantidade) || isNaN(valorUnitario)){
        mensagemAlert.innerHTML = "Preenche todos os campos com cuidado!";
        mensagemAlert.style.color = "#ff0000";
        return;
    }

    if (linhaEditando) {
        linhaEditando.children[1].innerText = nomeCliente;
        linhaEditando.children[2].innerText = nomeLanche;
        linhaEditando.children[3].innerText = quantidade;
        linhaEditando.children[4].innerText = valorUnitario.toFixed(2);
        linhaEditando.children[5].innerText = valorTotalPedidos.toFixed(2);

        linhaEditando = "";
    } else {
        criarLinha(nextId, nomeCliente, nomeLanche, quantidade, valorUnitario, valorTotalPedidos);
        nextId += 1;
    }
    campoNomeCliente.value = "";
    campoNomeLanche.value = "";
    campoQuantidade.value = "";
    campoValorUnitario.value = "";

    campoNomeCliente.focus();



}

function criarLinha(nextId, nomeCliente, nomeLanche, quantidade, valorUnitario, valorTotalPedidos) {
    const linha = `<tr>
                    <td>${nextId}</td>
                    <td>${nomeCliente}</td>
                    <td>${nomeLanche}</td>
                    <td>${quantidade}</td>
                    <td>R$ ${valorUnitario}</td>
                    <td>R$ ${valorTotalPedidos.toFixed(2)}</td>
                    <td>
                        <button class="btn-editar " onclick="editar(this)">Editar</button>
                        <button class="btn-excluir" onclick="excluir(this)">Excluir</button>
                    </td>
                </tr>`;

    tabela.insertAdjacentHTML("beforeend", linha);
}

function editar(botao) {
    let linha = botao.parentNode.parentNode;

    campoNomeCliente.value = linha.children[1].innerText;
    campoNomeLanche.value = linha.children[2].innerText;
    campoQuantidade.value = linha.children[3].innerText;
    campoValorUnitario.value = linha.children[4].innerText.replace("R$ ", "");;

    linhaEditando = linha;
}

function excluir(botao) {
    let linha = botao.parentNode.parentNode;
    linha.remove();
}





