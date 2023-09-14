function upTable() {

var dinheiro = parseFloat(document.getElementById('dinheiro').value);
var debito = parseFloat(document.getElementById('debito').value);
var credito = parseFloat(document.getElementById('credito').value);
var pix = parseFloat(document.getElementById('pix').value);
var ticket = parseFloat(document.getElementById('ticket').value);
var res = document.getElementById('resTable')


if (isNaN(dinheiro) || isNaN(debito) || isNaN(credito) || isNaN(pix) || isNaN(ticket) ) {
    window.alert('Voce precisa declarar um Valor');
    return
} else {
    let dadosSection = document.getElementById("dados");
    dadosSection.style.display = "none";
}

    // Global Scope
let resultado = getSoma(Number(dinheiro), Number(debito), Number(credito), Number(pix), Number(ticket));

let perDinheiro = getPercentage(Number(dinheiro), Number(resultado), 100)
let perDebito = getPercentage(Number(debito), Number(resultado), 100)
let perCredito = getPercentage(Number(credito), Number(resultado), 100)
let perPix = getPercentage(Number(pix), Number(resultado), 100)
let perTicket = getPercentage(Number(ticket), Number(resultado), 100)

    {
        // Table Data

        let dados = [dinheiro, debito, credito, pix, ticket];
        let dados2 = [perDinheiro, perDebito, perCredito, perPix, perTicket]

        for (let push = 0; push < dados.length; push++) {
                let th = document.getElementById('table-02');
                let td = document.createElement('dt');
                th.appendChild(td);
                td.innerHTML ='R$' + dados[push];

                let th2 = document.querySelector('#table-03')
                let td2 = document.createElement('dt')
                th2.appendChild(td2)
                td2.innerHTML = Math.round(dados2[push]) + "%"

                let th3 = document.querySelector('#table-04')
                let td3 = document.createElement('dt')
                th3.appendChild(td3)
                td3.innerHTML = getStatus(dados2[push])

        }

            res.innerHTML = ` R$${resultado}`
    }
 
    //Show Table.
let tabela = document.getElementById('tabela')
tabela.style.border = '2px solid black';
let tabelaSection = document.getElementById('tabelaSection');
tabelaSection.style.display = 'block';
}

function getSoma(a,b,c,d,e) {
    return Number(a) + Number(b) + Number(c) + Number(d) + Number(e)
}

function getPercentage(n1,n2,n3) {
    return (Number(n1) / Number(n2)) * Number(n3)

}

function getStatus(sell) {
    vendas = 'Boas Vendas!';

    if (sell > 30){
        vendas = 'Equilibrar Vendas';
    }

    if ( sell < 20) {
         vendas = 'Melhorar nesse ponto';
    }
        return vendas
}