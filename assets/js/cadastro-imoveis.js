let proximoCodigo = 1;
let linhaEditando = "";

const botaoSalvar = document.getElementById("botao-salvar");
botaoSalvar.addEventListener("click", salvar);

const campoProprietario = document.getElementById("proprietario");
const campoLocalidade = document.getElementById("localidade");
const campoValor = document.getElementById("valor-imovel");
const campoQuantidadeM2 = document.getElementById("m2-imovel");
const campoConstrucao = document.getElementById("construcao");

let tabela = document.getElementById("imoveis");
let mensagemAlert = document.getElementById("mensagem-alert");

function salvar() {
    const proprietario = campoProprietario.value.trim();
    const localidade = campoLocalidade.value.trim();
    const valor = parseFloat(campoValor.value);
    const quantidadeM2 = parseFloat(campoQuantidadeM2.value);
    const construcao = campoConstrucao.value
    if (proprietario.length < 3) {
        mensagemAlert.innerHTML = "O nome deve ter mais de 3 caracteres";
        return;
    } else if (proprietario.length > 100) {
        mensagemAlert.innerHTML = "O nome nao poder ter mais de 100 caracteres";
        return;
    }

    if (localidade.length < 3) {
        mensagemAlert.innerHTML = "O endereço deve ter mais de 3 caracteres";
        return;
    } else if (localidade.length > 100) {
        mensagemAlert.innerHTML = "O endereço nao pode ter mais de 100 carateres";
        return;
    }

    if (valor < 0) {
        mensagemAlert.innerHTML = "Valor nao pode ser negativo";
        return;
    } else if (valor === 0 || Number.isNaN(valor)) {

        mensagemAlert.innerHTML = "Vc Precisa digitar um valor superior a zero";
        return;
    }

    if (quantidadeM2 <= 0) {
       mensagemAlert.innerHTML = "A quantidade de metros quadrados deve ser numero positivo";
        return;
    } else if (quantidadeM2 === 0 || Number.isNaN(quantidadeM2)) {
        mensagemAlert.innerHTML = "Vc Precisa digitar um valor superior a zero";
        return;
    }

    if (linhaEditando) {
        linhaEditando.children[1].innerText = proprietario;
        linhaEditando.children[2].innerText = localidade;
        linhaEditando.children[3].innerText = "R$" + valor.toFixed(2);
        linhaEditando.children[4].innerText = quantidadeM2;
        linhaEditando.children[5].innerText = construcao;

        linhaEditando = "";

    } else {
        criarLinha(proprietario, localidade, valor, quantidadeM2, construcao, proximoCodigo);
        proximoCodigo++;

    }
    campoProprietario.value = "";
    campoLocalidade.value = "";
    campoValor.value = "";
    campoQuantidadeM2.value = "";
    campoConstrucao.value = "";

    campoProprietario.focus();
}

function criarLinha(proprietario, localidade, valor, quantidadeM2, construcao, proximoCodigo) {

    const linha = `  <tr>
                    <td>${proximoCodigo}</td>
                    <td>${proprietario}</td>
                    <td>${localidade}</td>
                    <td>R$ ${valor.toFixed(2)}</td>
                    <td>${quantidadeM2}</td>
                    <td>
                        <span>
                        ${construcao}
                        </span>
                    </td>
                             <td>
            <button class="btn-editar" onclick="editar(this)">Modificar</button>
            <button class="btn-excluir" onclick="excluir(this)">Excluir</button>
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

    campoProprietario.value = linha.children[1].innerText;
    campoLocalidade.value = linha.children[2].innerText;
    campoValor.value = linha.children[3].innerText.replace("R$", "");
    campoQuantidadeM2.value = linha.children[4].innerText;
    campoConstrucao.value = linha.children[5].innerText;

    linhaEditando = linha;
}