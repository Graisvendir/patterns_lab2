import { currentCreature, monsterTemplate, robotTemplate } from '../main'
import Creature from '../controller/creatures/creature';
import Monster from '../controller/creatures/monster';

function buttonMonsterClick() {
    if (currentCreature instanceof Monster) {
        return monsterTemplate;
    } else {
        return robotTemplate;
    }
}