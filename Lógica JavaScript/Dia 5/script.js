let listaCompras = {
    frutas: [], 
    laticínios: [], 
    congelados: [],
    doces: []
}

let perguntaInicial;

do{

perguntaInicial = window.prompt("Você deseja adicionar alguma comida para a lista de compras? Responda com Sim ou Não");

if (perguntaInicial.toLowerCase() == "sim"){
    adicionarItem();
} else if (perguntaInicial.toLowerCase() == "não"){
    alert("Tudo bem, tenha um bom dia! :)");
    break;
} else{
    alert ("Não entendi.");
}
} while ( perguntaInicial.toLowerCase() != "sim" && perguntaInicial.toLowerCase() != "não");

function adicionarItem(){
    do{
        let alimento = window.prompt("Qual alimento você gostaria de adicionar?");
        let categoria = window.prompt("Em qual categoria ele pertence? Frutas, laticínios, congelados ou doces?")

        categoria = categoria.toLowerCase();

    if (categoria in listaCompras) {
        listaCompras[categoria].push(alimento);
        alert(`${alimento} adicionado.`);
    } else {
        alert("Categoria inválida.");
    }
    let continuar = window.prompt("Gostaria de adicionar mais algum item? Responda com Sim ou Não");
    if (continuar.toLowerCase() != "sim"){
        break;
    }
} while(true);
}
alert(`Lista de compras:\n  Frutas: ${listaCompras.frutas}\n  Laticínios: ${listaCompras.laticínios}\n  Congelados: ${listaCompras.congelados}\n  Doces: ${listaCompras.doces}`);
