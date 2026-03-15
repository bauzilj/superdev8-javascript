let proximoId = 1;
let valorTotal = 0;

const botaoAddicionar = document.getElementById("botao-add");
botaoAddicionar.addEventListener("click", addicionar);

const campoNomeProduto = document.getElementById("nome-produto");
const campoCategoria = document.getElementById("categoria");
const campoPreco = document.getElementById("preco");
const campoQtdEmEstoque = document.getElementById("qtdEmEstoque");

const labelNome = document.getElementById("label-produto");
const labelCategoria = document.getElementById("label-categoria");
const labelPreco = document.getElementById("label-preco");
const labelQuantidade = document.getElementById("label-quantidade");

function addicionar() {
    nomeProduto = campoNomeProduto.value.trim();
    categoria = campoCategoria.value.trim();
    preco = parseFloat(campoPreco.value.trim());
    qtdEmEstoque = parseInt(campoQtdEmEstoque.value.trim());

    if (nomeProduto.length < 3) {
        labelNome.innerHTML = "O nome deve ter mais de 3 caracteres.";
        labelNome.style.color = "#ff0000"
        return;
    } else if (nomeProduto.length > 25) {
        labelNome.innerHTML = "O nome deve ter no máximo 25 caracteres.";
        labelNome.style.color = "#ff0000";
        return;
    }

    if (categoria.length < 3) {
        labelCategoria.innerHTML = "A categoria deve ter mais de 3 caracteres.";
        labelCategoria.style.color = "#ff0000"
        return;
    } else if (categoria.length > 25) {
        labelCategoria.innerHTML = "A categoria deve ter no máximo 25 caracteres.";
        labelCategoria.style.color = "#ff0000";
        return;
    }

    if (preco === 0 || Number.isNaN(preco)) {
        labelPreco.innerHTML = "Vc Precisa digitar um valor superior a zero";
        labelPreco.style.color = "#ff0000";
        return;
    } else if (preco < 0) {
        labelPreco.innerHTML = "O preco deve ser numero positivo";
        labelPreco.style.color = "#ff0000";
        return;
    }

    if (qtdEmEstoque < 0) {
        labelQuantidade.innerHTML = "A quantidade deve ser numero positivo."
        labelQuantidade.style.color = "#ff0000";
        return;
    } else if (qtdEmEstoque === 0 || Number.isNaN(qtdEmEstoque)) {
        labelQuantidade.innerHTML = "Vc precisa digite um valor superior a zero"
        labelQuantidade.style.color = "#ff0000"
        return;
    }

    campoNomeProduto.value = "";
    campoNomeProduto.focus();
    campoCategoria.value = "";
    campoPreco.value = "";
    campoQtdEmEstoque.value = "";

    valorTotal = preco * qtdEmEstoque;

    criarLinha(nomeProduto, categoria, preco, qtdEmEstoque, proximoId);
    proximoId = proximoId + 1;

}

function criarLinha(nomeProduto, categoria, preco, qtdEmEstoque, proximoId) {
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
                </tr>`;

    const tabela = document.getElementById("produtos");
    tabela.innerHTML = tabela.innerHTML + linha;
}