import * as Main from "./main";
import { Movements } from './properties/movement';
import { Weapons } from './properties/weapons';

let monster1 = new Main.Monster('Jack');
let monster2 = new Main.Monster('Vasya');
monster1.addMovement(new Movements.canRun(10));
monster1.addMovement(new Movements.canFly(100));
monster2.addMovement(new Movements.canRun(20));
