import { Character } from './Charater.js';
import { textOutput, healthBar } from '../constants.js';
export class Boss extends Character {
    constructor(name) {
        super(name, 1000, 100);
        this.rage = 0;
    }
    
    takeDamage(damage) {
        this.health -= damage;
        this.increaseRage();
        this.updateHealthBar();
    }
    
    increaseRage(damage) {
        this.rage += 20;
    }
    
    attackRandom(characters) {
        const targetIndex = Math.floor(Math.random() * characters.length);
        const target = characters[targetIndex];
        this.attack(target);
    }

    attack(target) {
        let damage = Math.floor(Math.random() * (100 + this.rage));
        this.writeLog(`${this.name} efetuou um ataque em ${target.name} com dano de ${damage}`);
        target.takeDamage(damage);
    }

    updateHealthBar() {
        const healthPercentage = (this.health / this.maxHealth) * 100;
        healthBar.style.width = `${healthPercentage}%`;
    }
}
