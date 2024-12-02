import { textOutput, output } from "../constants.js";

export class Character {
    constructor(name, health, power, agility) {
        this.name = name; //nome
        this.health = health; //saúde
        this.power = power; //poder
        this.maxHealth = health;
        this.agility = agility;
    }

    writeLog(message) {
        textOutput.innerText += message + "\n";
        output.scrollTop = output.scrollHeight;
    }

    getCharacterStts() {
        return [this.name, this.health, this.power];
    }

    attack(target) {
        if (this.health <= 0) {
            this.writeLog(`Não é possível efetuar um ataque, ${this.name} está morto`);
            return false;
        }
        return true;
    }

    calculateDodgeChance(damage) {
        return Math.floor(Math.random() * damage); 
    }

    isDead() {
        return this.health <= 0;
    }

    takeDamage(damage) {
        if (this.calculateDodgeChance(damage) < this.agility) {
            this.writeLog(`${this.name} conseguiu desviar do ataque!`);
            return;
        }

        this.health -= damage;
        if (this.isDead()) {
            this.health = 0
            this.writeLog(`${this.name} morreu!`);
        }
        this.updateInfo();
    }

    heal(healPoints) {
        if (this.health == 0) {
            this.writeLog(`Infelizmente ${this.name} está morto, portanto não é possível curá-lo!`);
            return;
        }
        this.health += healPoints;
        if (this.health > this.maxHealth)
            this.health = this.maxHealth;
        this.updateInfo();
    }

    updateInfo() { }
}
