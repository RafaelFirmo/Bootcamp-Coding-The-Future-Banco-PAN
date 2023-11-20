/*
1 - Crie uma classe para representar carros.
Os Carros possuem uma marca, uma cor e um gasto medio de combustivel po Kilometro rodado.
Crie um metodo que dado e quantidade de quilometros e o preço de cobustivel nos de o valor gasto em reais para realizar este percurso.
*/

class Carro{
    marca;
    cor;
    ano;
    gastoMedioPorKm;
    tipoCombustivel;

    constructor(marca, cor, ano, gastoMedioPorKm, tipoCombustivel) {
        this.marca = marca;
        this.cor = cor;
        this.ano = ano;
        this.gastoMedioPorKm = gastoMedioPorKm;
        this.tipoCombustivel = tipoCombustivel;
    }
    calcularGastoPercurso(distanciaEmKm, precoCombustivel) {
        return distanciaEmKm * this.gastoMedioPorKm * precoCombustivel;
    }
}

const uno = new Carro('fiat', 'branca', 1992, 1/12, 'gasolina');
console.log(uno.calcularGastoPercurso(70, 4));

const gol = new Carro('volkswagen', 'prata', 1990, 1/10, 'etanol');
console.log(gol.calcularGastoPercurso(70, 5));

const palio = new Carro('fiat', 'verde', 1995, 1/11, 'gasolina');
console.log(palio.calcularGastoPercurso(70, 6));