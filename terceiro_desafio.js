/*3- Faça um algaritimo que dado as 3 notas tiradas por um aluno em um semestre da faculdade calcula sua media e sua classificação conforme a tabela abaixo.

media = (nota1 + nota2 + nota3) / 3;

Classificação:
-Media menor que 5, reprovado;
-Media entre 5 e 7, recuperação;
-Media acima de 7, passou de semestre: */

let nota1 = 10;
let nota2 = 6;
let nota3 = 6;
let media = (nota1 + nota2 + nota3) / 3;

if (media < 5) {
    console.log("Sua media foi " + media.toFixed(2) + ". Esta reprovado.");
}
else if (media >= 5 && media <= 7) {
    console.log("Sua media foi " + media.toFixed(2) + ". Esta de recuperação.");
} 
else {
    console.log("Sua media foi " + media.toFixed(2) + ". Foi aprovado.");
};