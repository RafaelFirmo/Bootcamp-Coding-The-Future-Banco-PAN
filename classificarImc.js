/*
Crie uma classe para representar pessoas.
Para cada pessoa teremos os atributos nome, peso e altura.
As pessoas devem ter a capacidade de dizer o valor do seu IMC(IMC = PESO /(ALTURA*ALTURA));
Instancie uma pessoa chamda Jose que tenha 70kg de peso e peça ao Jose dizer o valor do seu IMC;

Classifique o IMC
*/


class Pessoa {
    nome;
    peso;
    altura;

    constructor(nome, peso, altura) {
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }
    calcularImc() {
        return this.peso / (this.altura * this.altura);
    }
    classificarImc() {
        const imc = this.calcularImc()

        if (imc < 18.5) {
            return('Seu IMC foi de ' + imc.toFixed(2) + ': Abaixo do peso.');
        }
        else if (imc >= 18.5 && imc < 25) {
            return('Seu IMC foi de ' + imc.toFixed(2) + ': Peso normal.');
        }
        else if (imc >= 25 && imc < 30) {
            return('Seu IMC foi de ' + imc.toFixed(2) + ': Acima do peso.');
        }
        else if (imc >= 30 && imc < 40) {
            return('Seu IMC foi de ' + imc.toFixed(2) + ': Obesidade.');
        }
        else {
            return('Seu IMC foi de ' + imc.toFixed(2) + ': Obesidade grave.');
        }
    }
}

const jose = new Pessoa('Jose', 70, 1.75);
console.log(jose.classificarImc());

const mario = new Pessoa('Mario', 80, 1.60);
console.log(mario.classificarImc());

const marcio = new Pessoa('Marcio', 70, 1.80);
console.log(marcio.classificarImc());

const pedro = new Pessoa('Pedro', 80, 1.70);
console.log(pedro.classificarImc());




/*if (imc < 18.5) {
    console.log('Seu IMC foi de ' + imc.toFixed(2) + ': Abaixo do peso.');
}
else if (imc >= 18.5 && imc < 25) {
    console.log('Seu IMC foi de ' + imc.toFixed(2) + ': Peso normal.');
}
else if (imc >= 25 && imc < 30) {
    console.log('Seu IMC foi de ' + imc.toFixed(2) + ': Acima do peso.');
}
else if (imc >= 30 && imc < 40) {
    console.log('Seu IMC foi de ' + imc.toFixed(2) + ': Obesidade.');
}
else {
    console.log('Seu IMC foi de ' + imc.toFixed(2) + ': Obesidade grave.');
}*/