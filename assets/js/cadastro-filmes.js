let proximoCodigo = 1;
let classificacao = "";

const botaoSalvar = document.getElementById("botao-salvar");
botaoSalvar.addEventListener("click", salvar);

const campoNome = document.getElementById("nome");
const campoGenero = document.getElementById("genero");
const campoDuracao = document.getElementById("duracao");
const campoNota = document.getElementById("nota");
const campoAssistido = document.getElementById("assistido");


//constante relacionado aos lebels
const campoNote = document.getElementById("note");
const duracaoMinutos = document.getElementById("duracao-minutos");
const nomeFilme = document.getElementById("nome-filme");
const generoFilme = document.getElementById("genero-filme");
const filmeAssistido = document.getElementById("filme-assistido");



function salvar() {
    const nome = campoNome.value.trim();
    const genero = campoGenero.value.trim()
    const duracao = campoDuracao.value;
    const nota = campoNota.value;
    const assistido = campoAssistido.value

    if (nota < 5) {
        classificacao = "Ruim";
    } else if (nota > 5 && nota < 7) {
        classificacao = "Regular";
    } else if (nota > 7) {
        classificacao = "Bom"
    }

    if (nome.length < 3) {
        nomeFilme.innerHTML = "O nome deve ter mais de 3 caracteres";
        nomeFilme.style.color = "#ff0000";
        return;
    } else if (nome.length > 50) {
        nomeFilme.innerHTML = "O nome nao poder ter mais de 50 caracteres";
        return;
    }

    if (genero.length < 3) {
        generoFilme.innerHTML = "O gênero deve ter mais de 3 caracteres";
        generoFilme.style.color = "#ff0000";
        return;
    } else if (genero.length > 20) {
        generoFilme.innerHTML = "O gênero nao poder ter mais de 20 caracteres";
        return;
    }

    if (duracao < 15 || duracao > 230 || Number.isNaN(duracao)) {
        duracaoMinutos.innerHTML = "Duração em minutos deve ser entre 15 e 230 minutos";
        duracaoMinutos.style.color = "#FF0000";
        return;
    }

    if (nota < 1 || nota > 10) {
        campoNote.innerHTML = "A nota deve ser entre 1 e 10"
        // alert("A nota deve ser entre 1 e 10");
        campoNote.style.color = "#FF0000";
        return;
    }

    if (assistido !== "Sim" && assistido !== "Não") {
        filmeAssistido.innerHTML = "Seleccione uma das opçoes!";
        filmeAssistido.style.color = "#ff0000";
        return;
    }


    criarLinha(nome, genero, duracao, nota, classificacao, assistido, proximoCodigo)
    console.log(nome, genero, duracao, nota, classificacao, assistido, proximoCodigo);
    proximoCodigo = proximoCodigo + 1;

    campoNome.value = "";
    campoNota.value = "";
    campoGenero.value = "";
    campoDuracao.value = "";
    campoAssistido.value = "";
    campoNome.focus();

}

function criarLinha(nome, genero, duracao, nota, classificacao, assistido, proximoCodigo) {

    const linha = ` <tr class="text-center hover:bg-gray-100">
                    <td class="p-2 border">${proximoCodigo}</td>
                    <td class="p-2 border">${nome}</td>
                    <td class="p-2 border">${genero}</td>
                    <td class="p-2 border">${duracao} min</td>
                    <td class="p-2 border">${nota}</td>
                    <td class="p-2 border">${classificacao}</td>
                    <td class="p-2 border">${assistido}</td>
                </tr>`;

    const tabela = document.getElementById("filmes");
    tabela.innerHTML = tabela.innerHTML + linha;

}