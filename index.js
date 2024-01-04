// Valores de exemplo para nome do herói e experiência
let nomeHeroi = "SuperGustavo"; // nome do herói
let xpHeroi = 20000; // nivel do herói

// para mapear o XP para um elo disponível
function mapearParaElo(xp) {
    if (xp < 1000) return "Ferro";
    if (xp <= 2000) return "Bronze";
    if (xp <= 5000) return "Prata";
    if (xp <= 7000) return "Ouro";
    if (xp <= 8000) return "Platina";
    if (xp <= 9000) return "Ascendente";
    if (xp <= 10000) return "Imortal";
    return "Radiante";
}

// Função para determinar o nível do herói
function nivelHeroi(xp) {
    let categoria = mapearParaElo(xp);

    switch(categoria) {
        case "Ferro":
            return "Ferro";
        case "Bronze":
            return "Bronze";
        case "Prata":
            return "Prata";
        case "Ouro":
            return "Ouro";
        case "Platina":
            return "Platina";
        case "Ascendente":
            return "Ascendente";
        case "Imortal":
            return "Imortal";
        default:
            return "Radiante";
    }
}

// exibir o nível do herói na tela
let nivel = nivelHeroi(xpHeroi);
console.log(`O herói ${nomeHeroi} está no nível: ${nivel}`);