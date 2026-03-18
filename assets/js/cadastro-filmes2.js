let nexId = 1;
let linhaEditando = "";

const botaoSalvar = document.getElementById("botao-salvar");
botaoSalvar.addEventListener("click", salvar);

let mensagemAlert = document.getElementById("mensagem-alert");

let tabela = document.getElementById("filmes");
const campoNomeFilme = document.getElementById("nome-do-filme");
const campoGenero = document.getElementById("genero");
const campoDuracaoEmMinutos = document.getElementById("duracao-em-minutos");
const campoFaixaEtaria = document.getElementById("faixa-etaria");

function salvar() {
    let nomeFilmes = campoNomeFilme.value.trim();
    let genero = campoGenero.value.trim();
    let duracaoEmMinutos = parseInt(campoDuracaoEmMinutos.value);
    let faixaEtaria = campoFaixaEtaria.value;

    if(!nomeFilmes || !genero || isNaN(duracaoEmMinutos) || !faixaEtaria){
        mensagemAlert.innerHTML = ("Preenche todos os campos com cuidado!!");
        return;
    }

    let classificacaoDeDuracao = duracaoEmMinutos >= 120 ? "Filme longo" : "Filme curto";

    if (linhaEditando) {
        linhaEditando.children[1].innerText = nomeFilmes;
        linhaEditando.children[2].innerText = genero;
        linhaEditando.children[3].innerText = duracaoEmMinutos;
        linhaEditando.children[4].innerText = faixaEtaria;
        linhaEditando.children[5].innerText = classificacaoDeDuracao;

        linhaEditando = "";
    } else {
        criarLinha(nexId, nomeFilmes, genero, duracaoEmMinutos, faixaEtaria, classificacaoDeDuracao);
        nexId = nexId + 1;
    }
    campoNomeFilme.value = "";
    campoGenero.value = "";
    campoDuracaoEmMinutos.value = "";
    campoFaixaEtaria.value = "";

    campoNomeFilme.focus();
}

function criarLinha(nexId, nomeFilmes, genero, duracaoEmMinutos, faixaEtaria, classificacaoDeDuracao) {
    let linha = `<tr>
                    <td>${nexId}</td>
                    <td>${nomeFilmes}</td>
                    <td>${genero}</td>
                    <td>${duracaoEmMinutos}</td>
                    <td>${faixaEtaria}</td>
                    <td>${classificacaoDeDuracao}</td>
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
    campoNomeFilme.value = linha.children[1].innerText;
    campoGenero.value = linha.children[2].innerText;
    campoDuracaoEmMinutos.value = linha.children[3].innerText;
    campoFaixaEtaria.value = linha.children[4].innerText;

    linhaEditando = linha;

}
