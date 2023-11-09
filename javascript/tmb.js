
const CalculadoraTMB = {
    nivelAtividadeFatores: {
        sedentarismo: 1.2,
        leve: 1.375,
        moderado: 1.55,
        ativo: 1.725,
        extremamente: 1.9
    },
    calcularTMB: function (altura, peso, idade, nivelAtividade) {
        let total;

        peso = 66 + (13.7 * peso);
        altura = 5 * altura;
        idade = 6.8 * idade;

        total = peso + altura - idade;

        return total;
    }
};

const nome = document.querySelector('.form-control[name="nome"]');
const nivelAtividade = document.querySelector('.form-select[name="nivelAtividade"]');
const botaoCalcular = document.querySelector('.btn.btn-primary');
const sexo = document.querySelector('.form-select[name="sexo"]');

botaoCalcular.addEventListener('click',function() {
    const altura = parseFloat(document.querySelector('.form-control[name="altura"]').value);
    const peso = parseFloat(document.querySelector('.form-control[name="peso"]').value);
    const idade = parseFloat(document.querySelector('.form-control[name="idade"]').value);
    const displayResultado = document.querySelector('.resultado');


    const resultado = CalculadoraTMB.calcularTMB(altura, peso, idade);

    return displayResultado.innerHTML = resultado;
});


