
const CalculadoraTMB = {
    nivelAtividadeFatores: {
        sedentarismo: 1.2,
        leve: 1.375,
        moderado: 1.55,
        ativo: 1.725,
        extremamente: 1.9
    },
    calcularTMBMan: function (altura, peso, idade, nivelAtividade) {
        let total;

        peso = 66 + (13.7 * peso);
        altura = 5 * altura;
        idade = 6.8 * idade;

        total = peso + altura - idade;

        const fatorNivelAtividade = this.fatorNivelAtividade(nivelAtividade);

        if (fatorNivelAtividade) {
            return total * fatorNivelAtividade;
        }

        return total;
    },

    calcularTMBWoman: function (altura, peso, idade, nivelAtividade) {
        let total;

        altura = 3.098 * altura
        peso = 447.593 + (9.247 * peso)
        idade = 4.330 * idade

        total = peso + altura - idade;

        const fatorNivelAtividade = this.fatorNivelAtividade(nivelAtividade);

        if(fatorNivelAtividade){
            return total * fatorNivelAtividade
        }

        return total;
        
    },
    fatorNivelAtividade: function (nivelAtividade){
        return this.nivelAtividadeFatores[nivelAtividade];
    }
};

const nome = document.querySelector('.form-control[name="nome"]');
const botaoCalcular = document.querySelector('.btn.btn-primary');

botaoCalcular.addEventListener('click', function () {
    const sexoSelecionado = document.querySelector('.form-select[name="sexo"]').value;
    const nivelAtividade = document.querySelector('.form-select[name="nivelAtividade"]').value;
    const altura = parseFloat(document.querySelector('.form-control[name="altura"]').value);
    const peso = parseFloat(document.querySelector('.form-control[name="peso"]').value);
    const idade = parseFloat(document.querySelector('.form-control[name="idade"]').value);
    const displayResultado = document.querySelector('.resultado');

    let resultado;

    if(sexoSelecionado === "homem"){
        resultado = CalculadoraTMB.calcularTMBMan(altura, peso, idade, nivelAtividade);
    } else {
        resultado = CalculadoraTMB.calcularTMBWoman(altura, peso, idade, nivelAtividade);
    }

    displayResultado.innerHTML = resultado;

});


