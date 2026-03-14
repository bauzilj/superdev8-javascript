let proximoCodigo = 1;
let idade = 0;
const botaoSalvar = document.getElementById("botao-salvar");
botaoSalvar.addEventListener("click", salvar);


const campoModelo = document.getElementById("modelo");
const campoMarca = document.getElementById("marca");
const campoAno = document.getElementById("ano");
const campoValorDoVeiculo = document.getElementById("valor-do-veiculo");
const qtdPortas = document.getElementById("qtd-portas");

const labelModelo = document.getElementById("label-modelo");
const labelMarca = document.getElementById("label-marca");
const labelAno = document.getElementById("label-ano");
const labelValor = document.getElementById("label-valor");
const labelQtdPortas = document.getElementById("label-qtd-porta");

function salvar() {
    const modelo = campoModelo.value.trim();
    const marca = campoMarca.value.trim();
    const ano = campoAno.value.trim();
    const valor = parseFloat(campoValorDoVeiculo.value.trim());
    const quantidePortas = qtdPortas.value.trim();

    let data = new Date();
    let anoAtual = data.getFullYear();
    idade = anoAtual - ano;

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
    }

    if (ano.length < 4) {
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

    if (quantidePortas === "" || Number.isNaN(quantidePortas)) {
        labelQtdPortas.innerHTML = "Digite quantas portas!";
        labelQtdPortas.style.color = "#ff0000";
        return;
    }

    campoModelo.value = "";
    campoMarca.value = "";
    campoAno.value = "";
    campoValorDoVeiculo.value = "";
    qtdPortas.value = "";

    campoModelo.focus();


    proximoCodigo = proximoCodigo + 1;


    console.log(modelo, marca, ano, valor, quantidePortas, idade, proximoCodigo);
    criarLinha(modelo, marca, ano, valor, quantidePortas, idade, proximoCodigo);

}

function criarLinha(modelo, marca, ano, valor, quantidePortas, idade, proximoCodigo) {
    const linha = ` <tr class="border-b hover:bg-gray-50">
                        <td class="p-3">${proximoCodigo}</td>
                        <td class="p-3">${modelo}</td>
                        <td class="p-3">${marca}</td>
                        <td class="p-3">${ano}</td>
                        <td class="p-3">R$ ${valor.toFixed(2)}</td>
                        <td class="p-3">${quantidePortas}</td>
                        <td class="p-3">${idade} anos</td>
                    </tr>`;

    const tabela = document.getElementById("veiculos");
    tabela.innerHTML = tabela.innerHTML + linha;
}
