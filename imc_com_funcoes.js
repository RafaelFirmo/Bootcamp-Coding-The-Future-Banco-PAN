/* 
 O IMC - Indice de massa Corporal é um criterio da 
Organização de saude para dar um indice a condição de peso de uma pessoa adulta.

Formula do IMC:
IMC = peso / (altura * altura)

Elabore um algoritimo que dado o peso e a altura de um adulto informe sua condição de acordo com a tabela abaixo:

IMC em adultos Condição:
- Abaixo de 18.5. abaixo do peso;
- Entre 18.5 e 25. Peso normal;
- Entre 25 e 30. Acima do peso;
- Entre 30 e 40. Obeso;
- Acima de 40. Obsidade Grave         */


function calcularImc(peso, altura) {
    return peso / (altura * altura);
}

function classificarImc(imc) {
    if (imc < 18.5) {
        return 'Seu IMC foi de ' +imc.toFixed(2)+ ': Abaixo do peso.';
    } else if (imc >= 18.5 && imc < 25) {
        return 'Seu IMC foi de ' +imc.toFixed(2)+ ': Peso normal.';
    } else if (imc >= 25 && imc < 30) {
        return 'Seu IMC foi de ' +imc.toFixed(2)+ ': Acima do peso.';
    } else if (imc >= 30 && imc < 40) {
        return 'Seu IMC foi de ' + imc.toFixed(2) + ': Obesidade.';
    } else {
        return 'Seu IMC foi de ' + imc.toFixed(2) + ': Obesidade grave.';
    }
}

// Main  tenho as funções para calcular o imc e classificar
// Invocando imediatamente

(function main() {
    const peso = 75;
    const altura = 1.75;

    const imc = calcularImc(peso, altura);
    console.log(classificarImc(imc));
})();
