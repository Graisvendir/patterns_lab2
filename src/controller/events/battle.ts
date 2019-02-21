import Creature from '../creatures/creature';
import * as Constants from '../../constants';

function canAttackerClaimTarget(_attacker: Creature, _target: Creature): boolean {
    if (_attacker.complexSpeed() > _target.complexSpeed())
        return true;
    return false;
}

function attackerKillTarget(_attacker: Creature, _target: Creature) {
    console.log('    ' + _attacker.getName + ' win ');
    _attacker.takeRandomPropertyFrom(_target);
}

function targetKillAttacker(_attacker: Creature, _target: Creature) {
    console.log('    ' + _target.getName + ' win ');
    _target.takeRandomPropertyFrom(_attacker)
}

/**
 * main battle function, check attackers power and target armor
 * @param {Creature} _attacker
 * @param {Creature} _target
 * @returns {boolean} true if _attacker win battle, else false
 */
function battle(_attacker: Creature, _target: Creature): boolean {
    console.log('   No one can pierce armor. They run away!');
    return false;
}

/**
 * proxy, initiate battle, check what _target is alive
 * @param {Creature} _attacker  Creature, what attack target
 * @param {Creature} _target    Creature, what will attacked
 */
export function attack(_attacker: Creature, _target: Creature) {
    
}
