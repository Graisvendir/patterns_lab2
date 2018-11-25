import Creature from "../creatures/creature";

export class Composite {
    private name: string;
    private creatures: Creature[];
    
    constructor(_name: string, _array?: Creature[]) {
        this.name = _name;
        if (_array) {
            this.creatures = _array;
        }
    }

    get getName() : string {
        return this.name;
    }

    get getCreatures() : Creature[] {
        return this.creatures;
    }

    public show() {
        console.log(this.name + ':');
        for (let i = 0; i < this.creatures.length; i++) {
            console.log('   ' + this.creatures[i].getName + '\n');
        }
    }

    public add(_creature: Creature) {
        this.creatures.push(_creature);
    }
}