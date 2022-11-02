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

// _____________________________________________________________ //

let NomeDosCavaleiros = ["Artur", "Tristam", "Perceval", "Lancelot", "Constantine", "Galahad", "Ivain"]
for (let nome of NomeDosCavaleiros){
    console.log(`Este é Sir ${nome}`)
}

// _____________________________________________________________ //

let Idade = 33
let Ingresso = true // Atribuindo o valor "true" a variável "Ingresso" //

if(Idade >= 18 && Ingresso == true){ // Comparando se o valor dentro da variável "ingresso" é realmente "true" //
    console.log("Seja bem-vindo!")
}else{
    console.log("Você não tem permissão para entrar.")
}

/*
E - CONJUNÇÃO COORDENATIVA ADITIVA;
OU - CONJUNÇÃO COORDENATIVA ALTERNATIVA.
*/
