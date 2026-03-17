let nextId = 1;
let editLine = "";
let salarioFinal = 0;
let auxilioFamilia = 0;

const botaoCadastrar = document.getElementById("botao-cadastrar");
botaoCadastrar.addEventListener("click", cadastrarFuncionario);

const campoNome = document.getElementById("nome");
const campoCargo = document.getElementById("cargo");
const campoSalario = document.getElementById("salario");
const campoQtdFilho = document.getElementById("qtdFilho")
let mensagemAlert = document.getElementById("alert");

const tabela = document.getElementById("funcionario");

function cadastrarFuncionario() {
    let nome = campoNome.value.trim();
    let cargo = campoCargo.value.trim();
    let salario = parseFloat(campoSalario.value.trim());
    let qtdFilho = parseInt(campoQtdFilho.value.trim());

    if (!nome || !cargo || isNaN(salario) || isNaN(qtdFilho)) {
        mensagemAlert.innerHTML = "Preenche todos os campos com cuidado!";
        mensagemAlert.style.color = "#ff0000";
        return;
    }

    
    auxilioFamilia = qtdFilho * 150;

    salarioFinal = salario + auxilioFamilia;



    if (editLine) {
        editLine.children[1].innerText = nome;
        editLine.children[2].innerText = cargo;
        editLine.children[3].innerText = "R$ " + salario.toFixed(2);
        editLine.children[4].innerText = qtdFilho;
        editLine.children[5].innerText = "R$ " + auxilioFamilia.toFixed(2);
        editLine.children[6].innerText = "R$ " + salarioFinal.toFixed(2);

        editLine = "";

    } else {
        criarLinha(nome, cargo, salario, qtdFilho, auxilioFamilia, salarioFinal, nextId);
        nextId += 1
    }
    campoNome.value = "";
    campoCargo.value = "";
    campoSalario.value = "";
    campoQtdFilho.value = "";

    campoNome.focus();
}

function criarLinha(nome, cargo, salario, qtdFilho, auxilioFamilia, salarioFinal, nextId) {
    const linha = `<tr>
                        <td>${nextId}</td>
                        <td>${nome}</td>
                        <td>${cargo}</td>
                         <td>${salario.toFixed(2)}</td>
                        <td>${qtdFilho}</td>
                         <td>${auxilioFamilia.toFixed(2)}</td>
                        <td>${salarioFinal.toFixed(2)}</td>
        <td>
            <button onclick="editarFuncionario(this)">Modificar</button>
            <button onclick="excluiFuncionario(this)">Excluir</button>
        </td>
                </tr>`;
    tabela.insertAdjacentHTML("beforeend", linha);
}

function editarFuncionario(botao) {
    let linha = botao.parentNode.parentNode;

    campoNome.value = linha.children[1].innerText;
    campoCargo.value = linha.children[2].innerText;
    campoSalario.value = linha.children[3].innerText.replace("R$ ", "");
    campoQtdFilho.value = linha.children[4].innerText;

    editLine = linha;
}

function excluiFuncionario(botao) {
    let linha = botao.parentNode.parentNode;
    linha.remove();
}