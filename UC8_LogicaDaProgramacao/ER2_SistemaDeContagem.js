// ATIVIDADE DO ENCONTRO REMOTO 2. //

// CODIFICAÇÃO DE UM SISTEMA DE CONTAGEM E CLASSIFICAÇÃO. //

/*
REGRAS PARA O EXERCÍCIO:
1) Percorrer de zero ao número de alunos;
2) Se o número for par, escreva "par" e o número correspondente;
3) Se o número for ímpar, escreva "ímpar" e o número correspondente;
4) Se o número for zero, escreva "zero" e o número correspondente.
*/

let NumeroDeAlunos = 10
// Contador++ é a mesma coisa que Contador = Contador +1. //

let Contador = 0
while (Contador <= NumeroDeAlunos){
    // console.log(Contador) //

    if (Contador == 0){
        console.log("O número atual é ZERO.")
    }
    
    // OPÇÃO 01 - CONCATENAR. //
    else if (Contador % 2 == 1){
        console.log("O número " + Contador + " é ÍMPAR.")
    }
    
    // OPÇÃO 02 - INTERPOLAR. //
    else{
        console.log(`O número ${Contador} é PAR.`)
    }

    Contador++ 
}