let alimento;
let categoria;
let frutas = [];
let laticínios = [];
let doces = [];
let congelados = [];
let remover;

let adicionarMais = 'sim';

while (adicionarMais.toLowerCase() === 'sim' || adicionarMais.toLowerCase() === 'remover') {
    if (adicionarMais.toLowerCase() === 'remover') {
        if (frutas.length === 0 && laticínios.length === 0 && doces.length === 0 && congelados.length === 0) {
            alert("Lista vazia.");
        } else {
            remover = window.prompt(`Lista de compras:\n  Frutas: ${frutas}\n  Laticínios: ${laticínios}\n  Doces: ${doces}\n  Congelados: ${congelados}.\n Qual alimento gostaria de remover?`);

            if (frutas.indexOf(remover) !== -1) {
                frutas.splice(frutas.indexOf(remover), 1);
                alert(`${remover} foi removido.`);
            } else if (laticínios.indexOf(remover) !== -1) {
                laticínios.splice(laticínios.indexOf(remover), 1);
                alert(`${remover} foi removido.`);
            } else if (doces.indexOf(remover) !== -1) {
                doces.splice(doces.indexOf(remover), 1);
                alert(`${remover} foi removido.`);
            } else if (congelados.indexOf(remover) !== -1) {
                congelados.splice(congelados.indexOf(remover), 1);
                alert(`${remover} foi removido.`);
            }
        }
    } else {
        alimento = window.prompt("Qual alimento você gostaria de adicionar?");
        categoria = window.prompt("Em qual categoria ele pertence: 'Frutas', 'Laticínios', 'Doces' ou 'Congelados'?");
        
        while (categoria.toLowerCase() !== 'frutas' && categoria.toLowerCase() !== 'laticínios' && categoria.toLowerCase() !== 'doces' && categoria.toLowerCase() !== 'congelados') {
            alert("Categoria inválida.");
            categoria = window.prompt("Em qual categoria ele pertence: 'Frutas', 'Laticínios', 'Doces' ou 'Congelados'?");
        }

        switch (categoria.toLowerCase()) {
            case 'frutas':
                frutas.push(alimento);
                break;
            case 'laticínios':
                laticínios.push(alimento);
                break;
            case 'doces':
                doces.push(alimento);
                break;
            case 'congelados':
                congelados.push(alimento);
                break;
        }
    }

    adicionarMais = window.prompt("Você gostaria de adicionar algo mais? Digite 'Sim', 'Não' ou 'Remover'.");
    
    while (adicionarMais.toLowerCase() !== 'sim' && adicionarMais.toLowerCase() !== 'não' && adicionarMais.toLowerCase() !== 'remover') {
        alert("Opção inválida");
        adicionarMais = window.prompt("Você gostaria de adicionar algo mais? Digite 'Sim', 'Não' ou 'Remover'.");
    }
}

alert(`\n Frutas: ${frutas} \n Laticínios: ${laticínios} \n Doces: ${doces} \n Congelados: ${congelados}`);