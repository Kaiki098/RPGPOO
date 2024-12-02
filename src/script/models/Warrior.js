import { Character } from "./Charater.js";
import { textOutput, warriorInfo } from "../constants.js";

export class Warrior extends Character {
    constructor(name) {
        super(name, 150, 20, 90);
        this.resistence = 50;
    }

    getCharacterStts() {
        return [this.name, this.health, this.power, this.resistence];
    }

    attack(target) {
        if (!super.attack(target)) return false;
        let damage = Math.floor(Math.random() * 100);
        this.writeLog(`O guerreiro ${this.name} efetuou um ataque! Dano: ${damage}`);
        target.takeDamage(damage);

        return true;
    }
    updateInfo() {
        warriorInfo.innerText = `Nome: ${this.name} | Vida: ${this.health} \nPoder: ${this.power} | Resistência: ${this.resistence}`;
    }

}
