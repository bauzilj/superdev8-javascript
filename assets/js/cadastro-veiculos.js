let proximoCodigo = 1;
let idade = 0;

let linhaEditando = "";

const botaoSalvar = document.getElementById("botao-salvar");
botaoSalvar.addEventListener("click", salvar);

const tabela = document.getElementById("veiculos");

const campoModelo = document.getElementById("modelo");
const campoMarca = document.getElementById("marca");
const campoAno = document.getElementById("ano");
const campoValor = document.getElementById("valor-do-veiculo");
const qtdPortas = document.getElementById("qtd-portas");

const labelModelo = document.getElementById("label-modelo");
const labelMarca = document.getElementById("label-marca");
const labelAno = document.getElementById("label-ano");
const labelValor = document.getElementById("label-valor");
const labelQtdPortas = document.getElementById("label-qtd-porta");



function salvar() {
    const modelo = campoModelo.value.trim();
    const marca = campoMarca.value.trim();
    const ano = parseInt(campoAno.value);
    let valor = parseFloat(campoValor.value);
    const quantidadePortas = parseInt(qtdPortas.value);

   
    let idadeAtualizada = new Date().getFullYear() - ano;
   

    if (modelo.length < 3) {
        labelModelo.innerHTML = "O modelo deve ter mais de 3 caracteres";
        labelModelo.style.color = "#ff0000";
        return;
    } else if (modelo.length > 30) {
        labelModelo.innerHTML = "O modelo nao poder ter mais de 30 caracteres"
        labelModelo.style.color = "#ff0000";
        return;
    }

    if (marca.length < 3) {
        labelMarca.innerHTML = "A marca deve ter mais de 3 caracteres";
        labelMarca.style.color = "#ff0000";
        return;
    } else if (marca.length > 20) {
        labelMarca.innerHTML = "A marca nao poder ter mais de 20 caracteres";
        labelMarca.style.color = "#ff0000";
        return;
    }

    if (campoAno.value.length < 4) {
        labelAno.innerHTML = "Digite 4 numeros pra um ano";
        labelAno.style.color = "#ff0000";
        return;
    } else if (ano === 0 || Number.isNaN(ano)) {
        labelAno.innerHTML = "Vc Precisa digitar um valor superior a zero";
        labelAno.style.color = "#ff0000";
        return;
    }

    if (valor < 0) {
        labelValor.innerHTML = "Valor nao pode ser negativo!";
        labelValor.style.color = "#ff0000";
        return;
    } else if (valor === 0 || Number.isNaN(valor)) {
        labelValor.innerHTML = "Vc Precisa digitar um valor superior a zero";
        labelValor.style.color = "#ff0000";
        return;
    }

    if (isNaN(quantidadePortas) || quantidadePortas <= 0) {
        labelQtdPortas.innerHTML = "Digite quantas portas!";
        labelQtdPortas.style.color = "#ff0000";
        return;
    }

    if (linhaEditando) {
        linhaEditando.children[1].innerText = modelo;
        linhaEditando.children[2].innerText = marca;
        linhaEditando.children[3].innerText = ano;
        linhaEditando.children[4].innerText = "R$" + valor.toFixed(2);
        linhaEditando.children[5].innerText = quantidadePortas;
        linhaEditando.children[6].innerText = idadeAtualizada + " anos";

        linhaEditando = "";
    } else {
        criarLinha(modelo, marca, ano, valor, quantidadePortas, idadeAtualizada, proximoCodigo);
        proximoCodigo++;
    }

    campoModelo.value = "";
    campoMarca.value = "";
    campoAno.value = "";
    campoValor.value = "";
    qtdPortas.value = "";

    campoModelo.focus();


    labelModelo.innerHTML = "Modelo";
    labelMarca.innerHTML = "Marca";
    labelAno.innerHTML = "Ano";
    labelValor.innerHTML = "Valor";
    labelQtdPortas.innerHTML = "Qtd Portas";

    labelModelo.style.color = "";
    labelMarca.style.color = "";
    labelAno.style.color = "";
    labelValor.style.color = "";
    labelQtdPortas.style.color = "";

}

function criarLinha(modelo, marca, ano, valor, quantidadePortas, idadeAtualizada, proximoCodigo) {
    const linha = ` <tr class="border-b hover:bg-gray-50">
                        <td class="p-3">${proximoCodigo}</td>
                        <td class="p-3">${modelo}</td>
                        <td class="p-3">${marca}</td>
                        <td class="p-3">${ano}</td>
                        <td class="p-3">R$ ${valor.toFixed(2)}</td>
                        <td class="p-3">${quantidadePortas}</td>
                        <td class="p-3">${idadeAtualizada} anos</td>
                        <td>
                            <button onclick="editar(this)" class="p-3">Editar</button>
                            <button onclick="excluir(this)" class="p-3">Excluir</button>
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

    campoModelo.value = linha.children[1].innerText;
    campoMarca.value = linha.children[2].innerText;
    campoAno.value = linha.children[3].innerText;
    campoValor.value = linha.children[4].innerText.replace("R$", "").trim();
    qtdPortas.value = linha.children[5].innerText;

    linhaEditando = linha;
}

document.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        salvar();
    }
});