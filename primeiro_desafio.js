/* 
1 - Faça um programa para calcular o valor de uma viagem.

Você terá 3 variaveis. Sendo elas:
1 - Preço do combutivel;
2 - Gasto médio de combustivel do carro por km;
3 - Distancia em Km da Viagem;                */


const precoCombustivel = 3.45;
const MediakmLitros = 11;
const KmViagem = 150;

const litrosConsumidos = KmViagem / MediakmLitros;
const valorGasto = precoCombustivel * litrosConsumidos;

console.log("Valor gasto na viagem foi de " + valorGasto.toFixed(2));

