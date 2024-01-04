// Valores de exemplo para nome do herói e experiência
let Heroi = "Super Gustavo"; // nome do herói
let xpHeroi = 20000; // nivel do herói

let nomeDoHeroi = Heroi.split(" ");
let nomeDoHeroiSeparado = nomeDoHeroi.join(" ");


// para mapear o XP para um elo disponível
function nomedoEloheroi(xp) {
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
function eloDoHeroi(xp) {
    let categoria = nomedoEloheroi(xp);

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
let elo = eloDoHeroi(xpHeroi);
console.log(`O heroi ${nomeDoHeroiSeparado} está no elo: ${elo}`);