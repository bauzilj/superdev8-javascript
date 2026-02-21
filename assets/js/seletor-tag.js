const imagens = [
    "assets/imagens/imagem01.png",
    "assets/imagens/imagem02.jpg",
    "assets/imagens/imagem03.jpeg"
];

const imagem = document.getElementById("imagem-mine");
let indice = 0;
setInterval(() => {
    let imagemSrc = imagens[indice];
    imagem.setAttribute("src", imagemSrc);

    indice = indice + 1;
    if (indice >= 3) {
        indice = 0
    }
}, 1000);


//busca no html todos os elementos  que tenhan o atributo name="fonte" (ex: radios/inputs de tamanho de fonte)
let inputsTamanhoFonte = document.getElementsByName("fonte");

//Percorre a lista de inputs encontrados (do primeiro ao ultimo)
for (let i = 0; i < inputsTamanhoFonte.length; i += 1) {
    //Pega o input da posicao atual (indice i) dentro da lista
    const inputTamanhoFonte = inputsTamanhoFonte[i];
    //define que, quando esse input mudar de valor, a funcao campoFonteAlterado sera executado
    inputTamanhoFonte.onchange = campoFonteAlterado;
}


//Funcao chamada automaticamente quando algum input de fonte mudar (evento "change")
function campoFonteAlterado(event) {
    //Pegar o valor do input que disparou o evento (Por exemplo: "12", "16", "20" etc.)
    let tamanho = event.target.value;
    //Chama a funcao responsavel por aplicar o tamanho da funte no pragrafo
    alterarTamanhoFonte(tamanho);
}

//funcao que realmente altera o tamanho da fonte do primeiro <p> da pagina
function alterarTamanhoFonte(tamanho) {
    //Busca todas as tags <p> e pega a primeira delas (indice 0)
    const tagP = document.getElementsByTagName("p")[0];

    //Define o font-size do paragrafo usando template string e adicionando "px ao valor do tamanho"
    tagP.style.fontSize = `${tamanho}px`;
}

//Seleciona o elemento de input/select reponsavel pela cor
const corTexto = document.getElementById("cor-texto");

//adiciona um listener para detetar quando o valor do input/select mudar
corTexto.addEventListener("change", definirCorTexto);

//Seleciona o primeiro paragrafo da pagina
const tagP = document.getElementsByTagName("p")[0]


//Funcao que sera chamada quando o cor for alterada
function definirCorTexto(event) {
    //obtem o elemento que disparou o evento (o select de cores)
    let campoSelect = event.target;

    //Pega o valor selecionado (a cor escolhido)
    let cor = campoSelect.value;

    //Aplica a cor selecionado ao estilo do primeiro paragrafo
    tagP.style.color = cor;
}


////Seleciona o elemento de input/select pela cor fundo
const tagCorFundo = document.getElementById("cor-fundo");

//Adiciona um listetener para detetar quando o valor do input /select mudar
tagCorFundo.addEventListener("change", definirCorFundo);

//Funcao que sera chamada quando a cor fundo for alterado
function definirCorFundo() {
    //Pega o valor selecionado ( a cor escolhida)
    const corFundo = tagCorFundo.value;

    //Seleciona o elemnto <body> da pagina
    const body = document.getElementsByTagName("body")[0];

    //Aplica a cor escolhido ao fundo da pagina (backGroundColor)
    body.style.backgroundColor = corFundo;
}