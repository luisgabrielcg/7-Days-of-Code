const numero = Math.floor(Math.random() * 11);
let resposta;
let tentativas = 3;

function obterResposta() {
    let input = window.prompt(`Adivinhe o meu número, de 0 a 10. Você tem ${tentativas} chance(s).`);

    while (isNaN(input) || input === "" || input < 0 || input > 10) {
        alert("Por favor, insira um número válido de 0 a 10.");
        input = window.prompt(`Você ainda tem ${tentativas} chance(s). Insira outro número:`);
    }

    return parseInt(input);
}

resposta = obterResposta();

while (tentativas > 0) {
    if (resposta === numero) {
        alert(`Parabéns, você acertou, o número era ${numero}.`);
        document.getElementById("bloco").innerHTML = (`Parabéns, você venceu!! O número era ${numero}.`);
        break;
    } else {
        tentativas--;
        if (tentativas > 0) {
            resposta = obterResposta();
        }
    }
}

if (tentativas === 0) {
    alert(`Você perdeu. O número era ${numero}`);
}
