import { Defense } from "./defense";
import { Movements } from "./movement";
import { Weapons } from "./weapons";

export function generateRandomProperty() {
    let randomProp = Math.random();
    let randomValue = Math.random() % 100;
    randomProp %= 6;
    switch (randomProp) {
        case 0:
            return new Movements.canFly(randomValue);
        case 1:
            return new Movements.canRun(randomValue);
        case 2:
            return new Movements.canSwim(randomValue);
        case 3:
            return new Weapons.Claws(randomValue);
        case 4:
            return new Weapons.Fangs(randomValue);
        case 5:
            return new Weapons.Spit(randomValue);    
        default:
            return new Defense(randomValue); 
    }
}