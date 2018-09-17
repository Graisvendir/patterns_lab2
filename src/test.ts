import * as Main from "./main";
import { Movements } from './properties/movement';
import { Weapons } from './properties/weapons';

let monster1 = new Main.Monster('Jack');
let monster2 = new Main.Monster('Vasya');
monster1.updateMovements(new Movements.canRun(10));
monster1.updateMovements(new Movements.canFly(100));
monster2.updateWeapons(new Weapons.Claws(20));
monster1.showProperties();
monster2.showProperties();