/* 
4 - O IMC - Indice de massa Corporal é um criterio da 
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

const peso = 80;
const altura = 1.75;
const imc = peso / (altura * altura);  /* OU peso / Math.pow(altura, 2); */

if (imc < 18.5) {
    console.log('Seu IMC foi de ' +imc.toFixed(2)+ ': Abaixo do peso.');
}
else if (imc >= 18.5 && imc < 25) {
    console.log('Seu IMC foi de ' +imc.toFixed(2)+ ': Peso normal.');
}
else if (imc >= 25 && imc < 30) {
    console.log('Seu IMC foi de ' +imc.toFixed(2)+ ': Acima do peso.');
}
else if (imc >= 30 && imc < 40) {
    console.log('Seu IMC foi de ' +imc.toFixed(2)+ ': Obesidade.');
}
else {
    console.log('Seu IMC foi de ' + imc.toFixed(2) + ': Obesidade grave.');
}
