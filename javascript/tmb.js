const CalculadoraTMB = {
    calcularTMBMan: function (altura, peso, idade) {
        peso = 66 + (13.7 * peso);
        altura = 5 * altura;
        idade = 6.8 * idade;

        return peso + altura - idade;
    },

    calcularTMBWoman: function (altura, peso, idade) {
        altura = 3.098 * altura;
        peso = 447.593 + (9.247 * peso);
        idade = 4.330 * idade;

        return peso + altura - idade;
    },
    adicionarParagrafo: function (conteudo) {
        const resultadoDiv = document.querySelector('.resultado');
        const paragrafo = document.createElement('p');
        paragrafo.innerHTML = conteudo;
        paragrafo.classList.add('tbm-result');
        resultadoDiv.appendChild(paragrafo);
    },
    limparResultados: function(){
        const resultadoDiv = document.querySelector('.resultado');
        resultadoDiv.innerHTML = '';
    },
    calcular: function(){
        this.limparResultados();

        const altura = parseFloat(document.querySelector('.form-control[name="altura"]').value);
        const peso = parseFloat(document.querySelector('.form-control[name="peso"]').value);
        const idade = parseFloat(document.querySelector('.form-control[name="idade"]').value);
        const nivelAtividadeSelect = document.querySelector('.form-select[name="nivelAtividade"]');
        const fatorNivelAtividade = parseFloat(nivelAtividadeSelect.options[nivelAtividadeSelect.selectedIndex].getAttribute('data-fator'));
        const nomeUsuario = document.getElementById('nome').value;
        
        const sexoSelecionado = document.querySelector('.form-select[name="sexo"]').value;
        const objetivoSelecionado = document.querySelector('.form-select[name="objetivo"]').value;
        
        let resultado;
        
        if (sexoSelecionado === "homem") {
            resultado = CalculadoraTMB.calcularTMBMan(altura, peso, idade);
        } else if (sexoSelecionado === "mulher") {
            resultado = CalculadoraTMB.calcularTMBWoman(altura, peso, idade);
        }
        
        const tmbSemObjetivoDefinido = resultado * fatorNivelAtividade
        let TMBComNivelAtividade = resultado * fatorNivelAtividade;
        
        if (objetivoSelecionado === "perder") {
            TMBComNivelAtividade -= 500 
            this.adicionarParagrafo(`Olá ${nomeUsuario} Se voce deseja <u>perder peso</u> consuma: ${TMBComNivelAtividade.toFixed(2)} calorias por dia `)
        } else if (objetivoSelecionado === "ganhar") {
            TMBComNivelAtividade += 500;
            this.adicionarParagrafo(`Olá ${nomeUsuario} Se voce deseja <u>Ganhar Peso</u> consuma: ${TMBComNivelAtividade.toFixed(2)} calorias por dia `)
        }

        this.adicionarParagrafo(`TMB: Aqui é quantas calorias seu corpo consome por dia: ${tmbSemObjetivoDefinido.toFixed(2)}`);
        // this.adicionarParagrafo(`Resultado: ${TMBComNivelAtividade.toFixed(2)} calorias por dia`, 'resultado-paragraph');
    }
};

const botaoCalcular = document.querySelector('.btn.btn-primary');

botaoCalcular.addEventListener('click', function () {
    const formulario = document.querySelector('form');

CalculadoraTMB.calcular();

formulario.focus();

});
