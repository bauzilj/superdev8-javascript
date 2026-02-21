
//const divTipoPf = document.getElementById('tipo-pf');
//const divTipoPj = document.getElementById('tipo-pj');
function selecionarTipo(tipo) {
    //divTipoPf.style.display = tipo === 'pf' ? 'block' : 'none';
    //divTipoPj.style.display = tipo === 'pj' ? 'block' : 'none';
    document.getElementById('tipo-pf').style.display = tipo === 'pf' ? 'block' : 'none';
    document.getElementById('tipo-pj').style.display = tipo === 'pj' ? 'block' : 'none';
}

