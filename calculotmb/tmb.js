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
    adicionarImagem: function (src, height, width, isVideo, sexo, objetivo) {
        const resultadoImg = document.querySelector('.img-results');

        if (isVideo) {
            const videoResult = document.createElement('video');
            videoResult.src = (sexo === 'mulher' && objetivo === 'perder') ? `./images/weightlossm.mp4` :
                              (sexo === 'mulher' && objetivo === 'ganhar') ? `./images/gainM.mp4`:
                              (sexo === 'homem' && objetivo === 'perder') ? `./images/esteira.mp4`:
                              (sexo === 'homem' && objetivo === 'ganhar') ? `./images/gain.mp4`:

            videoResult.classList.add('videoResult');
            videoResult.setAttribute('height', height);
            videoResult.setAttribute('width', width);
            videoResult.setAttribute('autoplay', true);
            videoResult.setAttribute('muted', true);
            videoResult.setAttribute('loop', true);
            // videoResult.setAttribute('controls', false);

            resultadoImg.appendChild(videoResult);
        } else {

            const imgResult = document.createElement('img');
            imgResult.src = (sexo === 'mulher' && objetivo === 'perder') ? `./images/weightlossm.mp4` :
                            (sexo === 'mulher' && objetivo === 'ganhar') ? `./images/gainM.mp4`:
                            (sexo === 'homem' && objetivo === 'perder') ? `./images/esteira.mp4`:
                            (sexo === 'homem' && objetivo === 'ganhar') ? `./images/gain.mp4`:

            imgResult.classList.add('imgResult');
            imgResult.style.height = height + 'px';
            imgResult.style.width = width + 'px';
            resultadoImg.appendChild(imgResult);
        
    }
    },
    limparResultados: function () {
        const resultadoDiv = document.querySelector('.resultado');
        const resultadoImg = document.querySelector('.img-results');
        resultadoDiv.innerHTML = '';
        resultadoImg.innerHTML = '';

    },
    calcular: function () {
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
            this.adicionarParagrafo(`Olá ${nomeUsuario} Se voce deseja <u>perder peso</u> consuma: ${TMBComNivelAtividade.toFixed(2)} calorias por dia `);
            this.adicionarImagem(`./images/esteira.mp4`, 600, 600, true, sexoSelecionado, objetivoSelecionado);
        } else if (objetivoSelecionado === "ganhar") {
            TMBComNivelAtividade += 500;
            this.adicionarParagrafo(`Olá ${nomeUsuario} Se voce deseja <u>Ganhar Peso</u> consuma: ${TMBComNivelAtividade.toFixed(2)} calorias por dia `);
            this.adicionarImagem(`./images/gain.mp4`, 400, 150, true, sexoSelecionado, objetivoSelecionado);
        }

        this.adicionarParagrafo(`TMB: Aqui é quantas calorias seu corpo consome por dia: ${tmbSemObjetivoDefinido.toFixed(2)}`);
        // this.adicionarParagrafo(`Resultado: ${TMBComNivelAtividade.toFixed(2)} calorias por dia`, 'resultado-paragraph');
    }
};

const botaoCalcular = document.querySelector('.btn.btn-primary');

botaoCalcular.addEventListener('click', function () {
    const teste = document.querySelector('.dicas');

    const testeDicas = document.createElement('div');
    testeDicas.innerHTML = 'AQUI EU FIZ UM TESTE';
    teste.appendChild(testeDicas);

    CalculadoraTMB.calcular();

});

botaoCalcular.addEventListener('keydown', function (btn) {

    const formulario = document.querySelector('form');
    if (btn.keyCode === "013") {

        CalculadoraTMB.calcular();
    }

    formulario.focus();

});
