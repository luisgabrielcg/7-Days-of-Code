let area;

do{
    area = window.prompt("Escolha uma área: Front-End ou Back-End?")
    if (area === "Front-End"){
        alert("Você escolheu Front-End. Escolha uma sub-área:");
        frontend();
    } else if (area === "Back-End"){
        alert("Você escolheu Back-End. Escolha uma sub-área:")
        backend();
    } else {
        alert("Escolha inválida");
    
}} while (area !== "Front-End" && area !== "Back-End");


function frontend(){
let subFrontEnd;
    do{
        subFrontEnd = window.prompt("Você gostaria de aprender React ou Vue?");
    if (subFrontEnd !== "React" && subFrontEnd !== "Vue"){
        alert ("Escolha inválida.")
    }
}   while (subFrontEnd !== "React" && subFrontEnd !== "Vue");
    alert(`Você escolheu ${area} e ${subFrontEnd}.`);

let especializar = window.prompt(`Você deseja se especializar em ${area} e ${subFrontEnd} ou deseja se tornar Fullstack? Digite: 'Especializar' ou 'Fullstack'.`);

if (especializar.toLowerCase() === 'especializar') {
    alert(`Você escolheu se especializar em ${area} e ${subFrontEnd}. Boa sorte!`);
} else if (especializar.toLowerCase() === 'fullstack') {
    alert("Você escolheu se tornar fullstack, interessante!!");
    fullstack();
} else {
    alert("Escolha inválida.");
}
}



function backend(){
    let subBackEnd;
    do{
        subBackEnd = window.prompt("Você gostaria de aprender C# ou Java?")
            if (subBackEnd !== "C#" && subBackEnd !== "Java")
            alert ("Escolha uma opção válida.")
    } while (subBackEnd !== "C#" && subBackEnd !== "Java");
    alert (`Você escolheu ${area} e ${subBackEnd}.`);

let especializar = window.prompt(`Você deseja se especializar em ${area} e ${subBackEnd} ou deseja se tornar Fullstack? Digite: 'Especializar' ou 'Fullstack'.`);

if (especializar.toLowerCase() === 'especializar') {
    alert(`Você escolheu se especializar em ${area} e ${subBackEnd}. Boa sorte!`);
} else if (especializar.toLowerCase() === 'fullstack') {
    alert("Você escolheu se tornar fullstack, interessante!!");
    fullstack();
} else {
    alert("Escolha inválida.");
}
}

function fullstack() {
    let opcoesFullstack = "";
    let adicionarMais;

    do {
        opcoesFullstack += window.prompt("Digite uma linguagem de programação que você gostaria de aprender:");
        do {
            adicionarMais = window.prompt("Tem mais alguma tecnologia que você gostaria de aprender? Se sim, digite 'Ok'. Caso contrário digite 'Não'.");
        } while (adicionarMais.toLowerCase() !== 'ok' && adicionarMais.toLowerCase() !== "não");

        if (adicionarMais.toLowerCase() === 'ok') {
            opcoesFullstack += ", ";
        }

    } while (adicionarMais.toLowerCase() === 'ok');

    if (opcoesFullstack.toLowerCase() !== "ok") {
        alert(`Você escolheu as linguagens: ${opcoesFullstack}. \nBoa sorte!`);
    }
}


