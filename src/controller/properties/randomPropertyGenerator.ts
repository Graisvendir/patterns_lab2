import { Movements } from "./movement";

export function generateRandomProperty() {
    let randomProp = Math.round(Math.random() * 10);
    let randomValue = Math.round(Math.random() * 100) ;
    randomProp %= 6;
    switch (randomProp) {
        case 0:
            return new Movements.canFly(randomValue);
        case 1:
            return new Movements.canRun(randomValue);
        case 2:
            return new Movements.canSwim(randomValue);
    }
}