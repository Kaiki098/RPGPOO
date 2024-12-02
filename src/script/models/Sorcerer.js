import { Character } from "./Charater.js";
import { textOutput, sorcererInfo } from "../constants.js";
export class Sorcerer extends Character {
    constructor(name) {
        super(name, 100, 35, 30);
        this.mana = 100;
    } 

    getCharacterStts() {
        return [this.name, this.health, this.power, this.mana];
    }
    
    attack(target) {
        if (!super.attack(target)) return false;
        let damage = Math.floor(Math.random() * 200);
        if (this.mana >= 20 && this.power == 35) {
            this.writeLog(`O feiticeiro ${this.name} efetuou um ataque especial! Dano: ${damage * 2}`);
            this.mana -= 20;
            target.takeDamage(damage * 2);
        }
        else {
            this.writeLog(`O feiticeiro ${this.name} efetuou um ataque! Dano: ${damage}`);
            target.takeDamage(damage);
        }
        return true;
    }
   
    updateInfo() {
        sorcererInfo.innerText = `Nome: ${this.name} | Vida: ${this.health} \nPoder: ${this.power} | Mana: ${this.mana}`;
    }
}
