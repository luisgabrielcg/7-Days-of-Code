let nome = window.prompt("Qual o seu nome?");
let idade = window.prompt("Qual sua idade?");
let linguagem = window.prompt("Qual linguagem você está estudando?");
idade = Number(idade);

if (resposta()) {
    perguntaextra();
}

function resposta() {
    if (nome && idade && linguagem) {
        document.getElementById("H1").innerHTML = "Respostas abaixo:"
        document.getElementById("respostas").innerHTML = `Olá ${nome}, você tem ${idade} anos e já está aprendendo ${linguagem}!`
        return true;
    } else {
        if (isNaN(idade)) {
            alert("Insira uma idade válida.");
        } else {
            alert("Responda as questões corretamente.");
        }
        return false;
    }
}

function perguntaextra() {
    let respostaExtra;
    do {
        respostaExtra = window.prompt(`Você gosta de estudar ${linguagem}? Responda com o número 1 para SIM ou 2 para NÃO.`);
    } while (respostaExtra !== "1" && respostaExtra !== "2");

    if (respostaExtra === "1") {
        document.getElementById("extra").innerHTML = "Muito bom! Continue estudando e você terá muito sucesso.";
    } else if (respostaExtra === "2") {
        document.getElementById("extra").innerHTML = "Ahh que pena... Já tentou aprender outras linguagens?";
    }
}