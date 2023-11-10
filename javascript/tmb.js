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
    }
};

const botaoCalcular = document.querySelector('.btn.btn-primary');

botaoCalcular.addEventListener('click', function () {
    const altura = parseFloat(document.querySelector('.form-control[name="altura"]').value);
    const peso = parseFloat(document.querySelector('.form-control[name="peso"]').value);
    const idade = parseFloat(document.querySelector('.form-control[name="idade"]').value);
    const nivelAtividadeSelect = document.querySelector('.form-select[name="nivelAtividade"]');
    const fatorNivelAtividade = parseFloat(nivelAtividadeSelect.options[nivelAtividadeSelect.selectedIndex].getAttribute('data-fator'));

    // const fatorNivelAtividade = parseFloat(nivelAtividadeSelect.value);

    const sexoSelecionado = document.querySelector('.form-select[name="sexo"]').value;
    const objetivoSelecionado = document.querySelector('.form-select[name="objetivo"]').value;
    const displayResultado = document.querySelector('.resultado');

    let resultado;

    if (sexoSelecionado === "homem") {
        resultado = CalculadoraTMB.calcularTMBMan(altura, peso, idade);
    } else if (sexoSelecionado === "mulher") {
        resultado = CalculadoraTMB.calcularTMBWoman(altura, peso, idade);
    }

    let TMBComNivelAtividade = resultado * fatorNivelAtividade;
    
    if (objetivoSelecionado === "perder") {
        TMBComNivelAtividade -= 500;
    } else if (objetivoSelecionado === "ganhar") {
        TMBComNivelAtividade += 500;
    }
    
    displayResultado.innerHTML = `Resultado: ${TMBComNivelAtividade.toFixed(2)} calorias por dia`;

});
