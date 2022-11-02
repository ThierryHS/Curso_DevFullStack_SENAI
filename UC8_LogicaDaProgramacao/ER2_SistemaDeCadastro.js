// ATIVIDADE DO ENCONTRO REMOTO 2. //

// CODIFICAÇÃO DO FLUXOGRAMA DE CADASTRO DE EVENTOS //

let Idade = 18

if(Idade >= 18 && Idade <= 80){
    console.log("Cadastro liberado.")
}else if(Idade > 80 || Idade < 0){
    console.log("Idade inválida.")
}else{
    console.log("Idade não permitida.")
}

let Participantes = ["Gaspar", "Baltazar", "Melquior"]
for (let nome of Participantes){
    console.log(`Participante ${nome}`)
}

let Palestrantes = ["Gabriel", "Maria", "José"]
for (let nome of Palestrantes){
    console.log(`Palestrante ${nome}`)
}

let DataEvento = 25
let DataReserva = 24
if (DataReserva > DataEvento){
    console.log("Este evento já aconteceu.")
}else if (DataReserva == DataEvento){
    console.log("Limite de tempo para cadastro excedido.")
}else {
    console.log(`Finalize seu cadastro. O evento acontecerá no dia ${DataEvento}.`)
}

let Cadastros = 99
if (Cadastros > 100){
    console.log("Limite de participantes excedido.")
}else{
    console.log("Cadastro realizado com sucesso.")
}