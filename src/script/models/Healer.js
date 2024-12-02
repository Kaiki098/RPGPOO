import { Character } from "./Charater.js";
import { textOutput, healerInfo } from "../constants.js";

export class Healer extends Character {
    constructor(name) {
        super(name, 120, 50, 20);
        this.faith = 100;
    }
    
    getCharacterStts() {
        return [this.name, this.health, this.power, this.faith];
    }
    
    attack(target) {
        if (!super.attack(target)) return false;
        let damage = Math.floor(Math.random() * 50);
        this.writeLog(`O curandeiro ${this.name} efetuou um ataque! Dano: ${damage}`);
        target.takeDamage(damage);
        return true;
    }
    
    useHealPower(target) {
        if (this.health == 0) {
            this.writeLog(`Não é possível efetuar uma cura, ${this.name} está morto`);
            return;
        }
        const healPoints = Math.floor(Math.random() * this.faith);
        this.writeLog(`O curandeiro ${this.name} efetuou uma cura! Cura: ${healPoints}`);
        target.heal(healPoints);
    }

    updateInfo() {
        healerInfo.innerText = `Nome: ${this.name} | Vida: ${this.health} \nPoder: ${this.power} | Fé: ${this.faith}`;
    }
}
