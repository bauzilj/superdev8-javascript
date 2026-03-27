// Pega o elemento do HTML que possui o id "botao-cadastrar"
// e guarda esse elemento dentro da variável botaoCadastrar
const botaoCadastrar = document.getElementById("botao-cadastrar");

// Pega o campo de input do HTML que possui o id "campo-nome"
const campoNome = document.getElementById("campo-nome");

// Adiciona um "ouvinte de evento" ao botão.
// Quando o botão for clicado, a função cadastrarJogo será executada.
botaoCadastrar.addEventListener("click", cadastrarJogo);

//Adicionar um "ouvinte de evento" ao campo
//quando ocorrer o evento do teclado pressionado
campoNome.addEventListener("keydown", eventoEnterNome);

//funcao que sera executada quanto ocorrer um evento de teclado no campo nome
function eventoEnterNome(event){
    //verifica qual tecla foi pressionado pelo usurio
    // se a tecla pressionada dor "Enter"
    if(event.key === "Enter"){

        //Chama a funcao cadastrarJogo()
        //Isso faz com que o jogo seja adicionado a lista
        cadastrarJogo();
    }
}






// Função responsável por cadastrar (adicionar) um jogo na lista
function cadastrarJogo(){

    // Pega o valor digitado dentro do input
    const nome = campoNome.value.trim();

    //verifica se o nome digitado comtem menos que 2 caracteres
    if(nome.length < 2){
        //apresenta uma mensagem que contem menos 2 caractere
        alert("Nome deve conter no minimo 2 caracter");
        //encerrar a execucao dete metodo, pois o nao deve cadastrar quando o nome e invalido
        return;
    }



    // Cria um novo elemento <li> (item de lista) no HTML
    // Exemplo: <li></li>
    const tagLi = document.createElement("li");

    // Coloca dentro do <li> o nome que foi digitado no campo
    // Exemplo: <li>Mario</li>
    tagLi.innerHTML = nome;

    // Pega a lista não ordenada (UL) do HTML que possui o id "jogos"
    // Exemplo de estrutura: <ul id="jogos"></ul>
    const tagUl = document.getElementById("jogos");

    // Adiciona o novo <li> criado dentro da <ul>
    // Ou seja, adiciona um novo item na lista de jogos
    tagUl.appendChild(tagLi);

    //limpar campo nome
    campoNome.value = "";

    //foco no campo nome
    campoNome.focus();
}