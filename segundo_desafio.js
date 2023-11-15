/* 
2- Faça um programa para calcular o valor de uma viagem.

1 - Preço do etanol;
2 - Preço da gasolina;
3 - O tipo de combustivel que está no seu carro;
4 - Gasto médio de combustivel do carro por KM;
5 - Distância em km da viagem;

Imprima no console o valor que será gasto para realizar esta viagem. */

const precoEtanol = 3.20;
const precoGasolina = 5.20;
const KmPorLitros = 10;
const distanciaEmKm = 100;

const tipoCompustivel = 'Gasolin';

const litrosConsumidos = distanciaEmKm / KmPorLitros;

if (tipoCompustivel === 'Gasolina') {
    const valorGasto = litrosConsumidos * precoGasolina;
    console.log("Valor gasto com Gasolina será de "+valorGasto.toFixed(2));
} else {
    const valorGasto = litrosConsumidos * precoEtanol;
    console.log("Valor gasto com Etanol será de "+valorGasto.toFixed(2));
}





