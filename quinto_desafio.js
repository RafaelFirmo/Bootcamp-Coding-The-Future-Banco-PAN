/*
5 - Elabore um algoritimo que calcule o que deve ser pago por um produto, considerando o preço normal de etiqueta e a escolha de condição de pagamento.
Utilize os codigos da tabela a seguir para ler qual a condição de pagamentp escolhida e efetuar o calculo adequado.

Codigo condição de pagamento:
1 - Á vista Debito, recebe 10% de desconto;
2 - Á vista no Dinheiro ou Pix, recebe 15% de desconto;
3 - Em duas vezes, preço normal de etiqueta sem juros;
4 - Acima de duas vezes, preço normal de etiqueta mais juros de 10%. */

const precoEtiqueta = 100.00;

const formaPagamento = 3;

if (formaPagamento === 1) {
    console.log(precoEtiqueta - (precoEtiqueta * 0.1));
    
} else if (formaPagamento === 2) {
    console.log(precoEtiqueta - (precoEtiqueta * 0.15));

} else if (formaPagamento === 3) {
    console.log(precoEtiqueta)

} else {
    console.log(precoEtiqueta + (precoEtiqueta * 0.15));
}

