let nextId = 1;
let editorLinha = "";

const botaoSalvar = document.getElementById("botao-salvar");
botaoSalvar.addEventListener("click", salvar);

const campoTituloLivro = document.getElementById("titulo-livro");
const campoAutor = document.getElementById("autor");
const CampoQuantidadePaginas = document.getElementById("quantidadePaginas");
const campoAnoDePublicacao = document.getElementById("anoDePublicacao");

let mensagemAlert = document.getElementById("alert");

let tabela = document.getElementById("livros");


function salvar() {
    let tituloLivro = campoTituloLivro.value.trim();
    let autor = campoAutor.value.trim();
    let quantidadePaginas = parseInt(CampoQuantidadePaginas.value.trim());
    let anoDePublicacao = parseInt(campoAnoDePublicacao.value.trim());

    let classificacao = anoDePublicacao <= 2010 ? "Livro antigo" : "Livro recente";

    if(!tituloLivro || !autor || isNaN(quantidadePaginas) || isNaN(anoDePublicacao)){
        mensagemAlert.innerHTML = "Preenche todos os campos com cuidado!!";
        mensagemAlert.style.color = "#ff0000";
        return;
    }

    if (editorLinha) {
        editorLinha.children[1].innerText = tituloLivro;
        editorLinha.children[2].innerText = autor;
        editorLinha.children[3].innerText = quantidadePaginas;
        editorLinha.children[4].innerText = anoDePublicacao;
        editorLinha.children[5].innerText = classificacao;

        editorLinha = "";
    } else {
        criarLinhas(tituloLivro, autor, quantidadePaginas, anoDePublicacao, classificacao, nextId);
        nextId += 1;
    }
    campoTituloLivro.value = "";
    campoAutor.value = "";
    CampoQuantidadePaginas.value = "";
    campoAnoDePublicacao.value = "";

    campoTituloLivro.focus();
}

function criarLinhas(tituloLivro, autor, quantidadePaginas, anoDePublicacao, classificacao, nextId) {
    const linha = ` <tr>
                    <td>${nextId}</td>
                    <td>${tituloLivro}</td>
                    <td>${autor}</td>
                    <td>${quantidadePaginas}</td>
                    <td>${anoDePublicacao}</td>
                    <td>${classificacao}</td>
                    <td>
            <button onclick="editarLivros(this)">Modificar</button>
            <button onclick="excluirLivros(this)">Excluir</button>
        </td> 
                </tr>`;
               

    tabela.insertAdjacentHTML("beforeend", linha);
}

function editarLivros(botao){
    let linha = botao.parentNode.parentNode;

    campoTituloLivro.value = linha.children[1].innerText;
    campoAutor.value = linha.children[2].innerText;
    CampoQuantidadePaginas.value = linha.children[3].innerText;
    campoAnoDePublicacao.value = linha.children[4].innerText;

    editorLinha = linha;
}

function excluirLivros(botao){
    let linha = botao.parentNode.parentNode;
    linha.remove();
}