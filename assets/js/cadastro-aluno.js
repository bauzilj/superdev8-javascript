let nextId = 1;
let linhaEditando = "";

const botaoAdicionar = document.getElementById("botao-add");
botaoAdicionar.addEventListener("click", adicionar);

let campoNome = document.getElementById("nome");
let campoNota1 = document.getElementById("nota-1");
let campoNota2 = document.getElementById("nota-2");
let campoNota3 = document.getElementById("nota-3");

let mensagemAlert = document.getElementById("alert")

function adicionar() {
    let nome = campoNome.value.trim();
    let nota1 = parseFloat(campoNota1.value.trim());
    let nota2 = parseFloat(campoNota2.value.trim());
    let nota3 = parseFloat(campoNota3.value.trim());

    let media = (nota1 + nota2 + nota3) / 3;
    let situacao = media >= 6 ? "Aprovado" : "Reprovado";

    if (!nome || isNaN(nota1) || isNaN(nota2) || isNaN(nota3)) {
        mensagemAlert.innerHTML = "Preencha todos os campos corretamente!!!";
        mensagemAlert.style.color = "#ff0000";
        return;
    }

    if (linhaEditando) {

        linhaEditando.children[1].innerText = nome;
        linhaEditando.children[2].innerText = nota1;
        linhaEditando.children[3].innerText = nota2;
        linhaEditando.children[4].innerText = nota3;
        linhaEditando.children[5].innerText = media.toFixed(2);
        linhaEditando.children[6].innerText = situacao;

        linhaEditando = "";

    } else {

        criarLinha(nome, nota1, nota2, nota3, media, situacao, nextId);
        nextId += 1;

    }
    campoNome.value = "";
    campoNota1.value = "";
    campoNota2.value = "";
    campoNota3.value = "";

    campoNome.focus();
}

function criarLinha(nome, nota1, nota2, nota3, media, situacao, nextId) {
    const linha = `<tr>
                        <td>${nextId}</td>
                        <td>${nome}</td>
                        <td>${nota1}</td>
                         <td>${nota2}</td>
                        <td>${nota3}</td>
                         <td>${media.toFixed(2)}</td>
                        <td>${situacao}</td>
        <td>
            <button onclick="editarAluno(this)">Modificar</button>
            <button onclick="excluirAluno(this)">Excluir</button>
        </td>
                </tr>`;
    const tabela = document.getElementById("alunos");
    tabela.insertAdjacentHTML("beforeend", linha);
    //tabela.innerHTML = tabela.innerHTML + linha;
}

function editarAluno(botao) {

    let linha = botao.parentNode.parentNode;

    campoNome.value = linha.children[1].innerText;
    campoNota1.value = linha.children[2].innerText;
    campoNota2.value = linha.children[3].innerText;
    campoNota3.value = linha.children[4].innerText;

    linhaEditando = linha;
}

function excluirAluno(botao) {

    let linha = botao.parentNode.parentNode;
    linha.remove();
}