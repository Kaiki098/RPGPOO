import { Warrior } from "./models/Warrior.js";
import { Sorcerer } from "./models/Sorcerer.js";
import { Healer } from "./models/Healer.js";
import { Boss } from "./models/Boss.js";
import { buttonHealerAttack, buttonSorcererAttack, buttonWarriorAttack, buttonHealerPower } from "./constants.js";

const cardOne = document.getElementById('card-1');
const cardTwo = document.getElementById('card-2');
const cardThree = document.getElementById('card-3');
const cards = [cardOne, cardTwo, cardThree];

cards.forEach(card => {
    card.addEventListener('click', () => {
        cards.forEach(c => c.classList.remove('active-card'));
        card.classList.add('active-card');
    });
});


//Botões de ataque:
/////////////
const w1 = new Warrior("Leopoldo");
const s1 = new Sorcerer("Baltazar");
const h1 = new Healer("Anciã");
const b1 = new Boss("Balor");
const characters = [w1, s1, h1];

function removeCharacter(character) {
    const index = characters.indexOf(character);
    if (index > -1) {
        characters.splice(index, 1);
    }
}


//Eventos - Atacar:
buttonWarriorAttack.addEventListener('click', () => {
    if(w1.attack(b1)) {
        b1.attackRandom(characters);
        characters.forEach((character) => {
          if (character.isDead()) removeCharacter(character);
        });
        w1.updateInfo();
    }
});

buttonSorcererAttack.addEventListener('click', () => {
    if (s1.attack(b1)) {
        b1.attackRandom(characters);
        characters.forEach((character) => {
          if (character.isDead()) removeCharacter(character);
        });
        s1.updateInfo();
    }
});

buttonHealerAttack.addEventListener('click', () => {
    if (h1.attack(b1)) {
        b1.attackRandom(characters);
        characters.forEach((character) => { if (character.isDead()) removeCharacter(character)});
        h1.updateInfo();
    }
    
});

buttonHealerPower.addEventListener('click', () => {
    const healTarget = document.getElementById('heal-target');
    switch (healTarget.value) {
        case "Guerreiro":
            h1.useHealPower(w1);
            break;
        case "Feiticeiro":
            h1.useHealPower(s1);
            break;
        case "Curandeira":
            h1.useHealPower(h1);
            break;
        default:
            h1.writeLog("Alvo de cura inválido");
            break;
    }

});

s1.updateInfo();
w1.updateInfo();
h1.updateInfo();
