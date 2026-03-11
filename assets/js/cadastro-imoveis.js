let proximoCodigo = 1;


const botaoSalvar = document.getElementById("botao-salvar");
botaoSalvar.addEventListener("click", salvar);

const campoProprietario = document.getElementById("proprietario");
const campoLocalidade = document.getElementById("localidade");
const campoValor = document.getElementById("valor-imovel");
const campoQuantidadeM2 = document.getElementById("m2-imovel");
const campoConstrucao = document.getElementById("construcao");


function salvar() {
    const proprietario = campoProprietario.value.trim();
    const localidade = campoLocalidade.value.trim();
    const valor = parseFloat(campoValor.value);
    const quantidadeM2 = parseFloat(campoQuantidadeM2.value);
    const construcao = campoConstrucao.value
    if (proprietario.length < 3) {
        alert("O nome deve ter mais de 3 caracteres");
        return;
    } else if (proprietario.length > 100) {
        alert("O nome nao poder ter mais de 100 caracteres");
    }

    if (localidade.length < 3) {
        alert("O endereço deve ter mais de 3 caracteres");
    } else if (localidade.length > 100) {
        alert("O endereço nao pode ter mais de 100 carateres");
    }

    if (valor < 0) {
        alert("Valor nao pode ser negativo");
        return;
    } else if (valor === 0 || Number.isNaN(valor)) {

        alert("Vc Precisa digitar um valor superior a zero");
        return;
    }

    if (quantidadeM2 <= 0) {
        alert("A quantidade de metros quadrados deve ser numero positivo");
        return;
    } else if (quantidadeM2 === 0 || Number.isNaN(quantidadeM2)) {
        alert("Vc Precisa digitar um valor superior a zero");
        return;
    }
    proximoCodigo++;

    criarLinha(proprietario, localidade, valor, quantidadeM2, construcao, proximoCodigo);

    console.log(proprietario, localidade, valor, quantidadeM2, construcao, proximoCodigo)
}

function criarLinha(proprietario, localidade, valor, quantidadeM2, construcao, proximoCodigo) {

    const linha = `  <tr class="hover:bg-slate-700 transition">
                    <td class="p-3">${proximoCodigo}</td>
                    <td class="p-3">${proprietario}</td>
                    <td class="p-3">${localidade}</td>
                    <td class="p-3 text-green-400">R$ ${valor.toFixed(2)}</td>
                    <td class="p-3">${quantidadeM2}</td>
                    <td class="p-3">
                        <span class="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-xs">
                        ${construcao}
                        </span>
                    </td>
                </tr>`;

    const tabela = document.getElementById("imoveis");
    tabela.innerHTML += linha;

}

