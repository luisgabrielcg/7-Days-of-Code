let n1;
let n2;
let operacao;
let resposta;
 
do{
    n1 = window.prompt("Escolha um número.");
    if (isNaN(n1)){
        alert("Escolha um número válido.")
    }
} while (isNaN(n1));


do{
    operacao = window.prompt(`Qual operação você quer fazer com o número ${n1}?\n 'Adição', 'Subtração', 'Multiplicação', 'Divisão' ou 'Sair'?`);
    if (operacao.toLowerCase() !== 'adição' && operacao.toLowerCase() !== 'subtração' && operacao.toLowerCase() !== 'multiplicação' && operacao.toLowerCase() !== 'divisão' && operacao.toLowerCase() !== 'sair'){
    alert("Insira uma operação válida.")};
}   while(operacao.toLowerCase() !== 'adição' && operacao.toLowerCase() !== 'subtração' && operacao.toLowerCase() !== 'multiplicação' && operacao.toLowerCase() !== 'divisão' && operacao.toLowerCase() !== 'sair')

if (operacao.toLowerCase() !== 'sair') {
    do {
        n2 = window.prompt("Escolha outro número.");
        if (isNaN(n2)) {
            alert("Escolha um número válido.");
        }
    } while (isNaN(n2));
} else {
    alert("Até a próxima!");
}

switch (operacao.toLowerCase()){
    case 'adição':
        adição()
        break;
    case 'subtração':
        subtração()
        break;
    case 'multiplicação':
        multiplicação()
        break;    
    case 'divisão':
        divisão()
        break;               
}

function adição(){
    resposta = Number(n1) + Number(n2);
    alert(`A resposta da soma entre ${n1} e ${n2} é: ${resposta}.`);
}

function subtração(){
    resposta = Number(n1) - Number(n2);
    alert(`A resposta da subtração entre ${n1} e ${n2} é: ${resposta}.`);
}

function multiplicação(){
    resposta = Number(n1) * Number(n2);
    alert(`A resposta da multiplicação entre ${n1} e ${n2} é: ${resposta}.`);
}

function divisão(){
    resposta = Number(n1) / Number(n2);
    alert(`A resposta da divisão entre ${n1} e ${n2} é: ${resposta}.`);
}
