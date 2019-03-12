import Monster from "../creatures/monster";

export default class MonsterDecorator extends Monster {
    
    private monster: Monster;
    private additionalScream: string;

    constructor(_name: string, _monster: Monster) {
        super(_name);
        this.monster = _monster;
    }

    scream() {
        this.monster.scream();
        console.log(this.additionalScream);
    }
}